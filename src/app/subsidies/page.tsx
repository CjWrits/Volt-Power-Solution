import PageHeader from "@/components/sections/PageHeader";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";
import { FAQS } from "@/lib/data";
import { CheckCircle2, Info, ChevronDown } from "lucide-react";

export default function SubsidiesPage() {
  return (
    <>
      <PageHeader 
        title="Incentives & Government Subsidies"
        description="Save significantly on your solar installation with Central and State government financial incentives in India."
        breadcrumb="Solar Savings India"
      />

      {/* Information Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-4xl font-bold text-solar-green-900 mb-6">PM-Surya Ghar: Muft Bijli Yojana</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Launched by the Government of India, this flagship scheme provides substantial subsidies to residential households for rooftop solar. The goal is to provide up to 300 units of free electricity and income through surplus power export.
            </p>
            <div className="space-y-4">
              {[
                "Subsidy of ₹30,000 per kW for up to 2 kW",
                "Additional ₹18,000 per kW for 3rd kW",
                "Maximum subsidy capped at ₹78,000",
                "Easy application through the National Portal",
                "Low-interest collateral-free loans available"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 font-medium text-solar-green-900">
                  <CheckCircle2 className="text-solar-green-600 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <Card variant="glass" className="p-8 border-solar-yellow-200 bg-solar-yellow-50/30">
              <div className="flex items-start gap-4 mb-6">
                <Info className="text-solar-yellow-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-solar-yellow-900 text-lg">Commercial & Industrial Benefits</h4>
                  <p className="text-solar-yellow-800/80">While direct subsidies are for residential, businesses in India have major tax advantages.</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="p-4 bg-white rounded-xl shadow-sm border border-solar-yellow-100">
                  <p className="font-bold text-solar-green-900 mb-1">Accelerated Depreciation (AD)</p>
                  <p className="text-sm text-gray-500">Claim up to 40% depreciation in the first year to reduce taxable income.</p>
                </li>
                <li className="p-4 bg-white rounded-xl shadow-sm border border-solar-yellow-100">
                  <p className="font-bold text-solar-green-900 mb-1">Customs Duty Concessions</p>
                  <p className="text-sm text-gray-500">Lower duties on specific solar components and equipment.</p>
                </li>
                <li className="p-4 bg-white rounded-xl shadow-sm border border-solar-yellow-100">
                  <p className="font-bold text-solar-green-900 mb-1">GST Benefits</p>
                  <p className="text-sm text-gray-500">Reduced GST rates for solar power generator systems.</p>
                </li>
              </ul>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section variant="alternate">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-solar-green-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg leading-relaxed">Understand how Indian solar policies and subsidies work for you.</p>
          </FadeIn>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.1}>
              <details className="group glass bg-white rounded-2xl p-6 transition-all">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-xl font-bold text-solar-green-900">{faq.question}</h4>
                  <ChevronDown className="text-solar-green-600 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-4 pt-4 border-t border-gray-100 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            </FadeIn>
          ))}
        </div>
      </Section>

      <div className="h-24 md:h-32" />
    </>
  );
}
