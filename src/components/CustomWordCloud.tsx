"use client";

import { useTheme } from 'next-themes';
import React from 'react'
import D3WordCloud from 'react-d3-cloud';


type Props = {}

const data = [
    { text: 'lol', value: 200 },
    { text: 'first impression', value: 800 },
    { text: 'very cool', value: 1000000 },
    { text: 'duck', value: 10 },
    ];

const fontSizeMapper = (word: {value:number}) => {
    return (Math.log2(word.value) * 5 + 16);
    }


const CustomWordCloud = (props: Props) => {
    const theme = useTheme();
  return (
    <>
    <D3WordCloud
    data = {data}
    height = {550}
    font = "Times"
    fontSize={fontSizeMapper}
    rotate = {0}
    padding = {10}
    fill = {theme.theme === "dark" ? "white" : "black"}
    />
    </>
  )
}

export default CustomWordCloud