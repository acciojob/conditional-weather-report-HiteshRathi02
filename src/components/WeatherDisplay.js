import React, { useEffect, useState } from "react";

export default function WeatherDisplay ({data}){
    const bgcolor = data.temperature>20 ? "red":"blue";

    return(
        <>
        <span style={{color:bgcolor}}>
            <p>Temperature: {data.temperature}</p>
        </span>
        <p>
            conditions: {data.conditions}
        </p>
        </>
    )
}