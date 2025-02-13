"use client";

import { forwardRef, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";

const GoogleAddressAutoComplete = forwardRef(
  ({ onSelectAddress, inputVariant, ...props }, ref) => {
    const inputRef = useRef(null);

    useEffect(() => {
      if (window.google) {
        const autocomplete = new window.google.maps.places.Autocomplete(
          inputRef.current,
          {
            types: ["address"],
            componentRestrictions: { country: "us" },
          },
        );

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          onSelectAddress(place);
        });
      }
    }, []);

    return (
      <Input
        ref={(e) => {
          ref = e;
          inputRef.current = e;
        }}
        variant={inputVariant}
        {...props}
      />
    );
  },
);

export default GoogleAddressAutoComplete;
