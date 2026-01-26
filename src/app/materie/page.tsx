import { materie } from "/[id]/page";
import { notFound } from "next/navigation";
import BackLink from "@/app/components/BackLink";
import MateriaHeader from "@/app/components/MateriaHeader";
import MateriaArgomenti from "@/app/components/MateriaArgomenti";
import MateriaLibro from "@/app/components/MateriaLibro";
import MateriaImmagine from "@/app/components/MateriaImmagine";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ProfilePage({ params }: Props) {
    const { id } = await params;

    const materiaId = parseInt(id, 10);
    if (isNaN(materiaId)) notFound();

    const materia = materie.find((m) => m.id === materiaId);
    if (!materia) notFound();

    return (
        <div className="max-w-5xl mx-auto animate-fade-in">
            <BackLink />

            <div className="bg-linear-to-br from-slate-800/80 to-slate-900/80 rounded-lg border border-slate-700 overflow-hidden shadow-2xl backdrop-blur-sm">
                <MateriaHeader materia={materia} />

                <div className="p-8 md:p-12 space-y-10">
                    <MateriaArgomenti argomenti={materia.argomenti} />
                    <MateriaLibro libro={materia.libro} />

                    {materia.immagine && (
                        <MateriaImmagine
                            src={materia.immagine}
                            alt={materia.nome}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}