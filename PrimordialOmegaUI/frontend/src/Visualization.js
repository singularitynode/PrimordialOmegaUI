import React from "react";
export default function Visualization({data}) {
    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}
