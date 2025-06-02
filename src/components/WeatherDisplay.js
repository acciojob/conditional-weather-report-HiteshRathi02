import React, { useEffect, useState } from "react";

export default function WeatherDisplay ({data}){
    const bgcolor = data.temperature>20 ? "red":"blue";

    return(
        <>
        <span style={{color:bgcolor}}>
            <p>{data.temperature}</p>
        </span>
        <p>
            {data.conditions}
        </p>
        </>
    )
}