import { BookOpen, Landmark, GraduationCap } from "lucide-react";
import { themes } from "@/data/site";
import { Card } from "@/components/shared/Card";
import { SectionTitle } from "@/components/shared/SectionTitle";

const iconMap = {
  BookOpen: BookOpen,
  Landmark: Landmark,
  GraduationCap: GraduationCap,
};

export function Themes() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Grant Themes"
          subtitle="Focused areas of impact that guide every funding decision we make."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {themes.map((theme) => {
            const Icon = iconMap[theme.icon as keyof typeof iconMap];
            return (
              <Card key={theme.id} padding="lg">
                <div className="w-14 h-14 bg-muse-gold/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-muse-gold" />
                </div>
                <h3 className="font-serif font-bold text-xl text-muse-dark mb-3">
                  {theme.title}
                </h3>
                <p className="text-muse-gray leading-relaxed text-sm">
                  {theme.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
