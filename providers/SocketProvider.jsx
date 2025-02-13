"use client";

import { createContext, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import { BASE_URL } from "@/lib/axios";
import { useSession } from "next-auth/react";
import useNotifications from "@/store/useNotifications";
import useBalanceStore from "@/store/useBalanceStore";

const SocketContext = createContext(null);

const SocketProvider = ({ children }) => {
  const { data: session } = useSession();
  const socket = useRef(null);
  const { setNotification } = useNotifications();
  const { setBalance } = useBalanceStore();

  useEffect(() => {
    if (!socket.current && session) {
      socket.current = io(BASE_URL, {
        secure: true,
        extraHeaders: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      });

      socket.current.on("connect", () => {
        console.log("Connected to socket server");
      });

      socket.current.on("disconnect", (reason) => {
        console.log("Disconnected from socket server", reason);
      });

      socket.current.on("notification", (notification) => {
        console.log("Notification", notification);
        console.log("JSON.parse(notification)", JSON.parse(notification));
        setNotification(JSON.parse(notification));
      });

      socket.current.on("balances", (data) => {
        const balanceResponse = JSON.parse(data);
        setBalance(balanceResponse);
      });
    }

    return () => {
      if (socket.current) {
        socket.current.disconnect();
        socket.current = null;
      }
    };
  }, [session?.user?.id]);

  return (
    <SocketContext.Provider value={socket.current}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
