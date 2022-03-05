// To parse this data:
//
//   import { Convert, Types } from "./file";
//
//   const types = Convert.toTypes(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Types {
    nav:    Nav;
    menu:   Menu;
    body:   Body;
    footer: Footer;
    units:  Unit[];
}

export interface Body {
    home:       Home;
    who_we_are: WhoWeAre;
    farme_box:  FarmeBox;
    careers:    Careers;
}

export interface Careers {
    initial:     FarmeBoxClass;
    summary:     Summary;
    reasons:     Reason[];
    values:      Values;
    testimonies: Testimonies;
    banner:      HistoryClass;
}

export interface HistoryClass {
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

export interface Testimonies {
    description: string;
    title:       string;
    testimonies: Testimony[];
}

export interface Testimony {
    name:      string;
    age:       number;
    origin:    string;
    testimony: string;
    image:     string;
}

export interface Values {
    title:    string;
    subtitle: string;
    values:   Value[];
}

export interface Value {
    id:    string;
    title: string;
    text:  string;
}

export interface FarmeBox {
    initial:                 FarmeBoxClass;
    arguments:               FarmeBoxArguments;
    carousel:                Carousel[];
    reasons:                 Reasons;
    farme_box:               FarmeBoxClass;
    pharmaceutical_analysis: PharmaceuticalAnalysis;
    banner:                  HistoryClass;
    testimonies:             Testimonies;
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

export interface Carousel {
    label: string;
    text:  string;
}

export interface PharmaceuticalAnalysis {
    card: HistoryClass;
}

export interface Reasons {
    title:   string;
    reasons: Value[];
}

export interface Home {
    customers: Customers;
    companies: Companies;
    doctors:   Doctors;
}

export interface Companies {
    initial:      CompaniesInitial;
    advantage:    Advantage;
    how_working:  HowWorking;
    banner:       HistoryClass;
    card_product: CardProduct;
    our_posts:    OurPosts;
}

export interface Advantage {
    title:      string;
    subtitle:   string;
    advantages: Value[];
}

export interface CardProduct {
    legend:   string;
    title:    string;
    subtitle: string;
}

export interface HowWorking {
    title:     string;
    subtitle:  string;
    arguments: Value[];
}

export interface CompaniesInitial {
    "who-we-are": HistoryClass;
}

export interface OurPosts {
    description: string;
    title:       string;
}

export interface Customers {
    initial:     CompaniesInitial;
    farme_box:   FarmeBoxClass;
    know_me:     KnowMe;
    targets:     Targets;
    numbers:     Numbers;
    testimonies: Testimonies;
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

export interface KnowMe {
    title:    string;
    subtitle: string;
    carousel: Carousel[];
}

export interface Numbers {
    description: string;
    title:       string;
    message:     string;
    infos:       Info[];
}

export interface Info {
    legend: string;
    value:  string;
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

export interface Doctors {
    initial:      CompaniesInitial;
    how_working:  HowWorking;
    banner:       DoctorsBanner;
    card_product: CardProduct;
    our_posts:    OurPosts;
    doubts:       Doubts;
}

export interface DoctorsBanner {
    title:     string;
    subtitle:  string;
    highlight: string[];
}

export interface WhoWeAre {
    initial:     WhoWeAreInitial;
    history:     HistoryClass;
    declaration: Declaration;
    arguments:   WhoWeAreArguments;
    our_people:  OurPeople;
    banner:      HistoryClass;
}

export interface WhoWeAreArguments {
    card_initial: HistoryClass;
    cards:        FluffyCards;
    card_final:   HistoryClass;
}

export interface FluffyCards {
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
    people:   Person[];
}

export interface Person {
    image_url: string;
    name:      string;
    message:   string;
}

export interface Footer {
    about:    About;
    invite:   string;
    contacts: Contacts;
    sections: Section[];
}

export interface About {
    title: string;
    text:  string;
}

export interface Contacts {
    title:    string;
    contacts: Contact[];
}

export interface Contact {
    location: string;
    phone:    string;
}

export interface Section {
    title: string;
    links: Link[];
}

export interface Link {
    title: string;
    href:  string;
}

export interface Menu {
    "who-we-are":           Blog;
    farme_box:              Blog;
    clinics:                Blog;
    career:                 Blog;
    blog:                   Blog;
    contact:                Blog;
    "button-request-quote": ButtonRequestQuote;
}

export interface Blog {
    label: string;
    href:  string;
}

export interface ButtonRequestQuote {
    label: string;
}

export interface Nav {
    customers: string;
    companies: string;
    doctors:   string;
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
        { json: "nav", js: "nav", typ: r("Nav") },
        { json: "menu", js: "menu", typ: r("Menu") },
        { json: "body", js: "body", typ: r("Body") },
        { json: "footer", js: "footer", typ: r("Footer") },
        { json: "units", js: "units", typ: a(r("Unit")) },
    ], false),
    "Body": o([
        { json: "home", js: "home", typ: r("Home") },
        { json: "who_we_are", js: "who_we_are", typ: r("WhoWeAre") },
        { json: "farme_box", js: "farme_box", typ: r("FarmeBox") },
        { json: "careers", js: "careers", typ: r("Careers") },
    ], false),
    "Careers": o([
        { json: "initial", js: "initial", typ: r("FarmeBoxClass") },
        { json: "summary", js: "summary", typ: r("Summary") },
        { json: "reasons", js: "reasons", typ: a(r("Reason")) },
        { json: "values", js: "values", typ: r("Values") },
        { json: "testimonies", js: "testimonies", typ: r("Testimonies") },
        { json: "banner", js: "banner", typ: r("HistoryClass") },
    ], false),
    "HistoryClass": o([
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
    "Testimonies": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "testimonies", js: "testimonies", typ: a(r("Testimony")) },
    ], false),
    "Testimony": o([
        { json: "name", js: "name", typ: "" },
        { json: "age", js: "age", typ: 0 },
        { json: "origin", js: "origin", typ: "" },
        { json: "testimony", js: "testimony", typ: "" },
        { json: "image", js: "image", typ: "" },
    ], false),
    "Values": o([
        { json: "title", js: "title", typ: "" },
        { json: "subtitle", js: "subtitle", typ: "" },
        { json: "values", js: "values", typ: a(r("Value")) },
    ], false),
    "Value": o([
        { json: "id", js: "id", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "text", js: "text", typ: "" },
    ], false),
    "FarmeBox": o([
        { json: "initial", js: "initial", typ: r("FarmeBoxClass") },
        { json: "arguments", js: "arguments", typ: r("FarmeBoxArguments") },
        { json: "carousel", js: "carousel", typ: a(r("Carousel")) },
        { json: "reasons", js: "reasons", typ: r("Reasons") },
        { json: "farme_box", js: "farme_box", typ: r("FarmeBoxClass") },
        { json: "pharmaceutical_analysis", js: "pharmaceutical_analysis", typ: r("PharmaceuticalAnalysis") },
        { json: "banner", js: "banner", typ: r("HistoryClass") },
        { json: "testimonies", js: "testimonies", typ: r("Testimonies") },
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
    "Carousel": o([
        { json: "label", js: "label", typ: "" },
        { json: "text", js: "text", typ: "" },
    ], false),
    "PharmaceuticalAnalysis": o([
        { json: "card", js: "card", typ: r("HistoryClass") },
    ], false),
    "Reasons": o([
        { json: "title", js: "title", typ: "" },
        { json: "reasons", js: "reasons", typ: a(r("Value")) },
    ], false),
    "Home": o([
        { json: "customers", js: "customers", typ: r("Customers") },
        { json: "companies", js: "companies", typ: r("Companies") },
        { json: "doctors", js: "doctors", typ: r("Doctors") },
    ], false),
    "Companies": o([
        { json: "initial", js: "initial", typ: r("CompaniesInitial") },
        { json: "advantage", js: "advantage", typ: r("Advantage") },
        { json: "how_working", js: "how_working", typ: r("HowWorking") },
        { json: "banner", js: "banner", typ: r("HistoryClass") },
        { json: "card_product", js: "card_product", typ: r("CardProduct") },
        { json: "our_posts", js: "our_posts", typ: r("OurPosts") },
    ], false),
    "Advantage": o([
        { json: "title", js: "title", typ: "" },
        { json: "subtitle", js: "subtitle", typ: "" },
        { json: "advantages", js: "advantages", typ: a(r("Value")) },
    ], false),
    "CardProduct": o([
        { json: "legend", js: "legend", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "subtitle", js: "subtitle", typ: "" },
    ], false),
    "HowWorking": o([
        { json: "title", js: "title", typ: "" },
        { json: "subtitle", js: "subtitle", typ: "" },
        { json: "arguments", js: "arguments", typ: a(r("Value")) },
    ], false),
    "CompaniesInitial": o([
        { json: "who-we-are", js: "who-we-are", typ: r("HistoryClass") },
    ], false),
    "OurPosts": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
    ], false),
    "Customers": o([
        { json: "initial", js: "initial", typ: r("CompaniesInitial") },
        { json: "farme_box", js: "farme_box", typ: r("FarmeBoxClass") },
        { json: "know_me", js: "know_me", typ: r("KnowMe") },
        { json: "targets", js: "targets", typ: r("Targets") },
        { json: "numbers", js: "numbers", typ: r("Numbers") },
        { json: "testimonies", js: "testimonies", typ: r("Testimonies") },
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
    "KnowMe": o([
        { json: "title", js: "title", typ: "" },
        { json: "subtitle", js: "subtitle", typ: "" },
        { json: "carousel", js: "carousel", typ: a(r("Carousel")) },
    ], false),
    "Numbers": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "message", js: "message", typ: "" },
        { json: "infos", js: "infos", typ: a(r("Info")) },
    ], false),
    "Info": o([
        { json: "legend", js: "legend", typ: "" },
        { json: "value", js: "value", typ: "" },
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
    "Doctors": o([
        { json: "initial", js: "initial", typ: r("CompaniesInitial") },
        { json: "how_working", js: "how_working", typ: r("HowWorking") },
        { json: "banner", js: "banner", typ: r("DoctorsBanner") },
        { json: "card_product", js: "card_product", typ: r("CardProduct") },
        { json: "our_posts", js: "our_posts", typ: r("OurPosts") },
        { json: "doubts", js: "doubts", typ: r("Doubts") },
    ], false),
    "DoctorsBanner": o([
        { json: "title", js: "title", typ: "" },
        { json: "subtitle", js: "subtitle", typ: "" },
        { json: "highlight", js: "highlight", typ: a("") },
    ], false),
    "WhoWeAre": o([
        { json: "initial", js: "initial", typ: r("WhoWeAreInitial") },
        { json: "history", js: "history", typ: r("HistoryClass") },
        { json: "declaration", js: "declaration", typ: r("Declaration") },
        { json: "arguments", js: "arguments", typ: r("WhoWeAreArguments") },
        { json: "our_people", js: "our_people", typ: r("OurPeople") },
        { json: "banner", js: "banner", typ: r("HistoryClass") },
    ], false),
    "WhoWeAreArguments": o([
        { json: "card_initial", js: "card_initial", typ: r("HistoryClass") },
        { json: "cards", js: "cards", typ: r("FluffyCards") },
        { json: "card_final", js: "card_final", typ: r("HistoryClass") },
    ], false),
    "FluffyCards": o([
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
        { json: "people", js: "people", typ: a(r("Person")) },
    ], false),
    "Person": o([
        { json: "image_url", js: "image_url", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "message", js: "message", typ: "" },
    ], false),
    "Footer": o([
        { json: "about", js: "about", typ: r("About") },
        { json: "invite", js: "invite", typ: "" },
        { json: "contacts", js: "contacts", typ: r("Contacts") },
        { json: "sections", js: "sections", typ: a(r("Section")) },
    ], false),
    "About": o([
        { json: "title", js: "title", typ: "" },
        { json: "text", js: "text", typ: "" },
    ], false),
    "Contacts": o([
        { json: "title", js: "title", typ: "" },
        { json: "contacts", js: "contacts", typ: a(r("Contact")) },
    ], false),
    "Contact": o([
        { json: "location", js: "location", typ: "" },
        { json: "phone", js: "phone", typ: "" },
    ], false),
    "Section": o([
        { json: "title", js: "title", typ: "" },
        { json: "links", js: "links", typ: a(r("Link")) },
    ], false),
    "Link": o([
        { json: "title", js: "title", typ: "" },
        { json: "href", js: "href", typ: "" },
    ], false),
    "Menu": o([
        { json: "who-we-are", js: "who-we-are", typ: r("Blog") },
        { json: "farme_box", js: "farme_box", typ: r("Blog") },
        { json: "clinics", js: "clinics", typ: r("Blog") },
        { json: "career", js: "career", typ: r("Blog") },
        { json: "blog", js: "blog", typ: r("Blog") },
        { json: "contact", js: "contact", typ: r("Blog") },
        { json: "button-request-quote", js: "button-request-quote", typ: r("ButtonRequestQuote") },
    ], false),
    "Blog": o([
        { json: "label", js: "label", typ: "" },
        { json: "href", js: "href", typ: "" },
    ], false),
    "ButtonRequestQuote": o([
        { json: "label", js: "label", typ: "" },
    ], false),
    "Nav": o([
        { json: "customers", js: "customers", typ: "" },
        { json: "companies", js: "companies", typ: "" },
        { json: "doctors", js: "doctors", typ: "" },
    ], false),
    "Unit": o([
        { json: "localization", js: "localization", typ: "" },
        { json: "infos", js: "infos", typ: a("") },
    ], false),
};
