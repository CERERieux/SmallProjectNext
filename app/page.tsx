import Image from "next/image";
import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Welcome to my page!",
  description: "A site I made to learn Next.js where I share some stuff!",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Tabs defaultValue="similar" className="w-[400px]">
        <TabsList className="w-full">
          <TabsTrigger
            value="similar"
            className="w-1/3 border-t-4 dark:data-[state=active]:border-lime-300 dark:data-[state=active]:bg-slate-600 dark:data-[state=active]:text-slate-50"
          >
            Similar
          </TabsTrigger>
          <TabsTrigger value="vocaloid" className="w-1/3">
            Vocaloid
          </TabsTrigger>
          <TabsTrigger value="other" className="w-1/3">
            Others
          </TabsTrigger>
        </TabsList>
        <TabsContent value="similar">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="vocaloid">Change your password here.</TabsContent>
        <TabsContent value="other">Change your password here.</TabsContent>
      </Tabs>
    </main>
  );
}
