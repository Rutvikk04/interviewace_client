
import "./globals.css"
import { ToastContainer } from "react-toastify";
export const metadata = {
  title: "Interview ACE",
  description: "Practice quizzes tailored to your stack & experience level. Get interview-ready in weeks, not months.",
  icons: {
    icon: '/logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className="bg-background min-h-screen">
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
