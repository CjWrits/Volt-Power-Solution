"use client";

import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden flex flex-col">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1730807908064-c087959dd52c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Solar panels on a roof"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-solar-green-950/60 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col min-h-[calc(100vh-80px)]">
        <div className="flex-1 flex items-center">
          <div className="max-w-3xl py-20">
            <FadeIn direction="up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-solar-yellow-500/20 text-solar-yellow-400 text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-sm border border-solar-yellow-500/30">
                Future of Energy is Here
              </span>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Power Your Life with <span className="text-solar-yellow-500">Pure Sunlight</span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <p className="text-xl text-solar-green-50/80 mb-10 max-w-2xl leading-relaxed">
                Join thousands of homeowners and businesses making the switch to clean, renewable solar energy. Save money while saving the planet.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Start Saving Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <button className="flex items-center gap-3 px-8 py-3.5 rounded-full text-white font-semibold hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <Play className="fill-white w-4 h-4 ml-1" />
                  </div>
                  See How It Works
                </button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Hero Stats (Glass effect) */}
        <div className="pb-12 hidden lg:block">
          <FadeIn direction="up" delay={0.8}>
            <div className="glass-dark rounded-3xl p-8 grid grid-cols-4 gap-8">
              <div className="space-y-1">
                <p className="text-solar-yellow-500 text-3xl font-bold">10k+</p>
                <p className="text-solar-green-50/60 text-sm uppercase tracking-wide">Installations</p>
              </div>
              <div className="space-y-1">
                <p className="text-solar-yellow-500 text-3xl font-bold">40%</p>
                <p className="text-solar-green-50/60 text-sm uppercase tracking-wide">Avg. Bill Reduction</p>
              </div>
              <div className="space-y-1">
                <p className="text-solar-yellow-500 text-3xl font-bold">25Y</p>
                <p className="text-solar-green-50/60 text-sm uppercase tracking-wide">Warranty</p>
              </div>
              <div className="space-y-1">
                <p className="text-solar-yellow-500 text-3xl font-bold">0%</p>
                <p className="text-solar-green-50/60 text-sm uppercase tracking-wide">Down Payment</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
