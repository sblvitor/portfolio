import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import { Info } from 'lucide-react'

export const InfoHover = () => {
    return (
        <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger>
                <div className="p-2 rounded-lg bg-transparent hover:bg-accent/30">
                    <Info className="text-white" />
                </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-fit" align="end">
                <div className="flex flex-col gap-2">
                    <h3 className="text-base font-semibold mb-2">🚧 Portfolio under construction! 🚧</h3>
                    <ul className="flex flex-col gap-2 text-sm">
                        <li className="flex items-start gap-2">
                            <span>📌</span>
                            <span>This will not be the last version of the portfolio;</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>🎨</span>
                            <span>I'm learning three.js and I have plans for this website;</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>📖</span>
                            <span>
                                If you want to know more, check the README in this{" "}
                                <a
                                    href="https://github.com/sblvitor/portfolio"
                                    target="_blank"
                                    className="underline"
                                >
                                    repository
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}