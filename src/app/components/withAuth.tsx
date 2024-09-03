'use client';

import { useSession, signIn } from 'next-auth/react';
import { useEffect, ComponentType } from 'react';

// Define a type for the component's props
type WithAuthProps = {
  session: any; // หรือเปลี่ยนเป็นประเภทที่เหมาะสมหากคุณรู้จักประเภทของ session
};

// HOC function to wrap around protected pages
export function withAuth<P extends WithAuthProps>(Component: ComponentType<P>) {
  return function ProtectedPage(props: Omit<P, keyof WithAuthProps>) {
    const { data: session, status } = useSession();

    useEffect(() => {
      if (!session && status !== 'loading') {
        signIn();
      }
    }, [session, status]);

    if (status === 'loading' || !session) {
      return <div>Loading...</div>; // Loading state while session is being fetched
    }

    return <Component {...(props as P)} session={session} />; // Render the protected component with session data
  };
}
