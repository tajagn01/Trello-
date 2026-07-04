import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <main>
            <div>
                {children}
            </div>
        </main>
    );
}