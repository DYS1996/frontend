export function isEq(url1, url2) {
    const pathname1 = url1.pathname || '';
    const search1 = url1.search || '';
    const hash1 = url1.hash || '';

    const pathname2 = url2.pathname || '';
    const search2 = url2.search || '';
    const hash2 = url2.hash || '';

    const s1 = new URLSearchParams(search1);
    s1.sort();
    const s2 = new URLSearchParams(search2);
    s2.sort();
    return (
        pathname1 === pathname2 &&
        s1.toString() === s2.toString() &&
        hash1 === hash2
    );
}

export function mgS(s1, s2) {
    const sp1 = new URLSearchParams(s1);
    const sp2 = new URLSearchParams(s2);
    for (let [key, value] of sp2) {
        if (value == '') {
            sp1.delete(key);
            continue;
        }
        sp1.set(key, value);
    }
    return sp1.toString();
}
