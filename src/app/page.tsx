
import FlexColumn from '@/app/components/FlexColumn';
import Link from 'next/link';
import Hero from '@/app/components/HeroRightGraphic'
import NeoBrutButton from '@/app/components/(buttons)/NeoBrutButton';
import Illustration from '@/app/components/(illustrations)/frontpage';

export default function Home() {
    return (
        <main>
            <Hero
                headingText="Analytic Talesmith"
                bodyText={<div className="space-y-4"><p>Welcome to Analytic Talesmith, where I share my love of data analytics and social sciences, offering perspectives to help others learn more about analytics and the human experience within modern business&mdash;whether as consumer, client, employee, or exec.</p>
                    <p>Dive into my blog and portfolio posts to discover more about the fascinating world of data analytics. Together, let&apos;s explore how we can harness the power of data to create more meaningful, human-centered business practices.</p></div>}
                heroButton={<NeoBrutButton text="Read Blog" />}
                heroImage={<Illustration /> }
            />
            <Link href="/params">Param test</Link>
        </main>
    );
}