import React, { useCallback } from "react";

const PROVIDERS = [
    {
        title: "ALL PROVIDERS",
        name: 'all',
    },
    {
        title: "NetEnt",
        name: "NetEnt",
    },
    {
        title: "Play'n Go",
        name: "Play N Go",
    },
    {
        title: "Microgaming",
        name: "Microgaming",
    },
]


const Providers = ( {onSelectProvider} ) => {


    const renderedProviders = () => {
        return PROVIDERS.map((provider, index) => (
                    <div className="providers_item" key={index} onClick={() => onSelectProvider(provider.name)}>
                        <span>{provider.title}</span>
                    </div>
                ))
    }

    return (
        <div className="providers">
            {renderedProviders()}
        </div>
    )
}

export default Providers