import { Poppins } from 'next/font/google';
import "./globals.css";
import { Header } from './components/header';
import { Footer } from './components/footer';
import ToptoScroll from './components/toptoscroll';

export const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Go Solutions | IT Services",
  description: "Create stunning, professional websites effortlessly with GoSolutions. Experience seamless design and cutting-edge features to make your online presence shine.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased relative`}
      >
        <Header />
        {children}
        <Footer />
        <ToptoScroll />
      </body>
    </html>
  );
}
