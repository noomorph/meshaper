const { TAV, HE } = letters;

function katal([k, t, l]) {
    return [
        qamaz_gadol(weak_dagesh(k)),
        patach(t),
        sheva_nach(l)
    ];
}

function katl([k, t, l]) {
    return [
        qamaz_gadol(weak_dagesh(k)),
        sheva_nach(patach(t)),
        l
    ];
}

export function ani([k, t, l]) {
    const ti = hiriq_male(weak_dagesh(TAV()));
    return [...katal(k, t, l), ti];
}

export function ata([k, t, l]) {
    const ta = qamaz_gadol(weak_dagesh(TAV()));
    const h = HE();

    return [...katal(k, t, l), ta, h];
}

export function at([k, t, l]) {
    return [...katal(k, t, l), weak_dagesh(TAV()];
}

export function hi(ktl) {
    const [ka, t, l] = katl(ktl);
    return [ka, t, qamaz_gadol(l), HE()];
}

export function hem(ktl) {
    const [ka, t, l] = katl(ktl);
    return [ka, t, shuruk(l)];
}

export function hen(ktl) { return hem(ktl); }
