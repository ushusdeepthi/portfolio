export const breakpoints={
    // xxs:25,
    // xs:37.5, //<600
    // sm:56.25, //<900
    // md:75, //900 to 1200px
    // xl:112.5 //>1800px
    xxs:20,//320px,
    xs:30,//480px, 
    sm:48,//768px
    md:64, //1024px
    lg:75 //1200px
}
export const mediaQueries = (key)=>{
    return (style) =>`@media (max-width: ${breakpoints[key]}em) {${style}}`;
}