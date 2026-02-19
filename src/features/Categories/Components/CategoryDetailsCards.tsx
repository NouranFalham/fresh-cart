interface Props {
    title: string;
    }

    export default function CategoryDetailsCard({ title }: Props) {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-8 cursor-pointer">
        <div className="flex flex-col gap-5">
            
            {/* Minimal Icon Block */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-400 flex items-center justify-center">
            <div className="w-5 h-5 bg-white rounded-sm" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">
            {title}
            </h3>

        </div>
        </div>
    );
}

