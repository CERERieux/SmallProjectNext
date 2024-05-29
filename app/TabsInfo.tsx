import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabSimilar from "./TabSimilar";
import TabVocaloid from "./TabVocaloid";
import TabOther from "./TabOther";

export default function TabsInfo() {
  return (
    <Tabs defaultValue="similar" className="w-[1000px]">
      <TabsList className="w-full dark:bg-slate-900">
        <TabsTrigger
          value="similar"
          className="w-1/3 border-t-4 data-[state=active]:border-lime-300 data-[state=active]:bg-slate-600 data-[state=active]:text-slate-50"
        >
          Similar
        </TabsTrigger>
        <TabsTrigger
          value="vocaloid"
          className="w-1/3 border-t-4 data-[state=active]:border-[#33CCBB] data-[state=active]:bg-slate-600 data-[state=active]:text-slate-50"
        >
          Vocaloid
        </TabsTrigger>
        <TabsTrigger
          value="other"
          className="w-1/3 border-t-4 data-[state=active]:border-red-400 data-[state=active]:bg-slate-600 data-[state=active]:text-slate-50"
        >
          Others
        </TabsTrigger>
      </TabsList>
      <TabSimilar />
      <TabVocaloid />
      <TabOther />
    </Tabs>
  );
}
