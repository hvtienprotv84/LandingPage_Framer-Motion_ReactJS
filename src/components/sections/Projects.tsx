// import Image from "next/image";

import { useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import ItemCards from "../items/ItemCards";
import { ARRAY, STRINGS } from "../../constants";

function Projects() {
    const [data] = useState<any>(ARRAY.Projects)

    return (
        <div>
            <p className="projectsTitle">
                {STRINGS.sectionTitleII}
            </p>

            {data.map((item: any, index: number) => (
                <LazyLoadComponent>
                    <ItemCards
                        item={item}
                        key={index}
                        index={index}
                    />
                </LazyLoadComponent>

            ))}
        </div>
    )
}

export default Projects
