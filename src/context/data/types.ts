// To parse this data:
//
//   import { Convert, Types } from "./file";
//
//   const types = Convert.toTypes(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Types {
    navbanner:       Navbanner;
    menu:            Menu[];
    menu_for_mobile: MenuForMobile[];
    body:            Body;
    footer:          Footer;
    units:           Unit[];
}

export interface Body {
    home:          Home;
    for_customers: ForCustomers;
    for_companies: ForCompanies;
    for_doctors:   ForDoctors;
    common_pages:  CommonPages;
    who_we_are:    WhoWeAre;
    farme_box:     FarmeBox;
    psp:           Psp;
    clinics:       Clinics;
    careers:       Careers;
    contact:       BodyContact;
}

export interface Careers {
    initial:     FarmeBoxClass;
    summary:     Summary;
    reasons:     Reason[];
    values:      Values;
    testimonies: CareersTestimonies;
    banner:      InitialClass;
}

export interface InitialClass {
    title:    string;
    subtitle: string;
}

export interface FarmeBoxClass {
    title: string;
}

export interface Reason {
    id:    string;
    title: string;
}

export interface Summary {
    title:     string;
    highlight: string;
    text:      string;
}

export interface CareersTestimonies {
    description: string;
    title:       string;
    testimonies: PersonElement[];
}

export interface PersonElement {
    name:       string;
    job:        string;
    image_id:   string;
    testimony?: string;
}

export interface Values {
    title:    string;
    subtitle: string;
    values:   ValueElement[];
}

export interface ValueElement {
    id:    string;
    title: string;
    text:  string;
}

export interface Clinics {
    initial:     InitialClass;
    arguments:   FirstElement[];
    topics:      Topics;
    banner:      InitialClass;
    testimonies: ClinicsTestimonies;
}

export interface FirstElement {
    title:         string;
    text:          string;
    label_button?: string;
    type?:         string;
    points?:       string[];
}

export interface ClinicsTestimonies {
    description: string;
    title:       string;
    testimonies: PurpleTestimony[];
}

export interface PurpleTestimony {
    name:      string;
    id:        string;
    testimony: string;
}

export interface Topics {
    title:    string;
    subtitle: string;
    topics:   string[];
}

export interface CommonPages {
    numbers:     Numbers;
    testimonies: ClinicsTestimonies;
    doubts:      Doubts;
}

export interface Doubts {
    description: string;
    title:       string;
    doubts:      Doubt[];
}

export interface Doubt {
    title:  string;
    answer: string;
}

export interface Numbers {
    description: string;
    title:       string;
    message:     string;
    infos:       Info[];
}

export interface Info {
    legend: string;
    value:  number;
}

export interface BodyContact {
    for_leads:     InitialClass;
    for_customers: InitialClass;
}

export interface FarmeBox {
    initial:                 FarmeBoxClass;
    arguments:               FarmeBoxArguments;
    carousel_images:         CarouselImage[];
    reasons:                 Reasons;
    farme_box:               FarmeBoxClass;
    pharmaceutical_analysis: PharmaceuticalAnalysis;
    banner:                  InitialClass;
    testimonies:             FarmeBoxTestimonies;
}

export interface FarmeBoxArguments {
    title: string;
    cards: PurpleCards;
}

export interface PurpleCards {
    first:  string;
    second: string;
    third:  string;
}

export interface CarouselImage {
    label: string;
    id:    string;
}

export interface PharmaceuticalAnalysis {
    card: InitialClass;
}

export interface Reasons {
    title:   string;
    reasons: ValueElement[];
}

export interface FarmeBoxTestimonies {
    description: string;
    title:       string;
    testimonies: FluffyTestimony[];
}

export interface FluffyTestimony {
    name:      string;
    age:       number;
    origin:    string;
    testimony: string;
    image:     string;
}

export interface ForCompanies {
    initial:      ForCompaniesInitial;
    advantage:    Advantage;
    how_working:  InitialClass;
    banner:       InitialClass;
    card_product: CardProduct;
    arguments:    ValueElement[];
    our_posts:    OurPosts;
    testimonies:  CareersTestimonies;
}

export interface Advantage {
    title:      string;
    subtitle:   string;
    advantages: ValueElement[];
}

export interface CardProduct {
    legend:      string;
    title:       string;
    subtitle:    string;
    advantages?: ValueElement[];
}

export interface ForCompaniesInitial {
    "who-we-are": InitialClass;
}

export interface OurPosts {
    description: string;
    title:       string;
    posts:       Post[];
}

export interface Post {
    image:    string;
    title:    string;
    avatar:   string;
    author:   string;
    category: string;
    link:     string;
    date:     string;
}

export interface ForCustomers {
    initial:      InitialClass;
    how_working:  HowWorking;
    banner:       InitialClass;
    advantages:   CardProduct;
    card_product: CardProduct;
    our_posts:    OurPosts;
    testimonies:  ClinicsTestimonies;
}

export interface HowWorking {
    title:     string;
    subtitle:  string;
    arguments: ValueElement[];
}

export interface ForDoctors {
    initial:      ForCompaniesInitial;
    how_working:  HowWorking;
    banner:       ForDoctorsBanner;
    card_product: CardProduct;
    our_posts:    OurPosts;
    doubts:       Doubts;
    testimonies:  CareersTestimonies;
}

export interface ForDoctorsBanner {
    title:     string;
    subtitle:  string;
    highlight: string[];
}

export interface Home {
    initial:     InitialClass;
    farme_box:   FarmeBoxClass;
    know_me:     KnowMe;
    targets:     Targets;
    testimonies: ClinicsTestimonies;
}

export interface KnowMe {
    title:    string;
    subtitle: string;
    carousel: Carousel[];
}

export interface Carousel {
    label: string;
    text:  string;
}

export interface Targets {
    title:    string;
    subtitle: string;
    cards:    Card[];
}

export interface Card {
    title: string;
    type:  string;
    text:  string;
}

export interface Psp {
    initial:     FarmeBoxClass;
    how_working: HowWorking;
    arguments:   PspArguments;
    datas:       Datas;
}

export interface PspArguments {
    cards: FluffyCards;
}

export interface FluffyCards {
    first:  FirstElement;
    second: FirstElement;
    third:  FirstElement;
    fourth: FirstElement;
}

export interface Datas {
    title:    string;
    sections: DatasSection[];
}

export interface DatasSection {
    title:       string;
    description: string;
}

export interface WhoWeAre {
    initial:     WhoWeAreInitial;
    history:     InitialClass;
    testimonies: WhoWeAreTestimonies;
    declaration: Declaration;
    arguments:   WhoWeAreArguments;
    our_people:  OurPeople;
    banner:      InitialClass;
}

export interface WhoWeAreArguments {
    card_initial: InitialClass;
    cards:        TentacledCards;
    card_final:   InitialClass;
}

export interface TentacledCards {
    first:  First;
    second: First;
}

export interface First {
    text: string;
}

export interface Declaration {
    title:       string;
    declaration: string;
}

export interface WhoWeAreInitial {
    "who-we-are": FarmeBoxClass;
}

export interface OurPeople {
    title:    string;
    subtitle: string;
    people:   PersonElement[];
}

export interface WhoWeAreTestimonies {
    testimonies_employee: PersonElement[];
}

export interface Footer {
    about:    About;
    invite:   string;
    contacts: Contacts;
    sections: FooterSection[];
}

export interface About {
    title: string;
    text:  string;
}

export interface Contacts {
    title:    string;
    contacts: ContactElement[];
}

export interface ContactElement {
    location: string;
    phone:    string;
}

export interface FooterSection {
    title: string;
    links: Link[];
}

export interface Link {
    title: string;
    href:  string;
}

export interface Menu {
    label:    string;
    href?:    string;
    context?: string;
    options?: Option[];
    isCTA?:   boolean;
}

export interface Option {
    label:           string;
    href:            string;
    isSanctionable?: boolean;
}

export interface MenuForMobile {
    label:    string;
    href?:    string;
    options?: Option[];
    isCTA?:   boolean;
}

export interface Navbanner {
    text: string;
    href: string;
}

export interface Unit {
    localization: string;
    infos:        string[];
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toTypes(json: string): Types {
        return cast(JSON.parse(json), r("Types"));
    }

    public static typesToJson(value: Types): string {
        return JSON.stringify(uncast(value, r("Types")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Types": o([
        { json: "navbanner", js: "navbanner", typ: r("Navbanner") },
        { json: "menu", js: "menu", typ: a(r("Menu")) },
        { json: "menu_for_mobile", js: "menu_for_mobile", typ: a(r("MenuForMobile")) },
        { json: "body", js: "body", typ: r("Body") },
        { json: "footer", js: "footer", typ: r("Footer") },
        { json: "units", js: "units", typ: a(r("Unit")) },
    ], false),
    "Body": o([
        { json: "home", js: "home", typ: r("Home") },
        { json: "for_customers", js: "for_customers", typ: r("ForCustomers") },
        { json: "for_companies", js: "for_companies", typ: r("ForCompanies") },
        { json: "for_doctors", js: "for_doctors", typ: r("ForDoctors") },
        { json: "common_pages", js: "common_pages", typ: r("CommonPages") },
        { json: "who_we_are", js: "who_we_are", typ: r("WhoWeAre") },
        { json: "farme_box", js: "farme_box", typ: r("FarmeBox") },
        { json: "psp", js: "psp", typ: r("Psp") },
        { json: "clinics", js: "clinics", typ: r("Clinics") },
        { json: "careers", js: "careers", typ: r("Careers") },
        { json: "contact", js: "contact", typ: r("BodyContact") },
    ], false),
    "Careers": o([
        { json: "initial", js: "initial", typ: r("FarmeBoxClass") },
        { json: "summary", js: "summary", typ: r("Summary") },
        { json: "reasons", js: "reasons", typ: a(r("Reason")) },
        { json: "values", js: "values", typ: r("Values") },
        { json: "testimonies", js: "testimonies", typ: r("CareersTestimonies") },
        { json: "banner", js: "banner", typ: r("InitialClass") },
    ], false),
    "InitialClass": o([
        { json: "title", js: "title", typ: "" },
        { json: "subtitle", js: "subtitle", typ: "" },
    ], false),
    "FarmeBoxClass": o([
        { json: "title", js: "title", typ: "" },
    ], false),
    "Reason": o([
        { json: "id", js: "id", typ: "" },
        { json: "title", js: "title", typ: "" },
    ], false),
    "Summary": o([
        { json: "title", js: "title", typ: "" },
        { json: "highlight", js: "highlight", typ: "" },
        { json: "text", js: "text", typ: "" },
    ], false),
    "CareersTestimonies": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "testimonies", js: "testimonies", typ: a(r("PersonElement")) },
    ], false),
    "PersonElement": o([
        { json: "name", js: "name", typ: "" },
        { json: "job", js: "job", typ: "" },
        { json: "image_id", js: "image_id", typ: "" },
        { json: "testimony", js: "testimony", typ: u(undefined, "") },
    ], false),
    "Values": o([
        { json: "title", js: "title", typ: "" },
        { json: "subtitle", js: "subtitle", typ: "" },
        { json: "values", js: "values", typ: a(r("ValueElement")) },
    ], false),
    "ValueElement": o([
        { json: "id", js: "id", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "text", js: "text", typ: "" },
    ], false),
    "Clinics": o([
        { json: "initial", js: "initial", typ: r("InitialClass") },
        { json: "arguments", js: "arguments", typ: a(r("FirstElement")) },
        { json: "topics", js: "topics", typ: r("Topics") },
        { json: "banner", js: "banner", typ: r("InitialClass") },
        { json: "testimonies", js: "testimonies", typ: r("ClinicsTestimonies") },
    ], false),
    "FirstElement": o([
        { json: "title", js: "title", typ: "" },
        { json: "text", js: "text", typ: "" },
        { json: "label_button", js: "label_button", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "points", js: "points", typ: u(undefined, a("")) },
    ], false),
    "ClinicsTestimonies": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "testimonies", js: "testimonies", typ: a(r("PurpleTestimony")) },
    ], false),
    "PurpleTestimony": o([
        { json: "name", js: "name", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "testimony", js: "testimony", typ: "" },
    ], false),
    "Topics": o([
        { json: "title", js: "title", typ: "" },
        { json: "subtitle", js: "subtitle", typ: "" },
        { json: "topics", js: "topics", typ: a("") },
    ], false),
    "CommonPages": o([
        { json: "numbers", js: "numbers", typ: r("Numbers") },
        { json: "testimonies", js: "testimonies", typ: r("ClinicsTestimonies") },
        { json: "doubts", js: "doubts", typ: r("Doubts") },
    ], false),
    "Doubts": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "doubts", js: "doubts", typ: a(r("Doubt")) },
    ], false),
    "Doubt": o([
        { json: "title", js: "title", typ: "" },
        { json: "answer", js: "answer", typ: "" },
    ], false),
    "Numbers": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "message", js: "message", typ: "" },
        { json: "infos", js: "infos", typ: a(r("Info")) },
    ], false),
    "Info": o([
        { json: "legend", js: "legend", typ: "" },
        { json: "value", js: "value", typ: 0 },
    ], false),
    "BodyContact": o([
        { json: "for_leads", js: "for_leads", typ: r("InitialClass") },
        { json: "for_customers", js: "for_customers", typ: r("InitialClass") },
    ], false),
    "FarmeBox": o([
        { json: "initial", js: "initial", typ: r("FarmeBoxClass") },
        { json: "arguments", js: "arguments", typ: r("FarmeBoxArguments") },
        { json: "carousel_images", js: "carousel_images", typ: a(r("CarouselImage")) },
        { json: "reasons", js: "reasons", typ: r("Reasons") },
        { json: "farme_box", js: "farme_box", typ: r("FarmeBoxClass") },
        { json: "pharmaceutical_analysis", js: "pharmaceutical_analysis", typ: r("PharmaceuticalAnalysis") },
        { json: "banner", js: "banner", typ: r("InitialClass") },
        { json: "testimonies", js: "testimonies", typ: r("FarmeBoxTestimonies") },
    ], false),
    "FarmeBoxArguments": o([
        { json: "title", js: "title", typ: "" },
        { json: "cards", js: "cards", typ: r("PurpleCards") },
    ], false),
    "PurpleCards": o([
        { json: "first", js: "first", typ: "" },
        { json: "second", js: "second", typ: "" },
        { json: "third", js: "third", typ: "" },
    ], false),
    "CarouselImage": o([
        { json: "label", js: "label", typ: "" },
        { json: "id", js: "id", typ: "" },
    ], false),
    "PharmaceuticalAnalysis": o([
        { json: "card", js: "card", typ: r("InitialClass") },
    ], false),
    "Reasons": o([
        { json: "title", js: "title", typ: "" },
        { json: "reasons", js: "reasons", typ: a(r("ValueElement")) },
    ], false),
    "FarmeBoxTestimonies": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "testimonies", js: "testimonies", typ: a(r("FluffyTestimony")) },
    ], false),
    "FluffyTestimony": o([
        { json: "name", js: "name", typ: "" },
        { json: "age", js: "age", typ: 0 },
        { json: "origin", js: "origin", typ: "" },
        { json: "testimony", js: "testimony", typ: "" },
        { json: "image", js: "image", typ: "" },
    ], false),
    "ForCompanies": o([
        { json: "initial", js: "initial", typ: r("ForCompaniesInitial") },
        { json: "advantage", js: "advantage", typ: r("Advantage") },
        { json: "how_working", js: "how_working", typ: r("InitialClass") },
        { json: "banner", js: "banner", typ: r("InitialClass") },
        { json: "card_product", js: "card_product", typ: r("CardProduct") },
        { json: "arguments", js: "arguments", typ: a(r("ValueElement")) },
        { json: "our_posts", js: "our_posts", typ: r("OurPosts") },
        { json: "testimonies", js: "testimonies", typ: r("CareersTestimonies") },
    ], false),
    "Advantage": o([
        { json: "title", js: "title", typ: "" },
        { json: "subtitle", js: "subtitle", typ: "" },
        { json: "advantages", js: "advantages", typ: a(r("ValueElement")) },
    ], false),
    "CardProduct": o([
        { json: "legend", js: "legend", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "subtitle", js: "subtitle", typ: "" },
        { json: "advantages", js: "advantages", typ: u(undefined, a(r("ValueElement"))) },
    ], false),
    "ForCompaniesInitial": o([
        { json: "who-we-are", js: "who-we-are", typ: r("InitialClass") },
    ], false),
    "OurPosts": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "posts", js: "posts", typ: a(r("Post")) },
    ], false),
    "Post": o([
        { json: "image", js: "image", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "avatar", js: "avatar", typ: "" },
        { json: "author", js: "author", typ: "" },
        { json: "category", js: "category", typ: "" },
        { json: "link", js: "link", typ: "" },
        { json: "date", js: "date", typ: "" },
    ], false),
    "ForCustomers": o([
        { json: "initial", js: "initial", typ: r("InitialClass") },
        { json: "how_working", js: "how_working", typ: r("HowWorking") },
        { json: "banner", js: "banner", typ: r("InitialClass") },
        { json: "advantages", js: "advantages", typ: r("CardProduct") },
        { json: "card_product", js: "card_product", typ: r("CardProduct") },
        { json: "our_posts", js: "our_posts", typ: r("OurPosts") },
        { json: "testimonies", js: "testimonies", typ: r("ClinicsTestimonies") },
    ], false),
    "HowWorking": o([
        { json: "title", js: "title", typ: "" },
        { json: "subtitle", js: "subtitle", typ: "" },
        { json: "arguments", js: "arguments", typ: a(r("ValueElement")) },
    ], false),
    "ForDoctors": o([
        { json: "initial", js: "initial", typ: r("ForCompaniesInitial") },
        { json: "how_working", js: "how_working", typ: r("HowWorking") },
        { json: "banner", js: "banner", typ: r("ForDoctorsBanner") },
        { json: "card_product", js: "card_product", typ: r("CardProduct") },
        { json: "our_posts", js: "our_posts", typ: r("OurPosts") },
        { json: "doubts", js: "doubts", typ: r("Doubts") },
        { json: "testimonies", js: "testimonies", typ: r("CareersTestimonies") },
    ], false),
    "ForDoctorsBanner": o([
        { json: "title", js: "title", typ: "" },
        { json: "subtitle", js: "subtitle", typ: "" },
        { json: "highlight", js: "highlight", typ: a("") },
    ], false),
    "Home": o([
        { json: "initial", js: "initial", typ: r("InitialClass") },
        { json: "farme_box", js: "farme_box", typ: r("FarmeBoxClass") },
        { json: "know_me", js: "know_me", typ: r("KnowMe") },
        { json: "targets", js: "targets", typ: r("Targets") },
        { json: "testimonies", js: "testimonies", typ: r("ClinicsTestimonies") },
    ], false),
    "KnowMe": o([
        { json: "title", js: "title", typ: "" },
        { json: "subtitle", js: "subtitle", typ: "" },
        { json: "carousel", js: "carousel", typ: a(r("Carousel")) },
    ], false),
    "Carousel": o([
        { json: "label", js: "label", typ: "" },
        { json: "text", js: "text", typ: "" },
    ], false),
    "Targets": o([
        { json: "title", js: "title", typ: "" },
        { json: "subtitle", js: "subtitle", typ: "" },
        { json: "cards", js: "cards", typ: a(r("Card")) },
    ], false),
    "Card": o([
        { json: "title", js: "title", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "text", js: "text", typ: "" },
    ], false),
    "Psp": o([
        { json: "initial", js: "initial", typ: r("FarmeBoxClass") },
        { json: "how_working", js: "how_working", typ: r("HowWorking") },
        { json: "arguments", js: "arguments", typ: r("PspArguments") },
        { json: "datas", js: "datas", typ: r("Datas") },
    ], false),
    "PspArguments": o([
        { json: "cards", js: "cards", typ: r("FluffyCards") },
    ], false),
    "FluffyCards": o([
        { json: "first", js: "first", typ: r("FirstElement") },
        { json: "second", js: "second", typ: r("FirstElement") },
        { json: "third", js: "third", typ: r("FirstElement") },
        { json: "fourth", js: "fourth", typ: r("FirstElement") },
    ], false),
    "Datas": o([
        { json: "title", js: "title", typ: "" },
        { json: "sections", js: "sections", typ: a(r("DatasSection")) },
    ], false),
    "DatasSection": o([
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
    ], false),
    "WhoWeAre": o([
        { json: "initial", js: "initial", typ: r("WhoWeAreInitial") },
        { json: "history", js: "history", typ: r("InitialClass") },
        { json: "testimonies", js: "testimonies", typ: r("WhoWeAreTestimonies") },
        { json: "declaration", js: "declaration", typ: r("Declaration") },
        { json: "arguments", js: "arguments", typ: r("WhoWeAreArguments") },
        { json: "our_people", js: "our_people", typ: r("OurPeople") },
        { json: "banner", js: "banner", typ: r("InitialClass") },
    ], false),
    "WhoWeAreArguments": o([
        { json: "card_initial", js: "card_initial", typ: r("InitialClass") },
        { json: "cards", js: "cards", typ: r("TentacledCards") },
        { json: "card_final", js: "card_final", typ: r("InitialClass") },
    ], false),
    "TentacledCards": o([
        { json: "first", js: "first", typ: r("First") },
        { json: "second", js: "second", typ: r("First") },
    ], false),
    "First": o([
        { json: "text", js: "text", typ: "" },
    ], false),
    "Declaration": o([
        { json: "title", js: "title", typ: "" },
        { json: "declaration", js: "declaration", typ: "" },
    ], false),
    "WhoWeAreInitial": o([
        { json: "who-we-are", js: "who-we-are", typ: r("FarmeBoxClass") },
    ], false),
    "OurPeople": o([
        { json: "title", js: "title", typ: "" },
        { json: "subtitle", js: "subtitle", typ: "" },
        { json: "people", js: "people", typ: a(r("PersonElement")) },
    ], false),
    "WhoWeAreTestimonies": o([
        { json: "testimonies_employee", js: "testimonies_employee", typ: a(r("PersonElement")) },
    ], false),
    "Footer": o([
        { json: "about", js: "about", typ: r("About") },
        { json: "invite", js: "invite", typ: "" },
        { json: "contacts", js: "contacts", typ: r("Contacts") },
        { json: "sections", js: "sections", typ: a(r("FooterSection")) },
    ], false),
    "About": o([
        { json: "title", js: "title", typ: "" },
        { json: "text", js: "text", typ: "" },
    ], false),
    "Contacts": o([
        { json: "title", js: "title", typ: "" },
        { json: "contacts", js: "contacts", typ: a(r("ContactElement")) },
    ], false),
    "ContactElement": o([
        { json: "location", js: "location", typ: "" },
        { json: "phone", js: "phone", typ: "" },
    ], false),
    "FooterSection": o([
        { json: "title", js: "title", typ: "" },
        { json: "links", js: "links", typ: a(r("Link")) },
    ], false),
    "Link": o([
        { json: "title", js: "title", typ: "" },
        { json: "href", js: "href", typ: "" },
    ], false),
    "Menu": o([
        { json: "label", js: "label", typ: "" },
        { json: "href", js: "href", typ: u(undefined, "") },
        { json: "context", js: "context", typ: u(undefined, "") },
        { json: "options", js: "options", typ: u(undefined, a(r("Option"))) },
        { json: "isCTA", js: "isCTA", typ: u(undefined, true) },
    ], false),
    "Option": o([
        { json: "label", js: "label", typ: "" },
        { json: "href", js: "href", typ: "" },
        { json: "isSanctionable", js: "isSanctionable", typ: u(undefined, true) },
    ], false),
    "MenuForMobile": o([
        { json: "label", js: "label", typ: "" },
        { json: "href", js: "href", typ: u(undefined, "") },
        { json: "options", js: "options", typ: u(undefined, a(r("Option"))) },
        { json: "isCTA", js: "isCTA", typ: u(undefined, true) },
    ], false),
    "Navbanner": o([
        { json: "text", js: "text", typ: "" },
        { json: "href", js: "href", typ: "" },
    ], false),
    "Unit": o([
        { json: "localization", js: "localization", typ: "" },
        { json: "infos", js: "infos", typ: a("") },
    ], false),
};
