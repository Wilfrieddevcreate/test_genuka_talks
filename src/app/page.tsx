"use client";
import FiltersBar from "@/components/FilterBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TaskList from "@/components/TaskList";

export default function Home() {
  return (
    <>
       <Header/>
       <HeroSection/>
       <FiltersBar/>
       <TaskList/>
    </>
   
    
  );
}
