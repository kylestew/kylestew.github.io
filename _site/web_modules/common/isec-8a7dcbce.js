var IntersectionType;
(function (IntersectionType) {
    IntersectionType[IntersectionType["NONE"] = 0] = "NONE";
    IntersectionType[IntersectionType["PARALLEL"] = 1] = "PARALLEL";
    IntersectionType[IntersectionType["COINCIDENT"] = 2] = "COINCIDENT";
    IntersectionType[IntersectionType["COINCIDENT_NO_INTERSECT"] = 3] = "COINCIDENT_NO_INTERSECT";
    IntersectionType[IntersectionType["INTERSECT"] = 4] = "INTERSECT";
    IntersectionType[IntersectionType["INTERSECT_OUTSIDE"] = 5] = "INTERSECT_OUTSIDE";
})(IntersectionType || (IntersectionType = {}));

export { IntersectionType as I };
