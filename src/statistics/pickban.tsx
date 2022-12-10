import React, { useState } from "react"

export interface IPickBanStatistics {
    beatmap_id: string
    pick_rate: number
    ban_rate: number
}

const PickBan: React.FC<{pickBanStats: IPickBanStatistics[]}> = ({pickBanStats}) => {
    const [pickBan, setPickBan] = useState<IPickBanStatistics[]>(pickBanStats)
    return <section>

    </section>
}

export default PickBan
