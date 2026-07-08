import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <main>
            <div className="flex min-h-screen items-center justify-center px-4">
                {children}
            </div>
        </main>
    );
}