"use client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";

// A local preview using the real component already in your template.
export function InputOTPPreview() {
  return (
    <div className="space-y-3">
      <Label htmlFor="gallery-code">Four-character code</Label>
      <InputOTP id="gallery-code" maxLength={4}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-xs text-muted-foreground">
        Practice only. No code is sent.
      </p>
    </div>
  );
}
