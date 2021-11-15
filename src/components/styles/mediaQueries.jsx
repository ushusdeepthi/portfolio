export const breakpoints={
    xs:37.5,
    sm:56.25,
    md:75,
    xl:112.5
}
export const mediaQueries = (key)=>{
    return (style) =>`@media (max-width: ${breakpoints[key]}em) {${style}}`;
}