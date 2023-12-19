import React from "react";


import PanelText from "@/UI/molecules/infoPanel/PanelText";

export default function InfoPanel(){
    return (
        <>
            <section className="bg-blue absolute  pb-3 pt-6 w-full h-152px] bottom-0">
                <div className="container mx-auto">
                    <div className="flex items-center h-full justify-center gap-7 sm:gap-10 xl:gap-0 xl:justify-between w-full xl:w-2/4">
                        <PanelText title="24/7" subtitle="online service"/>
                        <PanelText title="100+" subtitle="Doctors"/>
                        <PanelText title="1M+" subtitle="active patient"/>
                    </div>
                </div>
            </section>
        </>
    )
}