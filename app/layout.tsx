import "./globals.css";
import { ReactNode } from "react";
import Header from "./components/Header/Header";
import { Nunito } from "next/font/google";
import { getLogedInUser } from "./utils/getCurrUser";
import CategoryList from "./components/Categories/CategoryList";
import ClientOnley from "./components/ClientOnley/ClientOnley";
import ListingForm from "./components/ListingForm/ListingForm";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});
// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const logedInUser = await getLogedInUser();

  return (
    <html lang="en">
      <body className={`${nunito.variable} font-nunito`}>
        <ClientOnley>
          <ListingForm />
          <Header user={logedInUser} />
          <CategoryList />
        </ClientOnley>
        {children}
      </body>
    </html>
  );
}
