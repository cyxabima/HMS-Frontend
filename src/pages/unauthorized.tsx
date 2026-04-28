import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  IconShieldLock,
  IconAlertTriangle,
  IconArrowBackUp,
  IconFingerprint
} from "@tabler/icons-react";

export default function Unauthorized() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-background text-foreground font-sans">
      {/* Structural Backdrop for that "System" feel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="text-center space-y-6">

          {/* Technical Icon Hub */}
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-secondary/50 border border-border">
            <IconShieldLock size={48} stroke={1.5} className="text-primary" />
          </div>

          {/* Typography: Using your Outfit Variable font for headings */}
          <div className="space-y-2">
            <h1 className="text-3xl font-heading font-bold tracking-tight uppercase italic">
              Access Restricted
            </h1>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed font-medium">
            Protocol <span className="text-foreground font-mono">ERR_403_FORBIDDEN</span>.
            Your account does not have the clearance levels required to mount
            this module.
          </p>

          {/* Action Module: Robust & Simple */}
          <div className="grid grid-cols-1 gap-3 pt-4">
            <Button
              asChild
              className="h-12 text-sm font-bold tracking-wide uppercase shadow-[0_4px_14px_0_rgb(var(--primary)/0.39)]"
            >
              <Link to="/" className="flex items-center gap-2">
                <IconArrowBackUp size={18} />
                Return to Base
              </Link>
            </Button>

            <Button
              variant="outline"
              className="h-12 border-border/60 hover:bg-secondary transition-all"
            >
              <span className="flex items-center gap-2 opacity-70">
                <IconFingerprint size={18} />
                Verify Identity
              </span>
            </Button>
          </div>

          {/* System Audit Footer */}
          <div className="pt-10 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 bg-destructive/10 border border-destructive/20 rounded text-[10px] text-destructive font-mono font-bold tracking-widest uppercase">
              <IconAlertTriangle size={12} />
              Security Violation Logged
            </div>
            <p className="text-[10px] text-muted-foreground/50 font-mono">
              STV_SEC_NODE: {window.location.hostname}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
