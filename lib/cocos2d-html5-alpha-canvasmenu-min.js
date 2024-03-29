var cc = cc = cc || {}; (function() {
    var a = !1,
    b = /xyz/.test(function() {
        xyz
    }) ? /\b_super\b/: /.*/;
    cc.Class = function() {};
    cc.Class.extend = function(c) {
        function d() { ! a && this.ctor && this.ctor.apply(this, arguments)
        }
        var e = this.prototype;
        a = !0;
        var f = new this;
        a = !1;
        for (var g in c) f[g] = "function" == typeof c[g] && "function" == typeof e[g] && b.test(c[g]) ?
        function(a, b) {
            return function() {
                var c = this._super;
                this._super = e[a];
                var d = b.apply(this, arguments);
                this._super = c;
                return d
            }
        } (g, c[g]) : c[g];
        d.prototype = f;
        d.prototype.constructor = d;
        d.extend = arguments.callee;
        d.implement = function(a) {
            for (var b in a) f[b] = a[b]
        };
        return d
    }
})();
cc = cc = cc || {};
cc.clone = function(a) {
    var b = a instanceof Array ? [] : {},
    c;
    for (c in a) {
        var d = a[c];
        b[c] = d instanceof Array ? cc.clone(d) : "object" == typeof d && !(d instanceof cc.Node) && !(d instanceof HTMLElement) ? cc.clone(d) : d
    }
    return b
};
cc.Log = function(a) {
    console.log(a)
};
cc.MessageBox = function(a) {
    console.log(a)
};
0 == cc.COCOS2D_DEBUG ? (cc.LOG = function() {},
cc.LOGINFO = function() {},
cc.LOGERROR = function() {}) : 1 == cc.COCOS2D_DEBUG ? (cc.LOG = cc.Log, cc.LOGINFO = cc.Log, cc.LOGERROR = function() {}) : 1 < cc.COCOS2D_DEBUG && (cc.LOG = cc.Log, cc.LOGINFO = cc.Log, cc.LOGERROR = cc.Log);
cc.Assert = cc._DEBUG ?
function(a, b) {
    typeof console.assert == "function" ? console.assert(a, b) : a || b && alert(b)
}: function() {};
cc.kLanguageEnglish = 0;
cc.kLanguageChinese = 1;
cc.kLanguageFrench = 2;
cc.kLanguageItalian = 3;
cc.kLanguageGerman = 4;
cc.kLanguageSpanish = 5;
cc.kLanguageRussian = 6;
cc = cc = cc || {};
cc.timeval = cc.Class.extend({
    tv_sec: 0,
    tv_usec: 0
});
cc.Time = {};
cc.Time.gettimeofdayCocos2d = function() {
    var a = new cc.timeval,
    b = Date.now();
    a.tv_usec = 1E3 * (b % 1E3);
    a.tv_sec = Math.floor(b / 1E3);
    return a
};
cc.Time.now = function() {
    return Date.now()
};
cc.Time.timersubCocos2d = function(a, b) {
    if (c && a && b) {
        if (a instanceof cc.timeval && b instanceof cc.timeval) {
            var c = new cc.timeval;
            c.tv_sec = b.tv_sec - a.tv_sec;
            c.tv_usec = b.tv_usec - a.tv_usec;
            b.tv_usec < a.tv_usec && (c.tv_usec += 1E6, c.tv_sec--);
            return c
        }
        if (!isNaN(a) && !isNaN(b)) return b - a
    }
};
var JXG = {
    Util: {}
};
JXG.Util.Unzip = function(a) {
    function b() {
        B += 8;
        return H < E.length ? E[H++] : -1
    }
    function c() {
        var a;
        B++;
        a = v & 1;
        v >>= 1;
        0 == v && (v = b(), a = v & 1, v = v >> 1 | 128);
        return a
    }
    function d(a) {
        for (var b = 0,
        d = a; d--;) b = b << 1 | c();
        a && (b = F[b] >> 8 - a);
        return b
    }
    function e(a) {
        I++;
        G[t++] = a;
        n.push(String.fromCharCode(a));
        32768 == t && (t = 0)
    }
    function f() {
        this.b1 = this.b0 = 0;
        this.jump = null;
        this.jumppos = -1
    }
    function g() {
        for (;;) {
            if (x[p] >= J) return - 1;
            if (K[x[p]] == p) return x[p]++;
            x[p]++
        }
    }
    function h() {
        var a = y[z],
        b;
        m && document.write("<br>len:" + p + " treepos:" + z);
        if (17 == p) return - 1;
        z++;
        p++;
        b = g();
        m && document.write("<br>IsPat " + b);
        if (0 <= b) a.b0 = b,
        m && document.write("<br>b0 " + a.b0);
        else if (a.b0 = 32768, m && document.write("<br>b0 " + a.b0), h()) return - 1;
        b = g();
        if (0 <= b) a.b1 = b,
        m && document.write("<br>b1 " + a.b1),
        a.jump = null;
        else if (a.b1 = 32768, m && document.write("<br>b1 " + a.b1), a.jump = y[z], a.jumppos = z, h()) return - 1;
        p--;
        return 0
    }
    function i(a, b, c, d) {
        m && document.write("currentTree " + a + " numval " + b + " lengths " + c + " show " + d);
        y = a;
        z = 0;
        K = c;
        J = b;
        for (a = 0; 17 > a; a++) x[a] = 0;
        p = 0;
        if (h()) return m && alert("invalid huffman tree\n"),
        -1;
        if (m) {
            document.write("<br>Tree: " + y.length);
            for (a = 0; 32 > a; a++) document.write("Places[" + a + "].b0=" + y[a].b0 + "<br>"),
            document.write("Places[" + a + "].b1=" + y[a].b1 + "<br>")
        }
        return 0
    }
    function j(a) {
        for (var b, d, e = 0,
        f = a[e];;) if (b = c(), m && document.write("b=" + b), b) {
            if (! (f.b1 & 32768)) return m && document.write("ret1"),
            f.b1;
            f = f.jump;
            b = a.length;
            for (d = 0; d < b; d++) if (a[d] === f) {
                e = d;
                break
            }
        } else {
            if (! (f.b0 & 32768)) return m && document.write("ret2"),
            f.b0;
            e++;
            f = a[e]
        }
        m && document.write("ret3");
        return - 1
    }
    function l() {
        var a, h, g, k, l;
        do {
            a = c();
            g = d(2);
            switch (g) {
            case 0:
                m && alert("Stored\n");
                break;
            case 1:
                m && alert("Fixed Huffman codes\n");
                break;
            case 2:
                m && alert("Dynamic Huffman codes\n");
                break;
            case 3:
                m && alert("Reserved block type!!\n");
                break;
            default:
                m && alert("Unexpected value %d!\n", g)
            }
            if (0 == g) {
                v = 1;
                g = b();
                g |= b() << 8;
                h = b();
                h |= b() << 8;
                for ((g ^ ~h) & 65535 && document.write("BlockLen checksum mismatch\n"); g--;) h = b(),
                e(h)
            } else if (1 == g) for (;;) if (g = F[d(7)] >> 1, 23 < g ? (g = g << 1 | c(), 199 < g ? (g -= 128, g = g << 1 | c()) : (g -= 48, 143 < g && (g += 136))) : g += 256, 256 > g) e(g);
            else if (256 == g) break;
            else {
                var n;
                g -= 257;
                l = d(L[g]) + M[g];
                g = F[d(5)] >> 3;
                8 < A[g] ? (n = d(8), n |= d(A[g] - 8) << 8) : n = d(A[g]);
                n += N[g];
                for (g = 0; g < l; g++) h = G[t - n & 32767],
                e(h)
            } else if (2 == g) {
                var o = Array(320);
                h = 257 + d(5);
                n = 1 + d(5);
                k = 4 + d(4);
                for (g = 0; 19 > g; g++) o[g] = 0;
                for (g = 0; g < k; g++) o[Q[g]] = d(3);
                l = r.length;
                for (k = 0; k < l; k++) r[k] = new f;
                if (i(r, 19, o, 0)) return t = 0,
                1;
                if (m) {
                    document.write("<br>distanceTree");
                    for (g = 0; g < r.length; g++) document.write("<br>" + r[g].b0 + " " + r[g].b1 + " " + r[g].jump + " " + r[g].jumppos)
                }
                l = h + n;
                k = 0;
                var p = -1;
                for (m && document.write("<br>n=" + l + " bits: " + B + "<br>"); k < l;) if (p++, g = j(r), m && document.write("<br>" + p + " i:" + k + " decode: " + g + "    bits " + B + "<br>"), 16 > g) o[k++] = g;
                else if (16 == g) {
                    var q;
                    g = 3 + d(2);
                    if (k + g > l) return t = 0,
                    1;
                    for (q = k ? o[k - 1] : 0; g--;) o[k++] = q
                } else {
                    g = 17 == g ? 3 + d(3) : 11 + d(7);
                    if (k + g > l) return t = 0,
                    1;
                    for (; g--;) o[k++] = 0
                }
                l = C.length;
                for (k = 0; k < l; k++) C[k] = new f;
                if (i(C, h, o, 0)) return t = 0,
                1;
                l = C.length;
                for (k = 0; k < l; k++) r[k] = new f;
                g = [];
                for (k = h; k < o.length; k++) g[k - h] = o[k];
                if (i(r, n, g, 0)) return t = 0,
                1;
                for (m && document.write("<br>literalTree");;) if (g = j(C), 256 <= g) {
                    g -= 256;
                    if (0 == g) break;
                    g--;
                    l = d(L[g]) + M[g];
                    g = j(r);
                    8 < A[g] ? (n = d(8), n |= d(A[g] - 8) << 8) : n = d(A[g]);
                    for (n += N[g]; l--;) h = G[t - n & 32767],
                    e(h)
                } else e(g)
            }
        } while (! a );
        t = 0;
        v = 1;
        return 0
    }
    function k() {
        m && alert("NEXTFILE");
        n = [];
        var a = [];
        D = !1;
        a[0] = b();
        a[1] = b();
        m && alert("type: " + a[0] + " " + a[1]);
        120 == a[0] && 218 == a[1] && (m && alert("GEONExT-GZIP"), l(), m && alert(n.join("")), q[s] = Array(2), q[s][0] = n.join(""), q[s][1] = "geonext.gxt", s++);
        31 == a[0] && 139 == a[1] && (m && alert("GZIP"), o(), m && alert(n.join("")), q[s] = Array(2), q[s][0] = n.join(""), q[s][1] = "file", s++);
        if (80 == a[0] && 75 == a[1] && (D = !0, a[2] = b(), a[3] = b(), 3 == a[2] && 4 == a[3])) {
            a[0] = b();
            a[1] = b();
            m && alert("ZIP-Version: " + a[1] + " " + a[0] / 10 + "." + a[0] % 10);
            u = b();
            u |= b() << 8;
            m && alert("gpflags: " + u);
            a = b();
            a |= b() << 8;
            m && alert("method: " + a);
            b();
            b();
            b();
            b();
            var c = b(),
            c = c | b() << 8,
            c = c | b() << 16,
            c = c | b() << 24,
            d = b(),
            d = d | b() << 8,
            d = d | b() << 16,
            d = d | b() << 24,
            e = b(),
            e = e | b() << 8,
            e = e | b() << 16,
            e = e | b() << 24;
            m && alert("local CRC: " + c + "\nlocal Size: " + e + "\nlocal CompSize: " + d);
            c = b();
            c |= b() << 8;
            d = b();
            d |= b() << 8;
            m && alert("filelen " + c);
            f = 0;
            for (w = []; c--;) e = b(),
            "/" == e | ":" == e ? f = 0 : f < O - 1 && (w[f++] = String.fromCharCode(e));
            m && alert("nameBuf: " + w);
            P || (P = w);
            for (var f = 0; f < d;) b(),
            f++;
            I = 0;
            8 == a && (l(), m && alert(n.join("")), q[s] = Array(2), q[s][0] = n.join(""), q[s][1] = w.join(""), s++);
            o()
        }
    }
    function o() {
        var a = [],
        c;
        u & 8 && (a[0] = b(), a[1] = b(), a[2] = b(), a[3] = b(), 80 == a[0] && (75 == a[1] && 7 == a[2] && 8 == a[3]) && (b(), b(), b(), b()), b(), b(), b(), b(), b(), b(), b(), b(), m && alert("CRC:"));
        D && k();
        a[0] = b();
        if (8 != a[0]) return m && alert("Unknown compression method!"),
        0;
        u = b();
        m && u & -32 && alert("Unknown flags set!");
        b();
        b();
        b();
        b();
        b();
        b();
        if (u & 4) {
            a[0] = b();
            a[2] = b();
            p = a[0] + 256 * a[1];
            m && alert("Extra field size: " + p);
            for (a = 0; a < p; a++) b()
        }
        if (u & 8) {
            a = 0;
            for (w = []; c = b();) {
                if ("7" == c || ":" == c) a = 0;
                a < O - 1 && (w[a++] = c)
            }
            m && alert("original file name: " + w)
        }
        if (u & 16) for (; b(););
        u & 2 && (b(), b());
        l();
        b();
        b();
        b();
        b();
        b();
        b();
        b();
        b();
        D && k()
    }
    var n = [],
    m = !1,
    u,
    s = 0,
    q = [],
    G = Array(32768),
    t = 0,
    D = !1,
    I,
    F = [0, 128, 64, 192, 32, 160, 96, 224, 16, 144, 80, 208, 48, 176, 112, 240, 8, 136, 72, 200, 40, 168, 104, 232, 24, 152, 88, 216, 56, 184, 120, 248, 4, 132, 68, 196, 36, 164, 100, 228, 20, 148, 84, 212, 52, 180, 116, 244, 12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178, 114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254, 1, 129, 65, 193, 33, 161, 97, 225, 17, 145, 81, 209, 49, 177, 113, 241, 9, 137, 73, 201, 41, 169, 105, 233, 25, 153, 89, 217, 57, 185, 121, 249, 5, 133, 69, 197, 37, 165, 101, 229, 21, 149, 85, 213, 53, 181, 117, 245, 13, 141, 77, 205, 45, 173, 109, 237, 29, 157, 93, 221, 61, 189, 125, 253, 3, 131, 67, 195, 35, 163, 99, 227, 19, 147, 83, 211, 51, 179, 115, 243, 11, 139, 75, 203, 43, 171, 107, 235, 27, 155, 91, 219, 59, 187, 123, 251, 7, 135, 71, 199, 39, 167, 103, 231, 23, 151, 87, 215, 55, 183, 119, 247, 15, 143, 79, 207, 47, 175, 111, 239, 31, 159, 95, 223, 63, 191, 127, 255],
    M = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
    L = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99],
    N = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
    A = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
    Q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    E = a,
    H = 0,
    v = 1,
    B = 0,
    O = 256,
    w = [],
    P,
    C = Array(288),
    r = Array(32),
    z = 0,
    y = null,
    p = 0,
    x = Array(17);
    x[0] = 0;
    var K, J;
    JXG.Util.Unzip.prototype.unzipFile = function(a) {
        var b;
        this.unzip();
        for (b = 0; b < q.length; b++) if (q[b][1] == a) return q[b][0]
    };
    JXG.Util.Unzip.prototype.unzip = function() {
        m && alert(E);
        k();
        return q
    }
};
JXG.Util.Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(a) {
        for (var b = [], c, d, e, f, g, h, i = 0, a = JXG.Util.Base64._utf8_encode(a); i < a.length;) c = a.charCodeAt(i++),
        d = a.charCodeAt(i++),
        e = a.charCodeAt(i++),
        f = c >> 2,
        c = (c & 3) << 4 | d >> 4,
        g = (d & 15) << 2 | e >> 6,
        h = e & 63,
        isNaN(d) ? g = h = 64 : isNaN(e) && (h = 64),
        b.push([this._keyStr.charAt(f), this._keyStr.charAt(c), this._keyStr.charAt(g), this._keyStr.charAt(h)].join(""));
        return b.join("")
    },
    decode: function(a, b) {
        for (var c = [], d, e, f, g, h, i = 0, a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); i < a.length;) d = this._keyStr.indexOf(a.charAt(i++)),
        e = this._keyStr.indexOf(a.charAt(i++)),
        g = this._keyStr.indexOf(a.charAt(i++)),
        h = this._keyStr.indexOf(a.charAt(i++)),
        d = d << 2 | e >> 4,
        e = (e & 15) << 4 | g >> 2,
        f = (g & 3) << 6 | h,
        c.push(String.fromCharCode(d)),
        64 != g && c.push(String.fromCharCode(e)),
        64 != h && c.push(String.fromCharCode(f));
        c = c.join("");
        b && (c = JXG.Util.Base64._utf8_decode(c));
        return c
    },
    _utf8_encode: function(a) {
        for (var a = a.replace(/\r\n/g, "\n"), b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128))
        }
        return b
    },
    _utf8_decode: function(a) {
        for (var b = [], c = 0, d = 0, e = 0, f = 0; c < a.length;) d = a.charCodeAt(c),
        128 > d ? (b.push(String.fromCharCode(d)), c++) : 191 < d && 224 > d ? (e = a.charCodeAt(c + 1), b.push(String.fromCharCode((d & 31) << 6 | e & 63)), c += 2) : (e = a.charCodeAt(c + 1), f = a.charCodeAt(c + 2), b.push(String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | f & 63)), c += 3);
        return b.join("")
    },
    _destrip: function(a, b) {
        var c = [],
        d,
        e,
        f = [];
        null == b && (b = 76);
        a.replace(/ /g, "");
        d = a.length / b;
        for (e = 0; e < d; e++) c[e] = a.substr(e * b, b);
        d != a.length / b && (c[c.length] = a.substr(d * b, a.length - d * b));
        for (e = 0; e < c.length; e++) f.push(c[e]);
        return f.join("\n")
    },
    decodeAsArray: function(a) {
        var a = this.decode(a),
        b = [],
        c;
        for (c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
        return b
    },
    decodeGEONExT: function(a) {
        return decodeAsArray(destrip(a), !1)
    }
};
JXG.Util.asciiCharCodeAt = function(a, b) {
    var c = a.charCodeAt(b);
    if (255 < c) switch (c) {
    case 8364:
        c = 128;
        break;
    case 8218:
        c = 130;
        break;
    case 402:
        c = 131;
        break;
    case 8222:
        c = 132;
        break;
    case 8230:
        c = 133;
        break;
    case 8224:
        c = 134;
        break;
    case 8225:
        c = 135;
        break;
    case 710:
        c = 136;
        break;
    case 8240:
        c = 137;
        break;
    case 352:
        c = 138;
        break;
    case 8249:
        c = 139;
        break;
    case 338:
        c = 140;
        break;
    case 381:
        c = 142;
        break;
    case 8216:
        c = 145;
        break;
    case 8217:
        c = 146;
        break;
    case 8220:
        c = 147;
        break;
    case 8221:
        c = 148;
        break;
    case 8226:
        c = 149;
        break;
    case 8211:
        c = 150;
        break;
    case 8212:
        c = 151;
        break;
    case 732:
        c = 152;
        break;
    case 8482:
        c = 153;
        break;
    case 353:
        c = 154;
        break;
    case 8250:
        c = 155;
        break;
    case 339:
        c = 156;
        break;
    case 382:
        c = 158;
        break;
    case 376:
        c = 159
    }
    return c
};
JXG.Util.utf8Decode = function(a) {
    for (var b = [], c = 0, d = 0, e = 0; c < a.length;) d = a.charCodeAt(c),
    128 > d ? (b.push(String.fromCharCode(d)), c++) : 191 < d && 224 > d ? (e = a.charCodeAt(c + 1), b.push(String.fromCharCode((d & 31) << 6 | e & 63)), c += 2) : (e = a.charCodeAt(c + 1), c3 = a.charCodeAt(c + 2), b.push(String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | c3 & 63)), c += 3);
    return b.join("")
};
cc.base64 = {};
cc.base64.decode = function(a) {
    return JXG.Util.Base64.decode(a)
};
cc.base64.decodeAsArray = function(a, b) {
    var b = b || 1,
    c = JXG.Util.Base64.decode(a),
    d = [],
    e,
    f,
    g;
    e = 0;
    for (g = c.length / b; e < g; e++) {
        d[e] = 0;
        for (f = b - 1; 0 <= f; --f) d[e] += c.charCodeAt(e * b + f) << 8 * f
    }
    return d
};
cc.base64.encode = function(a) {
    return JXG.Util.Base64.encode(a)
};
cc = cc = cc || {};
cc.unzip = function(a) {
    return (new JXG.Util.Unzip(a)).unzip()[0][0]
};
cc.unzipBase64 = function(a) {
    return (new JXG.Util.Unzip(JXG.Util.Base64.decodeAsArray(a))).unzip()[0][0]
};
cc.unzipBase64AsArray = function(a, b) {
    var b = b || 1,
    c = this.unzipBase64(a),
    d = [],
    e,
    f,
    g;
    e = 0;
    for (g = c.length / b; e < g; e++) {
        d[e] = 0;
        for (f = b - 1; 0 <= f; --f) d[e] += c.charCodeAt(e * b + f) << 8 * f
    }
    return d
};
cc.unzipAsArray = function(a, b) {
    var b = b || 1,
    c = this.unzip(a),
    d = [],
    e,
    f,
    g;
    e = 0;
    for (g = c.length / b; e < g; e++) {
        d[e] = 0;
        for (f = b - 1; 0 <= f; --f) d[e] += c.charCodeAt(e * b + f) << 8 * f
    }
    return d
};
cc = cc = cc || {};
cc.PI = Math.PI;
cc.RAD = cc.PI / 180;
cc.DEG = 180 / cc.PI;
cc.SWAP = function(a, b, c) {
    if ("object" == typeof c && "undefined" != typeof c.x && "undefined" != typeof c.y) {
        var d = c[a];
        c[a] = c[b];
        c[b] = d
    } else cc.Assert(!1, "CC_SWAP is being modified from original macro, please check usage")
};
cc.RANDOM_MINUS1_1 = function() {
    return 2 * (Math.random() - 0.5)
};
cc.RANDOM_0_1 = function() {
    return Math.random()
};
cc.DEGREES_TO_RADIANS = function(a) {
    return a * cc.RAD
};
cc.RADIANS_TO_DEGREES = function(a) {
    return a * cc.DEG
};
cc.BLEND_SRC = cc.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA ? 1 : 770;
cc.BLEND_DST = 771;
cc.BLEND_DST = 771;
cc.ENABLE_DEFAULT_GL_STATES = function() {};
cc.DISABLE_DEFAULT_GL_STATES = function() {};
cc.FLT_EPSILON = 1.192092896E-7;
cc.IS_RETINA_DISPLAY_SUPPORTED ? (cc.CONTENT_SCALE_FACTOR = function() {
    return cc.Director.sharedDirector().getContentScaleFactor()
},
cc.RECT_PIXELS_TO_POINTS = function(a) {
    return cc.RectMake(a.origin.x / cc.CONTENT_SCALE_FACTOR(), a.origin.y / cc.CONTENT_SCALE_FACTOR(), a.size.width / cc.CONTENT_SCALE_FACTOR(), a.size.height / cc.CONTENT_SCALE_FACTOR())
},
cc.RECT_POINTS_TO_RECT = function(a) {
    return cc.RectMake(a.origin.x * cc.CONTENT_SCALE_FACTOR(), a.origin.y * cc.CONTENT_SCALE_FACTOR(), a.size.width * cc.CONTENT_SCALE_FACTOR(), a.size.height * cc.CONTENT_SCALE_FACTOR())
}) : (cc.CONTENT_SCALE_FACTOR = function() {
    return 1
},
cc.RECT_PIXELS_TO_POINTS = function(a) {
    return a
},
cc.RECT_POINTS_TO_PIXELS = function(a) {
    return a
});
cc = cc = cc || {};
cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL = 0;
cc.FONT_LABEL_SUPPORT = 1;
cc.DIRECTOR_FAST_FPS = 1;
cc.DIRECTOR_FPS_INTERVAL = 0.5;
cc.DIRECTOR_DISPATCH_FAST_EVENTS = 0;
cc.DIRECTOR_MAC_USE_DISPLAY_LINK_THREAD = 1;
cc.COCOSNODE_RENDER_SUBPIXEL = 1;
cc.SPRITEBATCHNODE_RENDER_SUBPIXEL = 1;
cc.USES_VBO = 1;
cc.NODE_TRANSFORM_USING_AFFINE_MATRIX = 1;
cc.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA = 1;
cc.TEXTURE_ATLAS_USE_TRIANGLE_STRIP = 0;
cc.TEXTURE_NPOT_SUPPORT = 0;
cc.RETINA_DISPLAY_SUPPORT = 1;
cc.RETINA_DISPLAY_FILENAME_SUFFIX = "-hd";
cc.USE_LA88_LABELS_ON_NEON_ARCH = 0;
cc.SPRITE_DEBUG_DRAW = 0;
cc.SPRITEBATCHNODE_DEBUG_DRAW = 0;
cc.LABELBMFONT_DEBUG_DRAW = 0;
cc.LABELATLAS_DEBUG_DRAW = 0;
cc.ENABLE_PROFILERS = 0;
cc.IS_RETINA_DISPLAY_SUPPORTED = 1;
cc.LUA_ENGINE_DEBUG = 0;
cc = cc = cc || {};
cc.SAX_NONE = 0;
cc.SAX_KEY = 1;
cc.SAX_DICT = 2;
cc.SAX_INT = 3;
cc.SAX_REAL = 4;
cc.SAX_STRING = 5;
cc.SAX_ARRAY = 6;
cc.s_pszResourcePath = [];
cc.FileUtils = cc.Class.extend({});
cc.FileUtils.getFileData = function() {};
cc.FileUtils.getFileDataFromZip = function() {};
cc.FileUtils.ccRemoveHDSuffixFromFile = function() {};
cc.s_bPopupNotify = !0;
cc.FileUtils.fullPathFromRelativePath = function(a) {
    return a
};
cc.FileUtils.fullPathFromRelativeFile = function() {};
cc.FileUtils.setResourcePath = function() {};
cc.FileUtils.dictionaryWithContentsOfFile = function(a) {
    return this.m_pRootDict = cc.SAXParser.shareParser().parse(a)
};
cc.FileUtils.dictionaryWithContentsOfFileThreadSafe = function(a) {
    return (new cc.DictMaker).dictionaryWithContentsOfFile(a)
};
cc.FileUtils.getWriteablePath = function() {};
cc.FileUtils.setIsPopupNotify = function(a) {
    cc.s_bPopupNotify = a
};
cc.FileUtils.getIsPopupNotify = function() {
    return cc.s_bPopupNotify
};
cc.FileUtils.setResource = function() {};
cc.FileUtils.ccLoadFileIntoMemory = function() {};
cc.FileData = cc.Class.extend({
    _m_pBuffer: 0,
    _m_uSize: 0,
    ctor: function(a, b) {
        this._m_pBuffer = cc.FileUtils.getFileData(a, b, this._m_uSize)
    },
    reset: function(a, b) {
        this._m_uSize = 0;
        return (this._m_pBuffer = cc.FileUtils.getFileData(a, b, this._m_uSize)) ? !0 : !1
    },
    getBuffer: function() {
        return this._m_pBuffer
    },
    getSize: function() {
        return this._m_uSize
    }
});
cc.DictMaker = cc.Class.extend({
    m_pRootDict: [],
    dictionaryWithContentsOfFile: function(a) {
        return this.m_pRootDict = cc.SAXParser.shareParser().parse(a)
    }
});
cc = cc = cc || {};
cc.Color3B = function(a, b, c) {
    switch (arguments.length) {
    case 0:
        this.b = this.g = this.r = 0;
    case 1:
        a ? (this.r = a.r || 0, this.g = a.g || 0, this.b = a.b || 0) : this.b = this.g = this.r = 0;
        break;
    case 3:
        this.r = a || 0;
        this.g = b || 0;
        this.b = c || 0;
        break;
    default:
        throw "unknown argument type";
    }
};
cc.ccc3 = function(a, b, c) {
    return new cc.Color3B(a, b, c)
};
cc.WHITE = function() {
    return new cc.Color3B(255, 255, 255)
};
cc.YELLOW = function() {
    return new cc.Color3B(255, 255, 0)
};
cc.BLUE = function() {
    return new cc.Color3B(0, 0, 255)
};
cc.GREEN = function() {
    return new cc.Color3B(0, 255, 0)
};
cc.RED = function() {
    return new cc.Color3B(255, 0, 0)
};
cc.MAGENTA = function() {
    return new cc.Color3B(255, 0, 255)
};
cc.BLACK = function() {
    return new cc.Color3B(0, 0, 0)
};
cc.ORANGE = function() {
    return new cc.Color3B(255, 127, 0)
};
cc.GRAY = function() {
    return new cc.Color3B(166, 166, 166)
};
cc.Color4B = function(a, b, c, d) {
    this.r = a;
    this.g = b;
    this.b = c;
    this.a = d
};
cc.ccc4 = function(a, b, c, d) {
    return new cc.Color4B(a, b, c, d)
};
cc.Color4F = function(a, b, c, d) {
    this.r = a;
    this.g = b;
    this.b = c;
    this.a = d
};
cc.c4FFromccc3B = function(a) {
    return new cc.Color4B(a.r / 255, a.g / 255, a.b / 255, 1)
};
cc.c4FFromccc4B = function(a) {
    return new cc.Color4B(a.r / 255, a.g / 255, a.b / 255, a.a / 255)
};
cc.c4FEqual = function(a, b) {
    return a.r == b.r && a.g == b.g && a.b == b.b && a.a == b.a
};
cc.Vertex2F = function(a, b) {
    this.x = a;
    this.y = b
};
cc.Vertex2 = function(a, b) {
    return new cc.Vertex2F(a, b)
};
cc.Vertex3F = function(a, b, c) {
    this.x = a;
    this.y = b;
    this.Z = c
};
cc.vertex3 = function(a, b, c) {
    return new cc.Vertex3F(a, b, c)
};
cc.Tex2F = function(a, b) {
    this.u = a;
    this.v = b
};
cc.tex2 = function(a, b) {
    return new cc.Tex2F(a, b)
};
cc.PointSprite = function(a, b, c) {
    this.pos = a;
    this.color = b;
    this.size = c
};
cc.Quad2 = function(a, b, c, d) {
    this.tl = a;
    this.tr = b;
    this.bl = c;
    this.br = d
};
cc.Quad3 = function(a, b, c, d) {
    this.bl = a;
    this.br = b;
    this.tl = c;
    this.tr = d
};
cc.GridSize = function(a, b) {
    this.x = a;
    this.y = b
};
cc.ccg = function(a, b) {
    return new cc.GridSize(a, b)
};
cc.V2F_C4B_T2F = function(a, b, c) {
    this.vertices = a;
    this.colors = b;
    this.texCoords = c
};
cc.V2F_C4F_T2F = function(a, b, c) {
    this.vertices = a;
    this.colors = b;
    this.texCoords = c
};
cc.V3F_C4B_T2F = function(a, b, c) {
    this.vertices = a;
    this.colors = b;
    this.texCoords = c
};
cc.V2F_C4B_T2F_Quad = function(a, b, c, d) {
    this.bl = a;
    this.br = b;
    this.tl = c;
    this.tr = d
};
cc.V2F_C4B_T2F_QuadZero = function() {
    return new cc.V2F_C4B_T2F_Quad(new cc.V2F_C4B_T2F(new cc.Vertex2F(0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)), new cc.V2F_C4B_T2F(new cc.Vertex2F(0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)), new cc.V2F_C4B_T2F(new cc.Vertex2F(0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)), new cc.V2F_C4B_T2F(new cc.Vertex2F(0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)))
};
cc.V3F_C4B_T2F_Quad = function(a, b, c, d) {
    this.tl = a;
    this.bl = b;
    this.tr = c;
    this.br = d
};
cc.V3F_C4B_T2F_QuadZero = function() {
    return new cc.V3F_C4B_T2F_Quad(new cc.V3F_C4B_T2F(new cc.Vertex3F(0, 0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)), new cc.V3F_C4B_T2F(new cc.Vertex3F(0, 0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)), new cc.V3F_C4B_T2F(new cc.Vertex3F(0, 0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)), new cc.V3F_C4B_T2F(new cc.Vertex3F(0, 0, 0), new cc.Color4B(0, 0, 0, 255), new cc.Tex2F(0, 0)))
};
cc.V2F_C4F_T2F_Quad = function(a, b, c, d) {
    this.bl = a;
    this.br = b;
    this.tl = c;
    this.tr = d
};
cc.BlendFunc = function(a, b) {
    this.src = a;
    this.dst = b
};
cc.TextAlignmentLeft = 0;
cc.TextAlignmentCenter = 1;
cc.TextAlignmentRight = 2;
cc.Point = function(a, b) {
    this.x = a || 0;
    this.y = b || 0
};
cc.Point.CCPointEqualToPoint = function(a, b) {
    return a.x == b.x && a.y == b.y
};
cc.Size = function(a, b) {
    this.width = a || 0;
    this.height = b || 0
};
cc.Size.CCSizeEqualToSize = function(a, b) {
    return a.width == b.width && a.height == b.height
};
cc.Rect = function(a, b, c, d) {
    switch (arguments.length) {
    case 0:
        this.origin = new cc.Point(0, 0);
        this.size = new cc.Size(0, 0);
        break;
    case 1:
        if (a) if (a instanceof cc.Rect) this.origin = new cc.Point(a.origin.x, a.origin.y),
        this.size = new cc.Size(a.size.width, a.size.height);
        else throw "unknown argument type";
        else this.origin = new cc.Point(0, 0),
        this.size = new cc.Size(0, 0);
        break;
    case 2:
        this.origin = a ? new cc.Point(a.x, a.y) : new cc.Point(0, 0);
        this.size = b ? new cc.Size(b.width, b.height) : new cc.Size(0, 0);
        break;
    case 4:
        this.origin = new cc.Point(a || 0, b || 0);
        this.size = new cc.Size(c || 0, d || 0);
        break;
    default:
        throw "unknown argument type";
    }
};
cc.Rect.CCRectEqualToRect = function(a, b) {
    return cc.Point.CCPointEqualToPoint(a.origin, b.origin) && cc.Size.CCSizeEqualToSize(a.size, b.size)
};
cc.Rect.CCRectGetMaxX = function(a) {
    return a.origin.x + a.size.width
};
cc.Rect.CCRectGetMidX = function(a) {
    return (a.origin.x + a.size.width) / 2
};
cc.Rect.CCRectGetMinX = function(a) {
    return a.origin.x
};
cc.Rect.CCRectGetMaxY = function(a) {
    return a.origin.y + a.size.height
};
cc.Rect.CCRectGetMidY = function(a) {
    return a.origin.y + a.size.height / 2
};
cc.Rect.CCRectGetMinY = function(a) {
    return a.origin.y
};
cc.Rect.CCRectContainsPoint = function(a, b) {
    var c = !1;
    b.x >= cc.Rect.CCRectGetMinX(a) && (b.x <= cc.Rect.CCRectGetMaxX(a) && b.y >= cc.Rect.CCRectGetMinY(a) && b.y <= cc.Rect.CCRectGetMaxY(a)) && (c = !0);
    return c
};
cc.Rect.CCRectIntersectsRect = function(a, b) {
    return ! (cc.Rect.CCRectGetMaxX(a) < cc.Rect.CCRectGetMinX(b) || cc.Rect.CCRectGetMaxX(b) < cc.Rect.CCRectGetMinX(a) || cc.Rect.CCRectGetMaxY(a) < cc.Rect.CCRectGetMinY(b) || cc.Rect.CCRectGetMaxY(b) < cc.Rect.CCRectGetMinY(a))
};
cc.Rect.CCRectOverlapsRect = function(a, b) {
    return a.origin.x + a.size.width < b.origin.x || b.origin.x + b.size.width < a.origin.x || a.origin.y + a.size.height < b.origin.y || b.origin.y + b.size.height < a.origin.y ? !1 : !0
};
cc.Rect.CCRectUnion = function(a, b) {
    var c = new cc.Rect(0, 0, 0, 0);
    c.origin.x = Math.min(a.origin.x, b.origin.x);
    c.origin.y = Math.min(a.origin.y, b.origin.y);
    c.size.width = Math.max(a.origin.x + a.size.width, b.origin.x + b.size.width) - c.origin.x;
    c.size.height = Math.max(a.origin.y + a.size.height, b.origin.y + b.size.height) - c.origin.y;
    return c
};
cc.Rect.CCRectIntersection = function(a, b) {
    var c = new cc.Rect(Math.max(cc.Rect.CCRectGetMinX(a), cc.Rect.CCRectGetMinX(b)), Math.max(cc.Rect.CCRectGetMinY(a), cc.Rect.CCRectGetMinY(b)), 0, 0);
    c.size.width = Math.min(cc.Rect.CCRectGetMaxX(a), cc.Rect.CCRectGetMaxX(b)) - cc.Rect.CCRectGetMinX(c);
    c.size.height = Math.min(cc.Rect.CCRectGetMaxY(a), cc.Rect.CCRectGetMaxY(b)) - cc.Rect.CCRectGetMinY(c);
    return c
};
cc.PointMake = function(a, b) {
    return new cc.Point(a, b)
};
cc.SizeMake = function(a, b) {
    return new cc.Size(a, b)
};
cc.RectMake = function(a, b, c, d) {
    return new cc.Rect(a, b, c, d)
};
cc.PointZero = function() {
    return new cc.Point(0, 0)
};
cc.SizeZero = function() {
    return new cc.Size(0, 0)
};
cc.RectZero = function() {
    return new cc.Rect(0, 0, 0, 0)
};
cc.Set = cc.Class.extend({
    ctor: function(a) {
        this._m_pSet = a ? Object.create(a._m_pSet) : []
    },
    copy: function() {
        return new this.Set(this)
    },
    mutableCopy: function() {
        return this.copy()
    },
    count: function() {
        return this._m_pSet.length
    },
    addObject: function(a) {
        this._m_pSet.push(a)
    },
    removeObject: function(a) {
        for (var b = 0,
        c = 0,
        d = 0; c < this._m_pSet.length; c++) this._m_pSet[c] != a && (this._m_pSet[d++] = this._m_pSet[c], b++);
        array.length = b
    },
    containsObject: function(a) {
        return ! 0 == a in this._m_pSet ? !0 : !1
    },
    anyObject: function() {
        return 0 < this._m_pSet.length ? this._m_pSet[0] : null
    },
    _m_pSet: null
});
cc.NSMutableSet = cc.Set;
cc = cc = cc || {};
cc.splitWithForm = function(a, b) {
    if (a && 0 != a.length) {
        var c = a.indexOf("{"),
        d = a.indexOf("}");
        if (! ( - 1 == c || -1 == d) && !(c > d)) if (c = a.substr(c + 1, d - c - 1), 0 != c.length) {
            var d = c.indexOf("{"),
            e = c.indexOf("}"); - 1 != d || -1 != e || (b = c.split(","))
        }
    }
    return b
};
cc.RectFromString = function(a) {
    var b = cc.RectZero();
    if (a) {
        var c = a.indexOf("{") + 1,
        d = a.lastIndexOf("}", a.length); - 1 == c || -1 == d || (a = a.substring(c, d), c = a.indexOf("}"), -1 != c && (c = a.indexOf(",", c), -1 != c && (b = a.substr(0, c), a = a.substr(c + 1, a.length - c), c = cc.splitWithForm(b.toString()), a = cc.splitWithForm(a.toString()), b = parseFloat(c[0]), c = parseFloat(c[1]), d = parseFloat(a[0]), a = parseFloat(a[1]), b = cc.RectMake(b, c, d, a))))
    }
    return b
};
cc.PointFromString = function(a) {
    var b = cc.PointZero();
    try {
        if ("" == a) return b;
        var c = cc.splitWithForm(a),
        d = parseFloat(c[0]),
        e = parseFloat(c[1]),
        b = cc.PointMake(d, e)
    } catch(f) {}
    return b
};
cc.SizeFromString = function(a) {
    var b = cc.SizeZero();
    try {
        if ("" == a) return b;
        var c = cc.splitWithForm(a),
        d = parseFloat(c[0]),
        e = parseFloat(c[1]),
        b = cc.SizeMake(d, e)
    } catch(f) {}
    return b
};
cc = cc = cc || {};
cc.AffineTransform = function(a, b, c, d, e, f) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = e;
    this.ty = f
};
cc.__AffineTransformMake = function(a, b, c, d, e, f) {
    return new cc.AffineTransform(a, b, c, d, e, f)
};
cc.AffineTransformMake = function(a, b, c, d, e, f) {
    return new cc.AffineTransform(a, b, c, d, e, f)
};
cc.__PointApplyAffineTransform = function(a, b) {
    var c = new cc.Point;
    c.x = b.a * a.x + b.c * a.y + b.tx;
    c.y = b.b * a.x + b.d * a.y + b.ty;
    return c
};
cc.PointApplyAffineTransform = function(a, b) {
    return cc.__PointApplyAffineTransform(a, b)
};
cc.__SizeApplyAffineTransform = function(a, b) {
    var c = new cc.Size;
    c.width = b.a * a.width + b.c * a.height;
    c.height = b.b * a.width + b.d * a.height;
    return c
};
cc.SizeApplyAffineTransform = function(a, b) {
    return cc.__SizeApplyAffineTransform(a, b)
};
cc.AffineTransformMakeIdentity = function() {
    return cc.__AffineTransformMake(1, 0, 0, 1, 0, 0)
};
cc.AffineTransformIdentity = function() {
    return cc.AffineTransformMakeIdentity()
};
cc.RectApplyAffineTransform = function(a, b) {
    var c = cc.Rect.CCRectGetMinY(a),
    d = cc.Rect.CCRectGetMinX(a),
    e = cc.Rect.CCRectGetMaxX(a),
    f = cc.Rect.CCRectGetMaxY(a),
    g = cc.PointApplyAffineTransform(cc.PointMake(d, c), b),
    c = cc.PointApplyAffineTransform(cc.PointMake(e, c), b),
    d = cc.PointApplyAffineTransform(cc.PointMake(d, f), b),
    h = cc.PointApplyAffineTransform(cc.PointMake(e, f), b),
    e = Math.min(Math.min(g.x, c.x), Math.min(d.x, h.x)),
    f = Math.max(Math.max(g.x, c.x), Math.max(d.x, h.x)),
    i = Math.min(Math.min(g.y, c.y), Math.min(d.y, h.y)),
    g = Math.max(Math.max(g.y, c.y), Math.max(d.y, h.y));
    return cc.RectMake(e, i, f - e, g - i)
};
cc.AffineTransformTranslate = function(a, b, c) {
    return cc.__AffineTransformMake(a.a, a.b, a.c, a.d, a.tx + a.a * b + a.c * c, a.ty + a.b * b + a.d * c)
};
cc.AffineTransformScale = function(a, b, c) {
    return cc.__AffineTransformMake(a.a * b, a.b * b, a.c * c, a.d * c, a.tx, a.ty)
};
cc.AffineTransformRotate = function(a, b) {
    var c = Math.sin(b),
    d = Math.cos(b);
    return cc.__AffineTransformMake(a.a * d + a.c * c, a.b * d + a.d * c, a.c * d - a.a * c, a.d * d - a.b * c, a.tx, a.ty)
};
cc.AffineTransformConcat = function(a, b) {
    return cc.__AffineTransformMake(a.a * b.a + a.b * b.c, a.a * b.b + a.b * b.d, a.c * b.a + a.d * b.c, a.c * b.b + a.d * b.d, a.tx * b.a + a.ty * b.c + b.tx, a.tx * b.b + a.ty * b.d + b.ty)
};
cc.AffineTransformEqualToTransform = function(a, b) {
    return a.a == b.a && a.b == b.b && a.c == b.c && a.d == b.d && a.tx == b.tx && a.ty == b.ty
};
cc.AffineTransformInvert = function(a) {
    var b = 1 / (a.a * a.d - a.b * a.c);
    return cc.__AffineTransformMake(b * a.d, -b * a.b, -b * a.c, b * a.a, b * (a.c * a.ty - a.d * a.tx), b * (a.b * a.tx - a.a * a.ty))
};
cc = cc = cc || {};
cc.kCCPointEpsilon = parseFloat("1.192092896e-07F");
cc.ccp = function(a, b) {
    return new cc.Point(a, b)
};
cc.ccpNeg = function(a) {
    return new cc.Point( - a.x, -a.y)
};
cc.ccpAdd = function(a, b) {
    return new cc.Point(a.x + b.x, a.y + b.y)
};
cc.ccpSub = function(a, b) {
    return new cc.Point(a.x - b.x, a.y - b.y)
};
cc.ccpMult = function(a, b) {
    return new cc.Point(a.x * b, a.y * b)
};
cc.ccpMidpoint = function(a, b) {
    return cc.ccpMult(cc.ccpAdd(a, b), 0.5)
};
cc.ccpDot = function(a, b) {
    return a.x * b.x + a.y * b.y
};
cc.ccpCross = function(a, b) {
    return a.x * b.y - a.y * b.x
};
cc.ccpPerp = function(a) {
    return new cc.Point( - a.y, a.x)
};
cc.ccpRPerp = function(a) {
    return new cc.Point(a.y, -a.x)
};
cc.ccpProject = function(a, b) {
    return cc.ccpMult(b, cc.ccpDot(a, b) / cc.ccpDot(b, b))
};
cc.ccpRotate = function(a, b) {
    return new cc.Point(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x)
};
cc.ccpUnrotate = function(a, b) {
    return new cc.Point(a.x * b.x + a.y * b.y, a.y * b.x - a.x * b.y)
};
cc.ccpLengthSQ = function(a) {
    return cc.ccpDot(a, a)
};
cc.ccpLength = function(a) {
    return Math.sqrt(cc.ccpLengthSQ(a))
};
cc.ccpDistance = function(a, b) {
    return cc.ccpLength(cc.ccpSub(a, b))
};
cc.ccpNormalize = function(a) {
    return cc.ccpMult(a, 1 / cc.ccpLength(a))
};
cc.ccpForAngle = function(a) {
    return new cc.Point(Math.cos(a), Math.sin(a))
};
cc.ccpToAngle = function(a) {
    return Math.atan2(a.y, a.x)
};
cc.clampf = function(a, b, c) {
    if (b > c) var d = b,
    b = c,
    c = d;
    return a < b ? b: a < c ? a: c
};
cc.ccpClamp = function(a, b, c) {
    return new cc.Point(cc.clampf(a.x, b.x, c.x), cc.clampf(a.y, b.y, c.y))
};
cc.ccpFromSize = function(a) {
    return new cc.Point(a.width, a.height)
};
cc.ccpCompOp = function(a, b) {
    return new cc.Point(b(a.x), b(a.y))
};
cc.ccpLerp = function(a, b, c) {
    return cc.ccpAdd(cc.ccpMult(a, 1 - c), cc.ccpMult(b, c))
};
cc.ccpFuzzyEqual = function(a, b, c) {
    return a.x - c <= b.x && b.x <= a.x + c && a.y - c <= b.y && b.y <= a.y + c ? !0 : !1
};
cc.ccpCompMult = function(a, b) {
    return new cc.Point(a.x * b.x, a.y * b.y)
};
cc.ccpAngleSigned = function(a, b) {
    var c = cc.ccpNormalize(a),
    d = cc.ccpNormalize(b),
    c = Math.atan2(c.x * d.y - c.y * d.x, cc.ccpDot(c, d));
    return Math.abs(c) < cc.kCCPointEpsilon ? 0 : c
};
cc.ccpAngle = function(a, b) {
    var c = Math.acos(cc.ccpDot(cc.ccpNormalize(a), cc.ccpNormalize(b)));
    return Math.abs(c) < cc.kCCPointEpsilon ? 0 : c
};
cc.ccpRotateByAngle = function(a, b, c) {
    var a = cc.ccpSub(a, b),
    d = Math.cos(c),
    c = Math.sin(c),
    e = a.x;
    a.x = e * d - a.y * c + b.x;
    a.y = e * c + a.y * d + b.y;
    return a
};
cc.ccpLineIntersect = function(a, b, c, d, e) {
    if (a.x == b.x && a.y == b.y || c.x == d.x && c.y == d.y) return ! 1;
    var f = b.x - a.x,
    b = b.y - a.y,
    g = d.x - c.x,
    d = d.y - c.y,
    h = a.x - c.x,
    a = a.y - c.y,
    c = d * f - g * b;
    e.x = g * a - d * h;
    e.y = f * a - b * h;
    if (0 == c) return 0 == e.x || 0 == e.y ? !0 : !1;
    e.x /= c;
    e.y /= c;
    return ! 0
};
cc.ccpSegmentIntersect = function(a, b, c, d) {
    var e = new cc.Point;
    return cc.ccpLineIntersect(a, b, c, d, e) && 0 <= e.x && 1 >= e.x && 0 <= e.y && 1 >= e.y ? !0 : !1
};
cc.ccpIntersectPoint = function(a, b, c, d) {
    var e = new cc.Point;
    return cc.ccpLineIntersect(a, b, c, d, e) ? (c = new cc.Point, c.x = a.x + e.x * (b.x - a.x), c.y = a.y + e.x * (b.y - a.y), c) : cc.PointZero()
};
cc.ccpSameAs = function(a, b) {
    return a.x && b.x ? a.x == b.x && a.y == b.y: !1
};
cc = cc = cc || {};
cc.kCCNodeTagInvalid = -1;
cc.kCCNodeOnEnter = null;
cc.kCCNodeOnExit = null;
cc.saveContext = function() {
    cc.renderContextType == cc.kCanvas && cc.renderContext.save()
};
cc.restoreContext = function() {
    cc.renderContextType == cc.kCanvas && cc.renderContext.restore()
};
cc.Node = cc.Class.extend({
    _m_nZOrder: 0,
    _m_fVertexZ: 0,
    _m_fRotation: 0,
    _m_fScaleX: 1,
    _m_fScaleY: 1,
    _m_tPosition: cc.PointZero(),
    _m_tPositionInPixels: cc.PointZero(),
    _m_fSkewX: 0,
    _m_fSkewY: 0,
    _m_pChildren: null,
    _m_pCamera: null,
    _m_pGrid: null,
    _m_bIsVisible: !0,
    _m_tAnchorPoint: new cc.Point(0, 0),
    _m_tAnchorPointInPixels: new cc.Point(0, 0),
    _m_tContentSize: cc.SizeZero(),
    _m_tContentSizeInPixels: cc.SizeZero(),
    _m_bIsRunning: !1,
    _m_pParent: null,
    _m_bIsRelativeAnchorPoint: !0,
    _m_nTag: cc.kCCNodeTagInvalid,
    _m_pUserData: null,
    _m_bIsTransformDirty: !0,
    _m_bIsInverseDirty: !0,
    _isCacheDirty: !0,
    _m_bIsTransformGLDirty: null,
    _m_tTransform: null,
    _m_tInverse: null,
    _m_pTransformGL: null,
    ctor: function() {
        cc.NODE_TRANSFORM_USING_AFFINE_MATRIX && (this._m_bIsTransformGLDirty = !0, this._m_pTransformGL = 0);
        this._m_tAnchorPoint = new cc.Point(0, 0);
        this._m_tAnchorPointInPixels = new cc.Point(0, 0);
        this._m_tContentSize = new cc.Size(0, 0);
        this._m_tContentSizeInPixels = new cc.Size(0, 0)
    },
    _arrayMakeObjectsPerformSelector: function(a, b) {
        if (a && 0 < a.length) for (var c = 0; c < a.length; c++) {
            var d = a[c];
            if (d && "string" == typeof b) d[b]();
            else d && "function" == typeof b && b.call(d)
        }
    },
    _addDirtyRegionToDirector: function() {},
    _isInDirtyRegion: function() {},
    setNodeDirty: function() {
        this._setNodeDirtyForCache();
        this._m_bIsTransformDirty = this._m_bIsInverseDirty = !0;
        cc.NODE_TRANSFORM_USING_AFFINE_MATRIX && (this._m_bIsTransformGLDirty = !0)
    },
    _setNodeDirtyForCache: function() {
        this._isCacheDirty = !0;
        this._m_pParent && this._m_pParent._setNodeDirtyForCache()
    },
    getSkewX: function() {
        return this._m_fSkewX
    },
    setSkewX: function(a) {
        this._m_fSkewX = a;
        this.setNodeDirty()
    },
    getSkewY: function() {
        return this._m_fSkewY
    },
    setSkewY: function(a) {
        this._m_fSkewY = a;
        this.setNodeDirty()
    },
    getZOrder: function() {
        return this._m_nZOrder
    },
    _setZOrder: function(a) {
        this._m_nZOrder = a
    },
    getVertexZ: function() {
        return this._m_fVertexZ / cc.CONTENT_SCALE_FACTOR()
    },
    setVertexZ: function(a) {
        this._m_fVertexZ = a * cc.CONTENT_SCALE_FACTOR()
    },
    getRotation: function() {
        return this._m_fRotation
    },
    setRotation: function(a) {
        this._m_fRotation = a;
        this.setNodeDirty()
    },
    getScale: function() {
        cc.Assert(this._m_fScaleX == this._m_fScaleY, "cc.Node#scale. ScaleX != ScaleY. Don't know which one to return");
        return this._m_fScaleX
    },
    setScale: function(a) {
        this._m_fScaleY = this._m_fScaleX = a;
        this.setNodeDirty()
    },
    getScaleX: function() {
        return this._m_fScaleX
    },
    setScaleX: function(a) {
        this._m_fScaleX = a;
        this.setNodeDirty()
    },
    getScaleY: function() {
        return this._m_fScaleY
    },
    setScaleY: function(a) {
        this._m_fScaleY = a;
        this.setNodeDirty()
    },
    setPosition: function(a) {
        this._m_tPosition = a;
        this._m_tPositionInPixels = 1 == cc.CONTENT_SCALE_FACTOR() ? this._m_tPosition: cc.ccpMult(a, cc.CONTENT_SCALE_FACTOR());
        this.setNodeDirty()
    },
    setPositionInPixels: function(a) {
        this._m_tPositionInPixels = a;
        this._m_tPosition = 1 == cc.CONTENT_SCALE_FACTOR() ? this._m_tPositionInPixels: cc.ccpMult(a, 1 / cc.CONTENT_SCALE_FACTOR());
        this.setNodeDirty()
    },
    getPositionInPixels: function() {
        return new cc.Point(this._m_tPositionInPixels.x, this._m_tPositionInPixels.y)
    },
    getPosition: function() {
        return new cc.Point(this._m_tPosition.x, this._m_tPosition.y)
    },
    getPositionX: function() {
        return this._m_tPosition.x
    },
    setPositionX: function(a) {
        this.setPosition(cc.ccp(a, this._m_tPosition.y))
    },
    getPositionY: function() {
        return this._m_tPosition.y
    },
    setPositionY: function(a) {
        this.setPosition(cc.ccp(this._m_tPosition.x, a))
    },
    getChildrenCount: function() {
        return this._m_pChildren ? this._m_pChildren.length: 0
    },
    getChildren: function() {
        return this._m_pChildren
    },
    getCamera: function() {
        this._m_pCamera || (this._m_pCamera = new cc.Camera);
        return this._m_pCamera
    },
    getGrid: function() {
        return this._m_pGrid
    },
    setGrid: function(a) {
        this._m_pGrid = a
    },
    getIsVisible: function() {
        return this._m_bIsVisible
    },
    setIsVisible: function(a) {
        this._m_bIsVisible = a;
        this.setNodeDirty()
    },
    getAnchorPoint: function() {
        return new cc.Point(this._m_tAnchorPoint.x, this._m_tAnchorPoint.y)
    },
    setAnchorPoint: function(a) {
        cc.Point.CCPointEqualToPoint(a, this._m_tAnchorPoint) || (this._m_tAnchorPoint = a, this._m_tAnchorPointInPixels = new cc.Point(this._m_tContentSizeInPixels.width * this._m_tAnchorPoint.x, this._m_tContentSizeInPixels.height * this._m_tAnchorPoint.y), this.setNodeDirty())
    },
    getAnchorPointInPixels: function() {
        return new cc.Point(this._m_tAnchorPointInPixels.x, this._m_tAnchorPointInPixels.y)
    },
    setContentSizeInPixels: function(a) {
        cc.Size.CCSizeEqualToSize(a, this._m_tContentSizeInPixels) || (this._m_tContentSizeInPixels = a, this._m_tContentSize = 1 == cc.CONTENT_SCALE_FACTOR() ? this._m_tContentSizeInPixels: new cc.Size(a.width / cc.CONTENT_SCALE_FACTOR(), a.height / cc.CONTENT_SCALE_FACTOR()), this._m_tAnchorPointInPixels = new cc.Point(this._m_tContentSizeInPixels.width * this._m_tAnchorPoint.x, this._m_tContentSizeInPixels.height * this._m_tAnchorPoint.y), this.setNodeDirty())
    },
    getContentSize: function() {
        return new cc.Size(this._m_tContentSize.width, this._m_tContentSize.height)
    },
    setContentSize: function(a) {
        cc.Size.CCSizeEqualToSize(a, this._m_tContentSize) || (this._m_tContentSize = a, this._m_tContentSizeInPixels = 1 == cc.CONTENT_SCALE_FACTOR() ? this._m_tContentSize: new cc.Size(a.width * cc.CONTENT_SCALE_FACTOR(), a.height * cc.CONTENT_SCALE_FACTOR()), this._m_tAnchorPointInPixels = new cc.Point(this._m_tContentSizeInPixels.width * this._m_tAnchorPoint.x, this._m_tContentSizeInPixels.height * this._m_tAnchorPoint.y), this.setNodeDirty())
    },
    getContentSizeInPixels: function() {
        return new cc.Size(this._m_tContentSizeInPixels.width, this._m_tContentSizeInPixels.height)
    },
    getIsRunning: function() {
        return this._m_bIsRunning
    },
    getParent: function() {
        return this._m_pParent
    },
    setParent: function(a) {
        this._m_pParent = a
    },
    getIsRelativeAnchorPoint: function() {
        return this._m_bIsRelativeAnchorPoint
    },
    setIsRelativeAnchorPoint: function(a) {
        this._m_bIsRelativeAnchorPoint = a;
        this.setNodeDirty()
    },
    getTag: function() {
        return this._m_nTag
    },
    setTag: function(a) {
        this._m_nTag = a
    },
    getUserData: function() {
        return this._m_pUserData
    },
    setUserData: function(a) {
        this._m_pUserData = a
    },
    boundingBox: function() {
        var a = this.boundingBoxInPixels();
        return cc.RECT_PIXELS_TO_POINTS(a)
    },
    boundingBoxInPixels: function() {
        var a = cc.RectMake(0, 0, this._m_tContentSizeInPixels.width, this._m_tContentSizeInPixels.height);
        return cc.RectApplyAffineTransform(a, this.nodeToParentTransform())
    },
    boundingBoxToWorld: function() {
        var a = cc.RectMake(0, 0, this._m_tContentSizeInPixels.width, this._m_tContentSizeInPixels.height),
        a = cc.RectApplyAffineTransform(a, this.nodeToWorldTransform()),
        a = new cc.Rect(0 | a.origin.x - 4, 0 | a.origin.y - 4, 0 | a.size.width + 8, 0 | a.size.height + 8);
        if (!this._m_pChildren) return a;
        for (var b = 0; b < this._m_pChildren.length; b++) {
            var c = this._m_pChildren[b];
            c && c._m_bIsVisible && (c = c.boundingBoxToWorld()) && (a = cc.Rect.CCRectUnion(a, c))
        }
        return a
    },
    cleanup: function() {
        this.stopAllActions();
        this.unscheduleAllSelectors();
        this._arrayMakeObjectsPerformSelector(this._m_pChildren, "cleanup")
    },
    description: function() {
        return "<cc.Node | Tag =" + this._m_nTag + ">"
    },
    _childrenAlloc: function() {
        this._m_pChildren = []
    },
    getChildByTag: function(a) {
        cc.Assert(a != cc.kCCNodeTagInvalid, "Invalid tag");
        if (null != this._m_pChildren) for (var b = 0; b < this._m_pChildren.length; b++) {
            var c = this._m_pChildren[b];
            if (c && c._m_nTag == a) return c
        }
        return null
    },
    addChild: function(a, b, c) {
        cc.Assert(null != a, "Argument must be non-nil");
        cc.Assert(null == a._m_pParent, "child already added. It can't be added again");
        b = null != b ? b: a.getZOrder();
        c = null != c ? c: a.getTag();
        a.setTag(c);
        this._m_pChildren || this._childrenAlloc();
        this._insertChild(a, b);
        a.setParent(this);
        this._m_bIsRunning && (a.onEnter(), a.onEnterTransitionDidFinish())
    },
    removeFromParentAndCleanup: function(a) {
        this._m_pParent.removeChild(this, a)
    },
    removeChild: function(a, b) {
        null != this._m_pChildren && ( - 1 < this._m_pChildren.indexOf(a) && this._detachChild(a, b), this.setNodeDirty())
    },
    removeChildByTag: function(a, b) {
        cc.Assert(a != cc.kCCNodeTagInvalid, "Invalid tag");
        var c = this.getChildByTag(a);
        null == c ? cc.LOG("cocos2d: removeChildByTag: child not found!") : this.removeChild(c, b)
    },
    removeAllChildrenWithCleanup: function(a) {
        if (null != this._m_pChildren) {
            for (var b = 0; b < this._m_pChildren.length; b++) {
                var c = this._m_pChildren[b];
                if (c) {
                    if (this._m_bIsRunning) c.onExit();
                    a && c.cleanup();
                    c.setParent(null)
                }
            }
            this._m_pChildren = []
        }
    },
    _detachChild: function(a, b) {
        if (this._m_bIsRunning) a.onExit();
        b && a.cleanup();
        a.setParent(null);
        cc.ArrayRemoveObject(this._m_pChildren, a)
    },
    _insertChild: function(a, b) {
        var c = this._m_pChildren[this._m_pChildren.length - 1];
        if (!c || c.getZOrder() <= b) this._m_pChildren.push(a);
        else for (c = 0; c < this._m_pChildren.length; c++) {
            var d = this._m_pChildren[c];
            if (d && d.getZOrder() > b) {
                this._m_pChildren = cc.ArrayAppendObjectToIndex(this._m_pChildren, a, c);
                break
            }
        }
        a._setZOrder(b)
    },
    reorderChild: function(a, b) {
        cc.Assert(null != a, "Child must be non-nil");
        cc.ArrayRemoveObject(this._m_pChildren, a);
        this._insertChild(a, b);
        this.setNodeDirty()
    },
    draw: function() {},
    visit: function(a) {
        if (this._m_bIsVisible) {
            a = a || cc.renderContext;
            a.save();
            this._m_pGrid && this._m_pGrid.isActive() && (this._m_pGrid.beforeDraw(), this.transformAncestors());
            this.transform(a);
            if (this._m_pChildren) for (var b = 0; b < this._m_pChildren.length; b++) {
                var c = this._m_pChildren[b];
                c && 0 > c._m_nZOrder && c.visit(a)
            }
            this.draw(a);
            if (this._m_pChildren) for (b = 0; b < this._m_pChildren.length; b++)(c = this._m_pChildren[b]) && 0 <= c._m_nZOrder && c.visit(a);
            this._m_pGrid && this._m_pGrid.isActive() && this._m_pGrid.afterDraw(this);
            a.restore()
        }
    },
    transformAncestors: function() {
        null != this._m_pParent && (this._m_pParent.transformAncestors(), this._m_pParent.transform())
    },
    transform: function(a) {
        a = a || cc.renderContext;
        if (cc.renderContextType == cc.kCanvas) {
            if (this._m_bIsRelativeAnchorPoint) {
                var b = new cc.Point(0, 0);
                this._m_pParent && (b = this._m_pParent._m_tAnchorPointInPixels);
                a.translate(0 | this._m_tPosition.x - b.x, -(0 | this._m_tPosition.y - b.y))
            } else {
                b = new cc.Point(0, 0);
                this._m_pParent && (b = this._m_pParent._m_tAnchorPointInPixels);
                var c = this._m_tAnchorPointInPixels;
                a.translate(0 | this._m_tPosition.x - b.x + c.x, -(0 | this._m_tPosition.y - b.y + c.y))
            }
            0 != this._m_fRotation && a.rotate(cc.DEGREES_TO_RADIANS(this._m_fRotation)); (1 != this._m_fScaleX || 1 != this._m_fScaleY) && a.scale(this._m_fScaleX, this._m_fScaleY); (0 != this._m_fSkewX || 0 != this._m_fSkewY) && a.transform(1, -Math.tan(cc.DEGREES_TO_RADIANS(this._m_fSkewY)), -Math.tan(cc.DEGREES_TO_RADIANS(this._m_fSkewX)), 1, 0, 0)
        } else cc.NODE_TRANSFORM_USING_AFFINE_MATRIX && this._m_bIsTransformGLDirty && (this.nodeToParentTransform(), this._m_bIsTransformGLDirty = !1),
        this._m_pCamera && (!this._m_pGrid || !this._m_pGrid.isActive()) && this._m_pCamera.locate()
    },
    onEnter: function() {
        this._arrayMakeObjectsPerformSelector(this._m_pChildren, "onEnter");
        this.resumeSchedulerAndActions();
        this._m_bIsRunning = !0
    },
    onEnterTransitionDidFinish: function() {
        this._arrayMakeObjectsPerformSelector(this._m_pChildren, "onEnterTransitionDidFinish")
    },
    onExit: function() {
        this.pauseSchedulerAndActions();
        this._m_bIsRunning = !1;
        this._arrayMakeObjectsPerformSelector(this._m_pChildren, "onExit")
    },
    runAction: function(a) {
        cc.Assert(null != a, "Argument must be non-nil");
        cc.ActionManager.sharedManager().addAction(a, this, !this._m_bIsRunning);
        return a
    },
    stopAllActions: function() {
        cc.ActionManager.sharedManager().removeAllActionsFromTarget(this)
    },
    stopAction: function(a) {
        cc.ActionManager.sharedManager().removeAction(a)
    },
    stopActionByTag: function(a) {
        cc.Assert(a != cc.kCCActionTagInvalid, "Invalid tag");
        cc.ActionManager.sharedManager().removeActionByTag(a, this)
    },
    getActionByTag: function(a) {
        cc.Assert(a != cc.kCCActionTagInvalid, "Invalid tag");
        return cc.ActionManager.sharedManager().getActionByTag(a, this)
    },
    numberOfRunningActions: function() {
        return cc.ActionManager.sharedManager.numberOfRunningActionsInTarget(this)
    },
    isScheduled: function() {},
    scheduleUpdate: function() {
        this.scheduleUpdateWithPriority(0)
    },
    scheduleUpdateWithPriority: function(a) {
        cc.Scheduler.sharedScheduler().scheduleUpdateForTarget(this, a, !this._m_bIsRunning)
    },
    unscheduleUpdate: function() {
        cc.Scheduler.sharedScheduler().unscheduleUpdateForTarget(this)
    },
    schedule: function(a, b) {
        b || (b = 0);
        cc.Assert(a, "Argument must be non-nil");
        cc.Assert(0 <= b, "Argument must be positive");
        cc.Scheduler.sharedScheduler().scheduleSelector(a, this, b, !this._m_bIsRunning)
    },
    unschedule: function(a) {
        a && cc.Scheduler.sharedScheduler().unscheduleSelector(a, this)
    },
    unscheduleAllSelectors: function() {
        cc.Scheduler.sharedScheduler().unscheduleAllSelectorsForTarget(this)
    },
    resumeSchedulerAndActions: function() {
        cc.Scheduler.sharedScheduler().resumeTarget(this);
        cc.ActionManager.sharedManager().resumeTarget(this)
    },
    pauseSchedulerAndActions: function() {
        cc.Scheduler.sharedScheduler().pauseTarget(this);
        cc.ActionManager.sharedManager().pauseTarget(this)
    },
    nodeToParentTransform: function() {
        if (this._m_bIsTransformDirty) {
            this._m_tTransform = cc.AffineTransformIdentity(); ! this._m_bIsRelativeAnchorPoint && !cc.Point.CCPointEqualToPoint(this._m_tAnchorPointInPixels, cc.PointZero()) && (this._m_tTransform = cc.AffineTransformTranslate(this._m_tTransform, this._m_tAnchorPointInPixels.x, this._m_tAnchorPointInPixels.y));
            cc.Point.CCPointEqualToPoint(this._m_tPositionInPixels, cc.PointZero()) || (this._m_tTransform = cc.AffineTransformTranslate(this._m_tTransform, this._m_tPositionInPixels.x, this._m_tPositionInPixels.y));
            0 != this._m_fRotation && (this._m_tTransform = cc.AffineTransformRotate(this._m_tTransform, -cc.DEGREES_TO_RADIANS(this._m_fRotation)));
            if (0 != this._m_fSkewX || 0 != this._m_fSkewY) {
                var a = cc.AffineTransformMake(1, Math.tan(cc.DEGREES_TO_RADIANS(this._m_fSkewY)), Math.tan(cc.DEGREES_TO_RADIANS(this._m_fSkewX)), 1, 0, 0);
                this._m_tTransform = cc.AffineTransformConcat(a, this._m_tTransform)
            }
            1 == this._m_fScaleX && 1 == this._m_fScaleY || (this._m_tTransform = cc.AffineTransformScale(this._m_tTransform, this._m_fScaleX, this._m_fScaleY));
            cc.Point.CCPointEqualToPoint(this._m_tAnchorPointInPixels, cc.PointZero()) || (this._m_tTransform = cc.AffineTransformTranslate(this._m_tTransform, -this._m_tAnchorPointInPixels.x, -this._m_tAnchorPointInPixels.y));
            this._m_bIsTransformDirty = !1
        }
        return this._m_tTransform
    },
    parentToNodeTransform: function() {
        this._m_bIsInverseDirty && (this._m_tInverse = cc.AffineTransformInvert(this.nodeToParentTransform()), this._m_bIsInverseDirty = !1);
        return this._m_tInverse
    },
    nodeToWorldTransform: function() {
        for (var a = this.nodeToParentTransform(), b = this._m_pParent; null != b; b = b.getParent()) a = cc.AffineTransformConcat(a, b.nodeToParentTransform());
        return a
    },
    worldToNodeTransform: function() {
        return cc.AffineTransformInvert(this.nodeToWorldTransform())
    },
    convertToNodeSpace: function(a) {
        var b = new cc.Point;
        1 == cc.CONTENT_SCALE_FACTOR() ? b = cc.PointApplyAffineTransform(a, this.worldToNodeTransform()) : (b = cc.ccpMult(a, cc.CONTENT_SCALE_FACTOR()), b = cc.PointApplyAffineTransform(b, this.worldToNodeTransform()), b = cc.ccpMult(b, 1 / cc.CONTENT_SCALE_FACTOR()));
        return b
    },
    convertToWorldSpace: function(a) {
        var b = new cc.Point;
        1 == cc.CONTENT_SCALE_FACTOR() ? b = cc.PointApplyAffineTransform(a, this.nodeToWorldTransform()) : (b = cc.ccpMult(a, cc.CONTENT_SCALE_FACTOR()), b = cc.PointApplyAffineTransform(b, this.nodeToWorldTransform()), b = cc.ccpMult(b, 1 / cc.CONTENT_SCALE_FACTOR()));
        return b
    },
    convertToNodeSpaceAR: function(a) {
        var a = this.convertToNodeSpace(a),
        b = new cc.Point,
        b = 1 == cc.CONTENT_SCALE_FACTOR() ? this._m_tAnchorPointInPixels: cc.ccpMult(this._m_tAnchorPointInPixels, 1 / cc.CONTENT_SCALE_FACTOR());
        return cc.ccpSub(a, b)
    },
    convertToWorldSpaceAR: function(a) {
        var b = new cc.Point,
        b = 1 == cc.CONTENT_SCALE_FACTOR() ? this._m_tAnchorPointInPixels: cc.ccpMult(this._m_tAnchorPointInPixels, 1 / cc.CONTENT_SCALE_FACTOR()),
        c = new cc.Point,
        c = cc.ccpAdd(a, b);
        return this.convertToWorldSpace(c)
    },
    _convertToWindowSpace: function(a) {
        var b = new cc.Point,
        b = this.convertToWorldSpace(a);
        return cc.Director.sharedDirector().convertToUI(b)
    },
    convertTouchToNodeSpace: function(a) {
        a = a.locationInView(a.view());
        a = cc.Director.sharedDirector().convertToGL(a);
        return this.convertToNodeSpace(a)
    },
    convertTouchToNodeSpaceAR: function(a) {
        a = a.locationInView(a.view());
        a = cc.Director.sharedDirector().convertToGL(a);
        return this.convertToNodeSpaceAR(a)
    },
    update: function() {}
});
cc.Node.node = function() {
    return new cc.Node
};
cc = cc = cc || {};
cc.AtlasNode = cc.Node.extend({
    _m_uItemsPerRow: 0,
    _m_uItemsPerColumn: 0,
    _m_uItemWidth: 0,
    _m_uItemHeight: 0,
    _m_tColorUnmodified: new cc.Color3B(0, 0, 0),
    _m_pTextureAtlas: null,
    _m_bIsOpacityModifyRGB: !1,
    _m_tBlendFunc: new cc.BlendFunc(cc.BLEND_SRC, cc.BLEND_DST),
    _m_cOpacity: 0,
    _m_tColor: null,
    _m_originalTexture: null,
    _m_uQuadsToDraw: 0,
    atlasWithTileFile: function(a, b, c, d) {
        var e = new cc.AtlasNode;
        return e.initWithTileFile(a, b, c, d) ? e: null
    },
    initWithTileFile: function(a, b, c, d) {
        cc.Assert(null != a, "title should not be null");
        this._m_uItemWidth = b * cc.CONTENT_SCALE_FACTOR();
        this._m_uItemHeight = c * cc.CONTENT_SCALE_FACTOR();
        this._m_cOpacity = 255;
        this._m_tColor = this._m_tColorUnmodified = cc.WHITE();
        this._m_bIsOpacityModifyRGB = !0;
        this._m_tBlendFunc.src = cc.BLEND_SRC;
        this._m_tBlendFunc.dst = cc.BLEND_DST;
        this._m_pTextureAtlas = new cc.TextureAtlas;
        this._m_pTextureAtlas.initWithFile(a, d);
        cc.renderContextType == cc.kCanvas && (this._m_originalTexture = this._m_pTextureAtlas.getTexture());
        if (!this._m_pTextureAtlas) return cc.LOG("cocos2d: Could not initialize CCAtlasNode. Invalid Texture."),
        !1;
        this._updateBlendFunc();
        this._updateOpacityModifyRGB();
        this._calculateMaxItems();
        this._m_uQuadsToDraw = d;
        return ! 0
    },
    updateAtlasValues: function() {
        cc.Assert(!1, "CCAtlasNode:Abstract updateAtlasValue not overriden")
    },
    draw: function(a) {
        this._super();
        if (cc.renderContextType == cc.kCanvas) {
            a = a || cc.renderContext;
            a.globalAlpha = this.getOpacity() / 255;
            for (var b = this.getTexture(), c = this._m_pTextureAtlas._m_pQuads, d, e, f, g, h, i, j = new cc.Point(0 | -this._m_tAnchorPointInPixels.x, 0 | -this._m_tAnchorPointInPixels.y), l = 0, k = this._m_pTextureAtlas.getCapacity(); l < k; l++) d = parseFloat(c[l].tl.texCoords.u) * b.width,
            e = parseFloat(c[l].tl.texCoords.v) * b.height,
            h = c[l].tl.vertices.x,
            i = c[l].tl.vertices.y,
            f = (parseFloat(c[l].br.texCoords.u) - parseFloat(c[l].tl.texCoords.u)) * b.width,
            g = (parseFloat(c[l].br.texCoords.v) - parseFloat(c[l].tl.texCoords.v)) * b.height,
            a.drawImage(b, d, e, f, g, h + j.x, -(i + j.y), f, g)
        } else this._m_pTextureAtlas.drawNumberOfQuads(this._m_uQuadsToDraw, 0)
    },
    getColor: function() {
        return this._m_bIsOpacityModifyRGB ? this._m_tColorUnmodified: this._m_tColor
    },
    setColor: function(a) {
        this._m_tColor = this._m_sColorUnmodified = a;
        if (this.getTexture() && cc.renderContextType == cc.kCanvas) {
            var b = cc.TextureCache.sharedTextureCache().getTextureColors(this._m_originalTexture);
            b && this.setTexture(cc.generateTintImage(this.getTexture(), b, this._m_tColor))
        }
        this._m_bIsOpacityModifyRGB && (this._m_tColor.r = a.r * this._m_cOpacity / 255, this._m_tColor.g = a.g * this._m_cOpacity / 255, this._m_tColor.b = a.b * this._m_cOpacity / 255)
    },
    getOpacity: function() {
        return this._m_cOpacity
    },
    setOpacity: function(a) {
        this._m_cOpacity = a
    },
    setIsOpacityModifyRGB: function(a) {
        var b = this._m_tColor;
        this._m_bIsOpacityModifyRGB = a;
        this._m_tColor = b
    },
    getIsOpacityModifyRGB: function() {
        return this._m_bIsOpacityModifyRGB
    },
    getBlendFunc: function() {
        return this._m_tBlendFunc
    },
    setBlendFunc: function(a) {
        this._m_tBlendFunc = a
    },
    getTexture: function() {
        return this._m_pTextureAtlas.getTexture()
    },
    setTexture: function(a) {
        this._m_pTextureAtlas.setTexture(a);
        this._updateBlendFunc();
        this._updateOpacityModifyRGB()
    },
    setTextureAtlas: function(a) {
        this._m_pTextureAtlas = a
    },
    getTextureAtlas: function() {
        return this._m_pTextureAtlas
    },
    getQuadsToDraw: function() {
        return this._m_uQuadsToDraw
    },
    setQuadsToDraw: function(a) {
        this._m_uQuadsToDraw = a
    },
    _calculateMaxItems: function() {
        var a = this._m_pTextureAtlas.getTexture();
        this._m_uItemsPerColumn = parseInt(a.height / this._m_uItemHeight);
        this._m_uItemsPerRow = parseInt(a.width / this._m_uItemWidth)
    },
    _updateBlendFunc: function() {},
    _updateOpacityModifyRGB: function() {}
});
cc = cc = cc || {};
cc.kCCTexture2DPixelFormat_Automatic = 0;
cc.kCCTexture2DPixelFormat_RGBA8888 = 1;
cc.kCCTexture2DPixelFormat_RGB888 = 2;
cc.kCCTexture2DPixelFormat_RGB565 = 3;
cc.kCCTexture2DPixelFormat_A8 = 4;
cc.kCCTexture2DPixelFormat_I8 = 5;
cc.kCCTexture2DPixelFormat_AI88 = 6;
cc.kCCTexture2DPixelFormat_RGBA4444 = 7;
cc.kCCTexture2DPixelFormat_RGB5A1 = 8;
cc.kCCTexture2DPixelFormat_PVRTC4 = 9;
cc.kCCTexture2DPixelFormat_PVRTC2 = 10;
cc.kCCTexture2DPixelFormat_Default = cc.kCCTexture2DPixelFormat_RGBA8888;
cc.kTexture2DPixelFormat_Automatic = cc.kCCTexture2DPixelFormat_Automatic;
cc.kTexture2DPixelFormat_RGBA8888 = cc.kCCTexture2DPixelFormat_RGBA8888;
cc.kTexture2DPixelFormat_RGB888 = cc.kCCTexture2DPixelFormat_RGB888;
cc.kTexture2DPixelFormat_RGB565 = cc.kCCTexture2DPixelFormat_RGB565;
cc.kTexture2DPixelFormat_A8 = cc.kCCTexture2DPixelFormat_A8;
cc.kTexture2DPixelFormat_RGBA4444 = cc.kCCTexture2DPixelFormat_RGBA4444;
cc.kTexture2DPixelFormat_RGB5A1 = cc.kCCTexture2DPixelFormat_RGB5A1;
cc.kTexture2DPixelFormat_Default = cc.kCCTexture2DPixelFormat_Default;
cc.g_defaultAlphaPixelFormat = cc.kCCTexture2DPixelFormat_Default;
cc.PVRHaveAlphaPremultiplied_ = !1;
function _ccTexParams(a, b, c, d) {
    this.minFilter = a;
    this.magFilter = b;
    this.wrapS = c;
    this.wrapT = d
}
cc.Texture2D = cc.Class.extend({
    _m_bPVRHaveAlphaPremultiplied: null,
    _m_ePixelFormat: null,
    _m_uPixelsWide: null,
    _m_uPixelsHigh: null,
    _m_uName: null,
    _m_tContentSize: null,
    _m_fMaxS: null,
    _m_fMaxT: null,
    _m_bHasPremultipliedAlpha: null,
    ctor: function() {
        cc.SUPPORT_PVRTC && (this.initWithPVRTCData = function(a, b, c, d, e, f) {
            if (!cc.Configuration.sharedConfiguration().isSupportsPVRTC()) return cc.LOG("cocos2d: WARNING: PVRTC images is not supported."),
            !1;
            this.setAntiAliasTexParameters();
            new cc.GLsizei;
            this._m_tContentSize = cc.SizeMake(e, e);
            this._m_uPixelsHigh = this._m_uPixelsWide = e;
            this._m_fMaxT = this._m_fMaxS = 1;
            this._m_bHasPremultipliedAlpha = cc.PVRHaveAlphaPremultiplied_;
            this._m_ePixelFormat = f;
            return ! 0
        })
    },
    getPixelFormat: function() {
        return this._m_ePixelFormat
    },
    getPixelsWide: function() {
        return this._m_uPixelsWide
    },
    getPixelsHigh: function() {
        return this._m_uPixelsHigh
    },
    getName: function() {
        return this._m_uName
    },
    getContentSizeInPixels: function() {
        var a = new cc.Size;
        a.width = this._m_tContentSize.width / cc.CONTENT_SCALE_FACTOR();
        a.height = this._m_tContentSize.height / cc.CONTENT_SCALE_FACTOR();
        return a
    },
    getMaxS: function() {
        return this._m_fMaxS
    },
    setMaxS: function(a) {
        this._m_fMaxS = a
    },
    getMaxT: function() {
        return this._m_fMaxT
    },
    setMaxT: function(a) {
        this._m_fMaxT = a
    },
    getHasPremultipliedAlpha: function() {
        return this._m_bHasPremultipliedAlpha
    },
    description: function() {
        return "<cc.Texture2D | Name = " + this._m_uName + " | Dimensions = " + this._m_uPixelsWide + " x " + this._m_uPixelsHigh + " | Coordinates = (" + this._m_fMaxS + ", " + this._m_fMaxT + ")>"
    },
    releaseData: function(a) {
        cc.free(a)
    },
    keepData: function(a, b) {
        cc.UNUSED_PARAM(b);
        return a
    },
    initWithData: function(a, b, c, d) {
        this.setAntiAliasTexParameters();
        switch (a) {
        case cc.kCCTexture2DPixelFormat_RGBA8888:
            break;
        case cc.kCCTexture2DPixelFormat_RGB888:
            break;
        case cc.kCCTexture2DPixelFormat_RGBA4444:
            break;
        case cc.kCCTexture2DPixelFormat_RGB5A1:
            break;
        case cc.kCCTexture2DPixelFormat_RGB565:
            break;
        case cc.kCCTexture2DPixelFormat_AI88:
            break;
        case cc.kCCTexture2DPixelFormat_A8:
            break;
        default:
            cc.Assert(0, "NSInternalInconsistencyException")
        }
        this._m_tContentSize = d;
        this._m_uPixelsWide = b;
        this._m_uPixelsHigh = c;
        this._m_ePixelFormat = a;
        this._m_fMaxS = d.width / b;
        this._m_fMaxT = d.height / c;
        this._m_bHasPremultipliedAlpha = !1;
        return ! 0
    },
    drawAtPoint: function() {},
    drawInRect: function() {},
    initWithImage: function(a) {
        var b, c;
        if (null == a) return cc.LOG("cocos2d: cc.Texture2D. Can't create Texture. UIImage is nil"),
        !1;
        var d = cc.Configuration.sharedConfiguration();
        cc.TEXTURE_NPOT_SUPPORT ? d.isSupportsNPOT() && (b = a.getWidth(), c = a.getHeight()) : (b = cc.NextPOT(a.getWidth()), c = cc.NextPOT(a.getHeight()));
        d = d.getMaxTextureSize();
        return c > d || b > d ? (cc.LOG("cocos2d: WARNING: Image (%u x %u) is bigger than the supported %u x %u", b, c, d, d), null) : this._initPremultipliedATextureWithImage(a, b, c)
    },
    initWithString: function(a, b, c, d, e) {
        3 == arguments.length && (d = arguments[1], e = arguments[2], b = cc.SizeMake(0, 0), c = cc.TextAlignmentCenter);
        cc.ENABLE_CACHE_TEXTTURE_DATA && cc.VolatileTexture.addStringTexture(this, a, b, c, d, e);
        var f = new cc.Image;
        eAlign = new cc.Image.ETextAlign;
        eAlign = cc.TextAlignmentCenter == c ? cc.Image.kAlignCenter: cc.TextAlignmentLeft == c ? cc.Image.kAlignLeft: cc.Image.kAlignRight;
        return ! f.initWithString(a, b.width, b.height, eAlign, d, e) ? !1 : this.initWithImage(f)
    },
    initWithPVRFile: function(a) {
        var b = !1,
        c = new cc.TexturePVR; (b = c.initWithContentsOfFile(a)) ? (c.setRetainName(!0), this._m_uName = c.getName(), this._m_fMaxT = this._m_fMaxS = 1, this._m_uPixelsWide = c.getWidth(), this._m_uPixelsHigh = c.getHeight(), this._m_tContentSize = cc.SizeMake(this._m_uPixelsWide, this._m_uPixelsHigh), this._m_bHasPremultipliedAlpha = cc.PVRHaveAlphaPremultiplied_, this._m_ePixelFormat = c.getFormat(), this.setAntiAliasTexParameters()) : cc.LOG("cocos2d: Couldn't load PVR image %s", a);
        return b
    },
    setTexParameters: function(a) {
        cc.Assert(this._m_uPixelsWide == cc.NextPOT(this._m_uPixelsWide) && this._m_uPixelsHigh == cc.NextPOT(this._m_uPixelsHigh) || a.wrapS == cc.GL_CLAMP_TO_EDGE && a.wrapT == cc.GL_CLAMP_TO_EDGE, "cc.GL_CLAMP_TO_EDGE should be used in NPOT textures")
    },
    setAntiAliasTexParameters: function() {
        this.setTexParameters([cc.GL_LINEAR, cc.GL_LINEAR, cc.GL_CLAMP_TO_EDGE, cc.GL_CLAMP_TO_EDGE])
    },
    setAliasTexParameters: function() {
        this.setTexParameters([cc.GL_NEAREST, cc.GL_NEAREST, cc.GL_CLAMP_TO_EDGE, cc.GL_CLAMP_TO_EDGE])
    },
    generateMipmap: function() {
        cc.Assert(this._m_uPixelsWide == cc.NextPOT(this._m_uPixelsWide) && this._m_uPixelsHigh == cc.NextPOT(this._m_uPixelsHigh), "Mimpap texture only works in POT textures")
    },
    bitsPerPixelForFormat: function() {
        var a = 0;
        switch (this._m_ePixelFormat) {
        case cc.kCCTexture2DPixelFormat_RGBA8888:
            a = 32;
            break;
        case cc.kCCTexture2DPixelFormat_RGB565:
            a = 16;
            break;
        case cc.kCCTexture2DPixelFormat_A8:
            a = 8;
            break;
        case cc.kCCTexture2DPixelFormat_RGBA4444:
            a = 16;
            break;
        case cc.kCCTexture2DPixelFormat_RGB5A1:
            a = 16;
            break;
        case cc.kCCTexture2DPixelFormat_PVRTC4:
            a = 4;
            break;
        case cc.kCCTexture2DPixelFormat_PVRTC2:
            a = 2;
            break;
        case cc.kCCTexture2DPixelFormat_I8:
            a = 8;
            break;
        case cc.kCCTexture2DPixelFormat_AI88:
            a = 16;
            break;
        case cc.kCCTexture2DPixelFormat_RGB888:
            a = 24;
            break;
        default:
            a = -1,
            cc.Assert(!1, "illegal pixel format"),
            cc.LOG("bitsPerPixelForFormat: %d, cannot give useful result", this._m_ePixelFormat)
        }
        return a
    },
    _initPremultipliedATextureWithImage: function(a, b, c) {
        var d = null,
        e = null,
        f = null,
        g;
        g = new cc.Size;
        var h = new cc.Texture2DPixelFormat,
        h = new cc.size_t;
        g = a.hasAlpha();
        h = a.getBitsPerComponent();
        g ? h = cc.g_defaultAlphaPixelFormat: 8 <= h ? h = cc.kCCTexture2DPixelFormat_RGB888: (cc.LOG("cocos2d: cc.Texture2D: Using RGB565 texture since image has no alpha"), h = cc.kCCTexture2DPixelFormat_RGB565);
        g = cc.SizeMake(a.getWidth(), a.getHeight());
        switch (h) {
        case cc.kCCTexture2DPixelFormat_RGBA8888:
        case cc.kCCTexture2DPixelFormat_RGBA4444:
        case cc.kCCTexture2DPixelFormat_RGB5A1:
        case cc.kCCTexture2DPixelFormat_RGB565:
        case cc.kCCTexture2DPixelFormat_A8:
            e = a.getData();
            cc.Assert(null != e, "null image data.");
            if (a.getWidth() == b && a.getHeight() == c) d = new(4 * c * b),
            cc.memcpy(d, e, 4 * c * b);
            else for (var f = d = new(4 * c * b), i = a.getHeight(), j = 0; j < i; ++j) cc.memcpy(f + 4 * b * j, e + 4 * a.getWidth() * j, 4 * a.getWidth());
            break;
        case cc.kCCTexture2DPixelFormat_RGB888:
            e = a.getData();
            cc.Assert(null != e, "null image data.");
            if (a.getWidth() == b && a.getHeight() == c) d = new(3 * c * b),
            cc.memcpy(d, e, 3 * c * b);
            else {
                f = d = new(3 * c * b);
                i = a.getHeight();
                for (j = 0; j < i; ++j) cc.memcpy(f + 3 * b * j, e + 3 * a.getWidth() * j, 3 * a.getWidth())
            }
            break;
        default:
            cc.Assert(0, "Invalid pixel format")
        }
        if (h == cc.kCCTexture2DPixelFormat_RGB565) {
            e = new(2 * c * b);
            f = d;
            i = b * c;
            for (j = 0; j < i; ++j, ++f);
            delete d;
            d = e
        } else if (h == cc.kCCTexture2DPixelFormat_RGBA4444) {
            e = new(2 * c * b);
            f = d;
            i = b * c;
            for (j = 0; j < i; ++j, ++f);
            delete d;
            d = e
        } else if (h == cc.kCCTexture2DPixelFormat_RGB5A1) {
            e = new(2 * c * b);
            f = d;
            i = b * c;
            for (j = 0; j < i; ++j, ++f);
            delete d;
            d = e
        } else h == cc.kCCTexture2DPixelFormat_A8 && (h = cc.kCCTexture2DPixelFormat_RGBA8888);
        d && (this.initWithData(d, h, b, c, g), this._m_bHasPremultipliedAlpha = a.isPremultipliedAlpha(), delete d);
        return ! 0
    }
});
cc.Texture2D.setDefaultAlphaPixelFormat = function(a) {
    cc.g_defaultAlphaPixelFormat = a
};
cc.Texture2D.defaultAlphaPixelFormat = function() {
    return cc.g_defaultAlphaPixelFormat
};
cc.Texture2D.PVRImagesHavePremultipliedAlpha = function(a) {
    cc.PVRHaveAlphaPremultiplied_ = a
};
cc = cc = cc || {};
cc.g_sharedTextureCache = null;
cc.loadImage = function(a) {
    if (cc.computeImageFormatType(a) == cc.kFmtUnKnown) cc.LOG("unsupportted format" + a);
    else {
        var b = new Image;
        b.onload = function() {
            cc.TextureCache.sharedTextureCache().cacheImage(a, b)
        };
        b.src = a
    }
};
cc.computeImageFormatType = function(a) {
    return 0 < a.toLowerCase().indexOf(".jpg") || 0 < a.toLowerCase().indexOf(".jpeg") ? cc.kFmtJpg: 0 < a.indexOf(".png") || 0 < a.indexOf(".PNG") ? cc.kFmtPng: cc.kFmtUnKnown
};
cc.TextureCache = cc.Class.extend({
    m_pTextures: {},
    _m_TextureColorsCache: {},
    ctor: function() {
        cc.Assert(null == cc.g_sharedTextureCache, "Attempted to allocate a second instance of a singleton.")
    },
    addImageAsync: function(a, b, c) {
        cc.Assert(null != a, "TextureCache: fileimage MUST not be null");
        var d = this.m_pTextures[a.toString()];
        if (d) this._addImageAsyncCallBack(b, c);
        else {
            var d = new Image,
            e = this;
            d.addEventListener("load",
            function() {
                e._addImageAsyncCallBack(b, c)
            });
            d.src = a;
            this.m_pTextures[a.toString()] = d
        }
        if (cc.renderContextType == cc.kCanvas) return this.m_pTextures[a.toString()]
    },
    _addImageAsyncCallBack: function(a, b) {
        if (a && "string" == typeof b) a[b]();
        else a && "function" == typeof b && b.call(a)
    },
    addPVRTCImage: function() {
        cc.Assert(0, "TextureCache:addPVRTCImage does not support")
    },
    description: function() {
        return "<TextureCache | Number of textures = " + this.m_pTextures.length + ">"
    },
    addImage: function(a) {
        cc.Assert(null != a, "TextureCache: fileimage MUST not be null");
        var b = this.m_pTextures[a.toString()];
        if (b) cc.Loader.shareLoader().onResLoaded();
        else b = new Image,
        b.addEventListener("load",
        function() {
            cc.Loader.shareLoader().onResLoaded()
        }),
        b.addEventListener("error",
        function() {
            cc.Loader.shareLoader().onResLoadingErr(a)
        }),
        b.src = a,
        this.m_pTextures[a.toString()] = b;
        if (cc.renderContextType == cc.kCanvas) return this.m_pTextures[a.toString()]
    },
    addUIImage: function(a, b) {
        cc.Assert(null != a, "TextureCache: image MUST not be nill");
        var c = null;
        if (b && this.m_pTextures.hasOwnProperty(b) && (c = this.m_pTextures[b])) return c;
        c = new cc.Texture2D;
        c.initWithImage(a);
        null != b && null != c ? this.m_pTextures[b] = c: cc.LOG("cocos2d: Couldn't add UIImage in TextureCache");
        return c
    },
    textureForKey: function(a) {
        return this.m_pTextures.hasOwnProperty(a) ? this.m_pTextures[a] : null
    },
    getKeyByTexture: function(a) {
        for (var b in this.m_pTextures) if (this.m_pTextures[b] == a) return b;
        return null
    },
    getTextureColors: function(a) {
        var b = this.getKeyByTexture(a);
        if (b) if (a instanceof HTMLImageElement) b = a.src;
        else return null;
        this._m_TextureColorsCache.hasOwnProperty(b) || (this._m_TextureColorsCache[b] = cc.generateTextureCacheForColor(a));
        return this._m_TextureColorsCache[b]
    },
    removeAllTextures: function() {
        this.m_pTextures = {}
    },
    removeTexture: function(a) {
        if (a) for (var b in this.m_pTextures) if (this.m_pTextures[b] == a) {
            delete this.m_pTextures[b];
            break
        }
    },
    removeTextureForKey: function(a) {
        null != a && delete this.m_pTextures[a]
    },
    dumpCachedTextureInfo: function() {
        var a = 0,
        b = 0,
        c;
        for (c in this.m_pTextures) {
            var d = this.m_pTextures[c],
            e = d.bitsPerPixelForFormat(),
            f = d.getPixelsWide() * d.getPixelsHigh() * e / 8,
            b = b + f;
            a++;
            cc.LOG("cocos2d: '" + d.toString() + "' id=" + d.getName() + " " + d.getPixelsWide() + " x " + d.getPixelsHigh() + " @ " + e + " bpp => " + f / 1024 + " KB")
        }
        cc.LOG("cocos2d: TextureCache dumpDebugInfo: " + a + " textures, for " + b / 1024 + " KB (" + (b / 1048576).toFixed(2) + " MB)")
    },
    addPVRImage: function(a) {
        cc.Assert(null != a, "TextureCache: fileimage MUST not be nill");
        if (null != this.m_pTextures[a]) return this.m_pTextures[a];
        var b = new cc.Texture2D;
        b.initWithPVRFile(a) ? this.m_pTextures[a] = b: cc.LOG("cocos2d: Couldn't add PVRImage:" + a + " in TextureCache");
        return b
    }
});
cc.TextureCache.sharedTextureCache = function() {
    cc.g_sharedTextureCache || (cc.g_sharedTextureCache = new cc.TextureCache);
    return cc.g_sharedTextureCache
};
cc.TextureCache.purgeSharedTextureCache = function() {
    cc.g_sharedTextureCache = null
};
cc.kInvalid = 0;
cc.kImageFile = 1;
cc.kImageData = 2;
cc.kString = 3;
cc = cc = cc || {};
cc.TextureAtlas = cc.Class.extend({
    _m_pIndices: [],
    _m_pBuffersVBO: [0, 1],
    _m_bDirty: !1,
    _m_uCapacity: 0,
    _m_pTexture: null,
    _m_pQuads: [],
    getTotalQuads: function() {
        return this._m_pQuads.length
    },
    getCapacity: function() {
        return this._m_uCapacity
    },
    getTexture: function() {
        return this._m_pTexture
    },
    setTexture: function(a) {
        this._m_pTexture = a
    },
    getQuads: function() {
        return this._m_pQuads
    },
    setQuads: function(a) {
        this._m_pQuads = a
    },
    description: function() {
        return "<CCTextureAtlas | totalQuads =" + this._m_uTotalQuads + ">"
    },
    _initIndices: function() {
        if (0 != this._m_uCapacity) for (var a = 0; a < this._m_uCapacity; a++) this._m_pIndices[6 * a + 0] = 4 * a + 0,
        this._m_pIndices[6 * a + 1] = 4 * a + 0,
        this._m_pIndices[6 * a + 2] = 4 * a + 2,
        this._m_pIndices[6 * a + 3] = 4 * a + 1,
        this._m_pIndices[6 * a + 4] = 4 * a + 3,
        this._m_pIndices[6 * a + 5] = 4 * a + 3
    },
    initWithFile: function(a, b) {
        var c = cc.TextureCache.sharedTextureCache().addImage(a);
        if (c) return this.initWithTexture(c, b);
        cc.LOG("cocos2d: Could not open file: " + a);
        return null
    },
    initWithTexture: function(a, b) {
        cc.Assert(null != a, "TextureAtlas.initWithTexture():texture should not be null");
        this._m_uCapacity = b;
        this._m_pTexture = a;
        cc.Assert(0 == this._m_pQuads.length && 0 == this._m_pIndices.length, "TextureAtlas.initWithTexture():_m_pQuads and _m_pIndices should not be null");
        this._m_pQuads = [];
        this._m_pIndices = [];
        if ((!this._m_pQuads || !this._m_pIndices) && 0 < this._m_uCapacity) return ! 1;
        this._m_bDirty = !0;
        this._initIndices();
        return ! 0
    },
    updateQuad: function(a, b) {
        this._m_pQuads[b] = a;
        this._m_bDirty = !0
    },
    insertQuad: function(a, b) {
        this._m_pQuads = cc.ArrayAppendObjectToIndex(this._m_pQuads, a, b);
        this._m_bDirty = !0
    },
    insertQuadFromIndex: function(a, b) {
        if (a != b) {
            var c = this._m_pQuads[a];
            cc.ArrayRemoveObjectAtIndex(this._m_pQuads, a);
            this._m_pQuads = a > b ? cc.ArrayAppendObjectToIndex(this._m_pQuads, c, b) : cc.ArrayAppendObjectToIndex(this._m_pQuads, c, b - 1);
            this._m_bDirty = !0
        }
    },
    removeQuadAtIndex: function(a) {
        cc.ArrayRemoveObjectAtIndex(this._m_pQuads, a);
        this._m_bDirty = !0
    },
    removeAllQuads: function() {
        this._m_pQuads.length = 0
    },
    resizeCapacity: function(a) {
        if (a == this._m_uCapacity) return ! 0;
        this._m_uTotalQuads = Math.min(this._m_uTotalQuads, a);
        this._m_uCapacity = a;
        return ! 0
    },
    drawNumberOfQuads: function() {},
    drawQuads: function() {
        this.drawNumberOfQuads(this._m_pQuads.length, 0)
    }
});
cc.TextureAtlas.textureAtlasWithFile = function(a, b) {
    var c = new cc.TextureAtlas;
    return c && c.initWithFile(a, b) ? c: null
};
cc.TextureAtlas.textureAtlasWithTexture = function(a, b) {
    var c = new cc.TextureAtlas;
    return c && c.initWithTexture(a, b) ? c: null
};
cc = cc = cc || {};
cc.kCCImageFormatJPG = 0;
cc.kCCImageFormatPNG = 1;
cc.kCCImageFormatRawData = 2;
cc.NextPOT = function(a) {
    a -= 1;
    a |= a >> 1;
    a |= a >> 2;
    a |= a >> 4;
    a |= a >> 8;
    return (a | a >> 16) + 1
};
cc.RenderTexture = cc.Node.extend({
    canvas: null,
    context: null,
    _m_uFBO: 0,
    _m_nOldFBO: 0,
    _m_pTexture: null,
    _m_pUITextureImage: null,
    _m_ePixelFormat: cc.kCCTexture2DPixelFormat_RGBA8888,
    _m_pSprite: null,
    ctor: function() {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        this.setAnchorPoint(new cc.Point(0, 0))
    },
    getSprite: function() {
        return this._m_pSprite
    },
    setSprite: function(a) {
        this._m_pSprite = a
    },
    getCanvas: function() {
        return this.canvas
    },
    setContentSize: function(a) {
        a && (this._super(a), this.canvas.width = 1.5 * a.width, this.canvas.height = 1.5 * a.height, this.context.translate(0, this.canvas.height))
    },
    initWithWidthAndHeight: function(a, b, c) {
        if (cc.renderContextType == cc.kCanvas) return this.canvas.width = a || 10,
        this.canvas.height = b || 10,
        this.context.translate(0, this.canvas.height),
        !0;
        if (cc.Configuration.sharedConfiguration().getGlesVersion() <= GLES_VER_1_0) return ! 1;
        var d = !1,
        a = a * cc.CONTENT_SCALE_FACTOR(),
        b = b * cc.CONTENT_SCALE_FACTOR();
        glGetIntegerv(cc.GL_FRAMEBUFFER_BINDING, this._m_nOldFBO);
        var e = cc.NextPOT(a),
        f = cc.NextPOT(b),
        g = [];
        cc.BREAK_IF(!g);
        for (var h = 0; h < 4 * e * f; h++) g[h] = 0;
        this._m_ePixelFormat = c;
        this._m_pTexture = new cc.Texture2D;
        cc.BREAK_IF(!this._m_pTexture);
        this._m_pTexture.initWithData(g, this._m_ePixelFormat, e, f, cc.SizeMake(a, b));
        ccglGenFramebuffers(1, this._m_uFBO);
        ccglBindFramebuffer(cc.GL_FRAMEBUFFER, this._m_uFBO);
        ccglFramebufferTexture2D(cc.GL_FRAMEBUFFER, cc.GL_COLOR_ATTACHMENT0, GL_TEXTURE_2D, m_pTexture.getName(), 0);
        ccglCheckFramebufferStatus(cc.GL_FRAMEBUFFER) != cc.GL_FRAMEBUFFER_COMPLETE ? cc.Assert(0, "Render Texture : Could not attach texture to framebuffer") : (this._m_pTexture.setAliasTexParameters(), this._m_pSprite = cc.Sprite.spriteWithTexture(this._m_pTexture), this._m_pSprite.setScaleY( - 1), this.addChild(this._m_pSprite), this._m_pSprite.setBlendFunc(new cc.BlendFunc(GL_ONE, GL_ONE_MINUS_SRC_ALPHA)), ccglBindFramebuffer(cc.GL_FRAMEBUFFER, this._m_nOldFBO), d = !0);
        return d
    },
    begin: function() {
        glPushMatrix();
        var a = this._m_pTexture.getContentSizeInPixels(),
        b = cc.Director.sharedDirector().getDisplaySizeInPixels(),
        c = b.width / a.width,
        b = b.height / a.height;
        ccglOrtho( - 1 / c, 1 / c, -1 / b, 1 / b, -1, 1);
        glViewport(0, 0, a.width, a.height);
        glGetIntegerv(cc.GL_FRAMEBUFFER_BINDING, this._m_nOldFBO);
        ccglBindFramebuffer(cc.GL_FRAMEBUFFER, this._m_uFBO);
        cc.ENABLE_DEFAULT_GL_STATES()
    },
    beginWithClear: function(a, b, c, d) {
        this.begin();
        var e = [0, 0, 0, 0];
        glGetFloatv(GL_COLOR_CLEAR_VALUE, e);
        glClearColor(a, b, c, d);
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
        glClearColor(e[0], e[1], e[2], e[3])
    },
    end: function(a) {
        a && (a = !0);
        ccglBindFramebuffer(cc.GL_FRAMEBUFFER, this._m_nOldFBO);
        glPopMatrix();
        var b = cc.Director.sharedDirector().getDisplaySizeInPixels();
        cc.Director.sharedDirector().getOpenGLView().setViewPortInPoints(0, 0, b.width, b.height);
        if (cc.ENABLE_CACHE_TEXTTURE_DATA && a) {
            var a = this._m_pTexture.getContentSizeInPixels(),
            b = a.width,
            c = a.height;
            this._m_pUITextureImage = new cc.Image; ! 0 == this.getUIImageFromBuffer(this._m_pUITextureImage, 0, 0, b, c) ? cc.VolatileTexture.addDataTexture(this._m_pTexture, this._m_pUITextureImage.getData(), cc.kTexture2DPixelFormat_RGBA8888, a) : cc.Log("Cache rendertexture failed!")
        }
    },
    clear: function(a, b, c, d) {
        cc.renderContextType == cc.kCanvas ? a ? this.context.clearRect(a.origin.x, a.origin.y, a.size.width, a.size.height) : this.context.clearRect(0, 0, this.canvas.width, -this.canvas.height) : (this.beginWithClear(a, b, c, d), this.end())
    },
    saveBuffer: function(a, b, c, d, e, f) {
        if ("number" == typeof a) {
            var c = c || 0,
            d = d || 0,
            e = e || 0,
            f = f || 0,
            g = !1;
            cc.Assert(a == cc.kCCImageFormatJPG || a == cc.kCCImageFormatPNG, "the image can only be saved as JPG or PNG format");
            a = new cc.Image;
            null != a && this.getUIImageFromBuffer(a, c, d, e, f) && (b = cc.FileUtils.getWriteablePath() + b, g = a.saveToFile(b));
            return g
        }
        if ("string" == typeof a) return f = e || 0,
        e = d || 0,
        d = c || 0,
        c = b || 0,
        b = a,
        g = !1,
        a = new cc.Image,
        null != a && this.getUIImageFromBuffer(a, c, d, e, f) && (g = a.saveToFile(b)),
        g
    },
    getUIImageAsDataFromBuffer: function() {
        return null
    },
    getUIImageFromBuffer: function(a, b, c, d, e) {
        if (null == a || null == this._m_pTexture) return ! 1;
        var f = this._m_pTexture.getContentSizeInPixels(),
        g = f.width,
        f = f.height;
        if (0 > b || b >= g || 0 > c || c >= f || 0 > d || 0 > e || 0 == d && 0 != e || 0 == e && 0 != d) return ! 1;
        var h = d,
        i = e;
        0 == d && (h = g);
        0 == e && (i = f);
        h = b + h > g ? g - b: h;
        i = c + i > f ? f - c: i;
        d = null;
        d = !1;
        cc.Assert(this._m_ePixelFormat == cc.kCCTexture2DPixelFormat_RGBA8888, "only RGBA8888 can be saved as image");
        d = [];
        for (e = 0; e < 4 * h * i; e++) d[e] = 0;
        cc.BREAK_IF(!d);
        var j = 0,
        l = 0;
        glGetIntegerv(GL_MAX_TEXTURE_SIZE, 0);
        j = cc.NextPOT(g);
        l = cc.NextPOT(f);
        cc.BREAK_IF(0 == j || 0 == l);
        cc.BREAK_IF(0 < j || 0 < l);
        for (e = 0; e < 4 * j * l; e++);
        cc.BREAK_IF(!0);
        this.begin();
        glPixelStorei(GL_PACK_ALIGNMENT, 1);
        glReadPixels(0, 0, j, l, GL_RGBA, GL_UNSIGNED_BYTE, null);
        this.end(!1);
        for (e = 0; e < i; ++e) this._memcpy(d, 4 * e * h, null, 4 * (c + i - e - 1) * j + 4 * b, 4 * h);
        return d = a.initWithImageData(d, 4 * h * i, cc.kFmtRawData, h, i, 8)
    },
    _memcpy: function(a, b, c, d, e) {
        for (var f = 0; f < e; f++) a[b + f] = c[d + f]
    }
});
cc.RenderTexture.renderTextureWithWidthAndHeight = function(a, b, c) {
    c || (c = cc.kCCTexture2DPixelFormat_RGBA8888);
    var d = new cc.RenderTexture;
    return d && d.initWithWidthAndHeight(a, b, c) ? d: null
};
cc.kCCProgressTimerTypeRadialCCW = 0;
cc.kCCProgressTimerTypeRadialCW = 1;
cc.kCCProgressTimerTypeHorizontalBarLR = 2;
cc.kCCProgressTimerTypeHorizontalBarRL = 3;
cc.kCCProgressTimerTypeVerticalBarBT = 4;
cc.kCCProgressTimerTypeVerticalBarTB = 5;
cc.kProgressTextureCoordsCount = 4;
cc.kProgressTextureCoords = 30;
cc.ProgressTimer = cc.Node.extend({
    getType: function() {
        return this._m_eType
    },
    getPercentage: function() {
        return this._m_fPercentage
    },
    getSprite: function() {
        return this._m_pSprite
    },
    initWithFile: function(a) {
        return this.initWithTexture(cc.TextureCache.sharedTextureCache().addImage(a))
    },
    initWithTexture: function(a) {
        this._m_pSprite = cc.Sprite.spriteWithTexture(a);
        this._m_fPercentage = 0;
        this._m_pVertexData = null;
        this._m_nVertexDataCount = 0;
        this.setAnchorPoint(cc.ccp(0.5, 0.5));
        this.setContentSize(this._m_pSprite.getContentSize());
        this._m_eType = cc.kCCProgressTimerTypeRadialCCW;
        return ! 0
    },
    setPercentage: function(a) {
        this._m_fPercentage != a && (this._m_fPercentage = cc.clampf(a, 0, 100), this._updateProgress())
    },
    setSprite: function(a) {
        this._m_pSprite != a && (this._m_pSprite = a, this.setContentSize(this._m_pSprite.getContentSize()), this._m_pVertexData && (this._m_pVertexData = null, this._m_nVertexDataCount = 0))
    },
    setType: function(a) {
        a != this._m_eType && (this._m_pVertexData && (this._m_pVertexData = null, this._m_nVertexDataCount = 0), this._m_eType = a)
    },
    draw: function(a) {
        if (cc.renderContextType == cc.kCanvas) if (a = a || cc.renderContext, 1 < this._m_eType) {
            var b = new cc.Point(0 | -this._m_tAnchorPointInPixels.x + this._drawPosition.x, 0 | -this._m_tAnchorPointInPixels.y + this._drawPosition.y);
            a.drawImage(this._m_pSprite._m_pobTexture, this._origin.x, this._origin.y, this._drawSize.width, this._drawSize.height, b.x, -(b.y + this._drawSize.height), this._drawSize.width, this._drawSize.height)
        } else b = this.getContentSize(),
        a.beginPath(),
        a.arc(0, 0, b.width > b.height ? b.width: b.height, Math.PI / 180 * this._startAngle, Math.PI / 180 * this._endAngle, !1),
        a.lineTo(0, 0),
        a.clip(),
        a.closePath(),
        b = this._m_pSprite._m_obOffsetPositionInPixels,
        b = new cc.Point(0 | -this._m_pSprite._m_tAnchorPointInPixels.x + b.x, 0 | -this._m_pSprite._m_tAnchorPointInPixels.y + b.y),
        a.drawImage(this._m_pSprite._m_pobTexture, this._m_pSprite._m_obRect.origin.x, this._m_pSprite._m_obRect.origin.y, this._m_pSprite._m_obRect.size.width, this._m_pSprite._m_obRect.size.height, b.x, -(b.y + this._m_pSprite._m_obRect.size.height), this._m_pSprite._m_obRect.size.width, this._m_pSprite._m_obRect.size.height);
        else this._super(),
        this._m_pVertexData && this._m_pSprite && this._m_pSprite.getBlendFunc()
    },
    _vertexFromTexCoord: function(a) {
        var b = new cc.Vertex2F(0, 0);
        if (this._m_pSprite.getTexture()) var c = Math.max(this._m_pSprite.getQuad().br.texCoords.u, this._m_pSprite.getQuad().bl.texCoords.u),
        d = Math.min(this._m_pSprite.getQuad().br.texCoords.u, this._m_pSprite.getQuad().bl.texCoords.u),
        e = Math.max(this._m_pSprite.getQuad().tl.texCoords.v, this._m_pSprite.getQuad().bl.texCoords.v),
        f = Math.min(this._m_pSprite.getQuad().tl.texCoords.v, this._m_pSprite.getQuad().bl.texCoords.v),
        c = cc.ccp(c, e),
        d = cc.ccp(d, f),
        f = cc.SizeMake(this._m_pSprite.getQuad().br.vertices.x - this._m_pSprite.getQuad().bl.vertices.x, this._m_pSprite.getQuad().tl.vertices.y - this._m_pSprite.getQuad().bl.vertices.y),
        a = cc.ccp(f.width * (a.x - d.x) / (c.x - d.x), f.height * (1 - (a.y - d.y) / (c.y - d.y)));
        else a = cc.PointZero();
        b.x = a.x;
        b.y = a.y;
        return b
    },
    _origin: cc.PointZero(),
    _drawSize: cc.SizeZero(),
    _drawPosition: cc.PointZero(),
    _startAngle: 270,
    _endAngle: 270,
    _updateProgress: function() {
        if (cc.renderContextType == cc.kCanvas) {
            var a = this.getContentSize();
            switch (this._m_eType) {
            case cc.kCCProgressTimerTypeRadialCW:
                this._endAngle = 270 + 3.6 * this._m_fPercentage;
                break;
            case cc.kCCProgressTimerTypeRadialCCW:
                this._startAngle = 270 - 3.6 * this._m_fPercentage;
                break;
            case cc.kCCProgressTimerTypeHorizontalBarLR:
                this._origin = cc.PointZero();
                this._drawPosition = cc.PointZero();
                this._drawSize = cc.SizeMake(0 | this._m_fPercentage / 100 * a.width, a.height);
                break;
            case cc.kCCProgressTimerTypeHorizontalBarRL:
                this._drawSize = cc.SizeMake(0 | this._m_fPercentage / 100 * a.width, a.height);
                this._origin = cc.ccp(a.width - this._drawSize.width | 0, 0);
                this._drawPosition = cc.ccp(a.width - this._drawSize.width, 0);
                break;
            case cc.kCCProgressTimerTypeVerticalBarBT:
                this._drawSize = cc.SizeMake(a.width, 0 | this._m_fPercentage / 100 * a.height);
                this._drawPosition = cc.PointZero();
                this._origin = cc.ccp(0, 0 | a.height - this._drawSize.height);
                break;
            case cc.kCCProgressTimerTypeVerticalBarTB:
                this._drawSize = cc.SizeMake(a.width, 0 | this._m_fPercentage / 100 * a.height),
                this._drawPosition = cc.ccp(0, a.height - this._drawSize.height | 0),
                this._origin = cc.ccp(0, 0)
            }
        } else switch (this._m_eType) {
        case cc.kCCProgressTimerTypeRadialCW:
        case cc.kCCProgressTimerTypeRadialCCW:
            this._updateRadial();
            break;
        case cc.kCCProgressTimerTypeHorizontalBarLR:
        case cc.kCCProgressTimerTypeHorizontalBarRL:
        case cc.kCCProgressTimerTypeVerticalBarBT:
        case cc.kCCProgressTimerTypeVerticalBarTB:
            this._updateBar()
        }
    },
    _updateBar: function() {
        var a = this._m_fPercentage / 100,
        b = Math.max(this._m_pSprite.getQuad().br.texCoords.u, this._m_pSprite.getQuad().bl.texCoords.u),
        c = Math.min(this._m_pSprite.getQuad().br.texCoords.u, this._m_pSprite.getQuad().bl.texCoords.u),
        d = Math.max(this._m_pSprite.getQuad().tl.texCoords.v, this._m_pSprite.getQuad().bl.texCoords.v),
        e = Math.min(this._m_pSprite.getQuad().tl.texCoords.v, this._m_pSprite.getQuad().bl.texCoords.v),
        b = cc.ccp(b, d),
        c = cc.ccp(c, e),
        e = [],
        d = 0;
        if (!this._m_pVertexData) {
            this._m_nVertexDataCount = cc.kProgressTextureCoordsCount;
            this._m_pVertexData = [];
            for (d = 0; d < this._m_nVertexDataCount; d++) this._m_pVertexData[d] = cc.V2F_C4B_T2F_QuadZero();
            cc.Assert(this._m_pVertexData, "");
            this._m_eType == cc.kCCProgressTimerTypeHorizontalBarLR ? (this._m_pVertexData[e[0] = 0].texCoords = cc.tex2(c.x, c.y), this._m_pVertexData[e[1] = 1].texCoords = cc.tex2(c.x, b.y)) : this._m_eType == cc.kCCProgressTimerTypeHorizontalBarRL ? (this._m_pVertexData[e[0] = 2].texCoords = cc.tex2(b.x, b.y), this._m_pVertexData[e[1] = 3].texCoords = cc.tex2(b.x, c.y)) : this._m_eType == cc.kCCProgressTimerTypeVerticalBarBT ? (this._m_pVertexData[e[0] = 1].texCoords = cc.tex2(c.x, b.y), this._m_pVertexData[e[1] = 3].texCoords = cc.tex2(b.x, b.y)) : this._m_eType == cc.kCCProgressTimerTypeVerticalBarTB && (this._m_pVertexData[e[0] = 0].texCoords = cc.tex2(c.x, c.y), this._m_pVertexData[e[1] = 2].texCoords = cc.tex2(b.x, c.y));
            d = e[0];
            this._m_pVertexData[d].vertices = this._vertexFromTexCoord(cc.ccp(this._m_pVertexData[d].texCoords.u, this._m_pVertexData[d].texCoords.v));
            d = e[1];
            this._m_pVertexData[d].vertices = this._vertexFromTexCoord(cc.ccp(this._m_pVertexData[d].texCoords.u, this._m_pVertexData[d].texCoords.v));
            if (this._m_pSprite.isFlipY() || this._m_pSprite.isFlipX()) if (this._m_pSprite.isFlipX() && (d = e[0], this._m_pVertexData[d].texCoords.u = c.x + b.x - this._m_pVertexData[d].texCoords.u, d = e[1], this._m_pVertexData[d].texCoords.u = c.x + b.x - this._m_pVertexData[d].texCoords.u), this._m_pSprite.isFlipY()) d = e[0],
            this._m_pVertexData[d].texCoords.v = c.y + b.y - this._m_pVertexData[d].texCoords.v,
            d = e[1],
            this._m_pVertexData[d].texCoords.v = c.y + b.y - this._m_pVertexData[d].texCoords.v;
            this._updateColor()
        }
        this._m_eType == cc.kCCProgressTimerTypeHorizontalBarLR ? (this._m_pVertexData[e[0] = 3].texCoords = cc.tex2(c.x + (b.x - c.x) * a, b.y), this._m_pVertexData[e[1] = 2].texCoords = cc.tex2(c.x + (b.x - c.x) * a, c.y)) : this._m_eType == cc.kCCProgressTimerTypeHorizontalBarRL ? (this._m_pVertexData[e[0] = 1].texCoords = cc.tex2(c.x + (b.x - c.x) * (1 - a), c.y), this._m_pVertexData[e[1] = 0].texCoords = cc.tex2(c.x + (b.x - c.x) * (1 - a), b.y)) : this._m_eType == cc.kCCProgressTimerTypeVerticalBarBT ? (this._m_pVertexData[e[0] = 0].texCoords = cc.tex2(c.x, c.y + (b.y - c.y) * (1 - a)), this._m_pVertexData[e[1] = 2].texCoords = cc.tex2(b.x, c.y + (b.y - c.y) * (1 - a))) : this._m_eType == cc.kCCProgressTimerTypeVerticalBarTB && (this._m_pVertexData[e[0] = 1].texCoords = cc.tex2(c.x, c.y + (b.y - c.y) * a), this._m_pVertexData[e[1] = 3].texCoords = cc.tex2(b.x, c.y + (b.y - c.y) * a));
        d = e[0];
        this._m_pVertexData[d].vertices = this._vertexFromTexCoord(cc.ccp(this._m_pVertexData[d].texCoords.u, this._m_pVertexData[d].texCoords.v));
        d = e[1];
        this._m_pVertexData[d].vertices = this._vertexFromTexCoord(cc.ccp(this._m_pVertexData[d].texCoords.u, this._m_pVertexData[d].texCoords.v));
        if (this._m_pSprite.isFlipY() || this._m_pSprite.isFlipX()) if (this._m_pSprite.isFlipX() && (d = e[0], this._m_pVertexData[d].texCoords.u = c.x + b.x - this._m_pVertexData[d].texCoords.u, d = e[1], this._m_pVertexData[d].texCoords.u = c.x + b.x - this._m_pVertexData[d].texCoords.u), this._m_pSprite.isFlipY()) d = e[0],
        this._m_pVertexData[d].texCoords.v = c.y + b.y - this._m_pVertexData[d].texCoords.v,
        d = e[1],
        this._m_pVertexData[d].texCoords.v = c.y + b.y - this._m_pVertexData[d].texCoords.v
    },
    _updateRadial: function() {
        var a = Math.max(this._m_pSprite.getQuad().br.texCoords.u, this._m_pSprite.getQuad().bl.texCoords.u),
        b = Math.min(this._m_pSprite.getQuad().br.texCoords.u, this._m_pSprite.getQuad().bl.texCoords.u),
        c = Math.max(this._m_pSprite.getQuad().tl.texCoords.v, this._m_pSprite.getQuad().bl.texCoords.v),
        d = Math.min(this._m_pSprite.getQuad().tl.texCoords.v, this._m_pSprite.getQuad().bl.texCoords.v),
        a = cc.ccp(a, c),
        b = cc.ccp(b, d),
        d = cc.ccpAdd(b, cc.ccpCompMult(this._m_tAnchorPoint, cc.ccpSub(a, b))),
        e = this._m_fPercentage / 100,
        c = 2 * Math.PI * (this._m_eType == cc.kCCProgressTimerTypeRadialCW ? e: 1 - e),
        f = cc.ccp(d.x, b.y),
        g = cc.ccpRotateByAngle(f, d, c),
        c = 0,
        h = cc.PointZero();
        if (0 == e) h = f,
        c = 0;
        else if (1 == e) h = f,
        c = 4;
        else {
            h = Infinity;
            for (e = 0; e <= cc.kProgressTextureCoordsCount; ++e) {
                var i = (e + (cc.kProgressTextureCoordsCount - 1)) % cc.kProgressTextureCoordsCount,
                f = cc.ccpAdd(b, cc.ccpCompMult(this._boundaryTexCoord(e % cc.kProgressTextureCoordsCount), cc.ccpSub(a, b))),
                i = cc.ccpAdd(b, cc.ccpCompMult(this._boundaryTexCoord(i), cc.ccpSub(a, b)));
                0 == e ? i = cc.ccpLerp(f, i, 0.5) : 4 == e && (f = cc.ccpLerp(f, i, 0.5));
                var j = cc.PointZero();
                if (cc.ccpLineIntersect(f, i, d, g, j) && (!(0 == e || 4 == e) || 0 <= j.x && 1 >= j.x) && 0 <= j.y && j.y < h) h = j.y,
                c = e
            }
            h = cc.ccpAdd(d, cc.ccpMult(cc.ccpSub(g, d), h))
        }
        g = !0;
        this._m_nVertexDataCount != c + 3 && (g = !1, this._m_pVertexData && (this._m_pVertexData = null, this._m_nVertexDataCount = 0));
        if (!this._m_pVertexData) {
            this._m_nVertexDataCount = c + 3;
            this._m_pVertexData = [];
            for (e = 0; e < this._m_nVertexDataCount; e++) this._m_pVertexData[e] = cc.V2F_C4B_T2F_QuadZero();
            cc.Assert(this._m_pVertexData, "");
            this._updateColor()
        }
        if (!g) {
            this._m_pVertexData[0].texCoords = cc.tex2(d.x, d.y);
            this._m_pVertexData[0].vertices = this._vertexFromTexCoord(d);
            this._m_pVertexData[1].texCoords = cc.tex2(d.x, b.y);
            this._m_pVertexData[1].vertices = this._vertexFromTexCoord(cc.ccp(d.x, b.y));
            for (e = 0; e < c; ++e) d = cc.ccpAdd(b, cc.ccpCompMult(this._boundaryTexCoord(e), cc.ccpSub(a, b))),
            this._m_pVertexData[e + 2].texCoords = cc.tex2(d.x, d.y),
            this._m_pVertexData[e + 2].vertices = this._vertexFromTexCoord(d);
            if (this._m_pSprite.isFlipX() || this._m_pSprite.isFlipY()) for (e = 0; e < this._m_nVertexDataCount - 1; ++e) if (this._m_pSprite.isFlipX() && (this._m_pVertexData[e].texCoords.u = b.x + a.x - this._m_pVertexData[e].texCoords.u), this._m_pSprite.isFlipY()) this._m_pVertexData[e].texCoords.v = b.y + a.y - this._m_pVertexData[e].texCoords.v
        }
        this._m_pVertexData[this._m_nVertexDataCount - 1].texCoords = cc.tex2(h.x, h.y);
        this._m_pVertexData[this._m_nVertexDataCount - 1].vertices = this._vertexFromTexCoord(h);
        if (this._m_pSprite.isFlipX() || this._m_pSprite.isFlipY()) if (this._m_pSprite.isFlipX() && (this._m_pVertexData[this._m_nVertexDataCount - 1].texCoords.u = b.x + a.x - this._m_pVertexData[this._m_nVertexDataCount - 1].texCoords.u), this._m_pSprite.isFlipY()) this._m_pVertexData[this._m_nVertexDataCount - 1].texCoords.v = b.y + a.y - this._m_pVertexData[this._m_nVertexDataCount - 1].texCoords.v
    },
    _updateColor: function() {
        var a = this._m_pSprite.getOpacity(),
        b = this._m_pSprite.getColor(),
        b = new cc.Color4B(b.r, b.g, b.b, a);
        this._m_pSprite.getTexture() instanceof HTMLImageElement || this._m_pSprite.getTexture() instanceof HTMLCanvasElement ? (b.r *= a / 255, b.g *= a / 255, b.b *= a / 255) : this._m_pSprite.getTexture().getHasPremultipliedAlpha() && (b.r *= a / 255, b.g *= a / 255, b.b *= a / 255);
        if (this._m_pVertexData) for (a = 0; a < this._m_nVertexDataCount; ++a) this._m_pVertexData[a].colors = b
    },
    _boundaryTexCoord: function(a) {
        if (a < cc.kProgressTextureCoordsCount) switch (this._m_eType) {
        case cc.kCCProgressTimerTypeRadialCW:
            return cc.ccp(cc.kProgressTextureCoords >> (a << 1) + 1 & 1, cc.kProgressTextureCoords >> (a << 1) & 1);
        case cc.kCCProgressTimerTypeRadialCCW:
            return cc.ccp(cc.kProgressTextureCoords >> 7 - (a << 1) & 1, cc.kProgressTextureCoords >> 7 - ((a << 1) + 1) & 1)
        }
        return cc.PointZero()
    },
    _m_eType: null,
    _m_fPercentage: 0,
    _m_pSprite: null,
    _m_nVertexDataCount: 0,
    _m_pVertexData: null
});
cc.ProgressTimer.progressWithFile = function(a) {
    var b = new cc.ProgressTimer;
    return b.initWithFile(a) ? b: null
};
cc.ProgressTimer.progressWithTexture = function(a) {
    var b = new cc.ProgressTimer;
    return b.initWithTexture(a) ? b: null
};
cc = cc = cc || {};
cc.GridBase = cc.Class.extend({
    _m_bActive: null,
    _m_nReuseGrid: null,
    _m_sGridSize: null,
    _m_pTexture: null,
    _m_obStep: new cc.Point,
    _m_pGrabber: null,
    _m_bIsTextureFlipped: null,
    isActive: function() {
        return this._m_bActive
    },
    setActive: function(a) {
        this._m_bActive = a;
        if (!a) {
            var a = cc.Director.sharedDirector(),
            b = a.getProjection();
            a.setProjection(b)
        }
    },
    getReuseGrid: function() {
        return this._m_nReuseGrid
    },
    setReuseGrid: function(a) {
        this._m_nReuseGrid = a
    },
    getGridSize: function() {
        return this._m_sGridSize
    },
    setGridSize: function(a) {
        this._m_sGridSize.x = parseInt(a.x);
        this._m_sGridSize.y = parseInt(a.y)
    },
    getStep: function() {
        return this._m_obStep
    },
    setStep: function(a) {
        this._m_obStep = a
    },
    isTextureFlipped: function() {
        return this._m_bIsTextureFlipped
    },
    setIsTextureFlipped: function(a) {
        this._m_bIsTextureFlipped != a && (this._m_bIsTextureFlipped = a, this.calculateVertexPoints())
    },
    initWithSize: function(a) {
        var b = cc.Director.sharedDirector().getWinSizeInPixels(),
        c = cc.NextPOT(b.width),
        d = cc.NextPOT(b.height),
        e = cc.kCCTexture2DPixelFormat_RGBA8888,
        f = new cc.Texture2D;
        f.initWithData(e, c, d, b);
        if (!f) return cc.LOG("cocos2d: CCGrid: error creating texture"),
        !1;
        b = !0;
        this._m_bActive = !1;
        this._m_nReuseGrid = 0;
        this._m_sGridSize = a;
        this._m_pTexture = f;
        this._m_bIsTextureFlipped = !1;
        a = this._m_pTexture.getContentSizeInPixels();
        this._m_obStep.x = a.width / this._m_sGridSize.x;
        this._m_obStep.y = a.height / this._m_sGridSize.y; (this._m_pGrabber = new cc.Grabber) ? this._m_pGrabber.grab(this._m_pTexture) : b = !1;
        this.calculateVertexPoints();
        return b
    },
    beforeDraw: function() {
        this.set2DProjection();
        this._m_pGrabber.beforeRender(this._m_pTexture)
    },
    afterDraw: function(a) {
        this._m_pGrabber.afterRender(this._m_pTexture);
        this.set3DProjection();
        this._applyLandscape();
        a.getCamera().getDirty() && (a.getAnchorPointInPixels(), a.getCamera().locate());
        cc.Director.sharedDirector().setProjection(cc.Director.sharedDirector().getProjection());
        cc.Director.sharedDirector().applyOrientation();
        this.blit()
    },
    blit: function() {
        cc.Assert(0, "")
    },
    reuse: function() {
        cc.Assert(0, "")
    },
    calculateVertexPoints: function() {
        cc.Assert(0, "")
    },
    set2DProjection: function() {
        cc.Director.sharedDirector().getWinSizeInPixels()
    },
    set3DProjection: function() {
        cc.Director.sharedDirector().getDisplaySizeInPixels()
    },
    _applyLandscape: function() {
        var a = cc.Director.sharedDirector();
        a.getDisplaySizeInPixels();
        a.getDeviceOrientation()
    }
});
cc.GridBase.gridWithSize = function() {
    return new cc.GridBase
};
cc.Grid3D = cc.GridBase.extend({
    _m_pTexCoordinates: null,
    _m_pVertices: null,
    _m_pOriginalVertices: null,
    _m_pIndices: null,
    vertex: function(a) {
        var a = 3 * (a.x * (this._m_sGridSize.y + 1) + a.y),
        b = this._m_pVertices;
        return new cc.Vertex3F(b[a], b[a + 1], b[a + 2])
    },
    originalVertex: function(a) {
        var a = 3 * (a.x * (this._m_sGridSize.y + 1) + a.y),
        b = this._m_pOriginalVertices;
        return new cc.Vertex3F(b[a], b[a + 1], b[a + 2])
    },
    setVertex: function(a, b) {
        var c = 3 * (a.x * (this._m_sGridSize.y + 1) + a.y),
        d = this._m_pVertices;
        d[c] = b.x;
        d[c + 1] = b.y;
        d[c + 2] = b.z
    },
    blit: function() {},
    reuse: function() {
        0 < this._m_nReuseGrid && --this._m_nReuseGrid
    },
    calculateVertexPoints: function() {
        var a = this._m_pTexture.getPixelsWide(),
        b = this._m_pTexture.getPixelsHigh(),
        c = this._m_pTexture.getContentSizeInPixels().height,
        d = this._m_sGridSize.x * this._m_sGridSize.y;
        this._m_pVertices = [];
        this._m_pOriginalVertices = [];
        this._m_pTexCoordinates = [];
        this._m_pIndices = [];
        var e = this._m_pVertices,
        f = this._m_pTexCoordinates,
        g = this._m_pIndices,
        h, i;
        for (h = 0; h < this._m_sGridSize.x; h++) for (i = 0; i < this._m_sGridSize.y; i++) {
            var j = h * this._m_obStep.x,
            l = j + this._m_obStep.x,
            k = i * this._m_obStep.y,
            o = k + this._m_obStep.y;
            e[h * i] = j;
            e[h * i + 1] = k;
            e[h * i + 2] = 0;
            e[h * i + 3] = l;
            e[h * i + 4] = k;
            e[h * i + 5] = 0;
            e[h * i + 6] = j;
            e[h * i + 7] = o;
            e[h * i + 8] = 0;
            e[h * i + 9] = l;
            e[h * i + 10] = o;
            e[h * i + 11] = 0;
            var n = k,
            m = o;
            this._m_bIsTextureFlipped && (n = c - k, m = c - o);
            f[h * i + 12] = j / a;
            f[h * i + 13] = n / b;
            f[h * i + 14] = l / a;
            f[h * i + 15] = n / b;
            f[h * i + 16] = j / a;
            f[h * i + 17] = m / b;
            f[h * i + 18] = l / a;
            f[h * i + 19] = m / b
        }
        for (h = 0; h < d; h++) g[6 * h + 0] = 4 * h + 0,
        g[6 * h + 1] = 4 * h + 1,
        g[6 * h + 2] = 4 * h + 2,
        g[6 * h + 3] = 4 * h + 1,
        g[6 * h + 4] = 4 * h + 2,
        g[6 * h + 5] = 4 * h + 3
    }
});
cc.Grid3D.gridWithSize = function() {};
cc.Grid3D.gridWithSize = function() {};
cc.TiledGrid3D = cc.GridBase.extend({
    _m_pTexCoordinates: null,
    _m_pVertices: null,
    _m_pOriginalVertices: null,
    _m_pIndices: null,
    tile: function() {
        return new cc.Quad3
    },
    originalTile: function(a) {
        var a = 12 * (this._m_sGridSize.y * a.x + a.y),
        b = this._m_pOriginalVertices;
        return new cc.Quad3(b[a], b[a + 1], b[a + 2], b[a + 3])
    },
    setTile: function(a, b) {
        this._m_pVertices[12 * (this._m_sGridSize.y * a.x + a.y)] = b
    },
    blit: function() {},
    reuse: function() {
        if (0 < this._m_nReuseGrid) {
            for (var a = 0,
            b = 12 * (this._m_sGridSize.x * this._m_sGridSize.y).length; a < b; a++) this._m_pOriginalVertices.push(this._m_pVertices[a]); --this._m_nReuseGrid
        }
    },
    calculateVertexPoints: function() {
        var a = this._m_pTexture.getPixelsWide(),
        b = this._m_pTexture.getPixelsHigh(),
        c = this._m_pTexture.getContentSizeInPixels().height,
        d = this._m_sGridSize.x * this._m_sGridSize.y;
        this._m_pVertices = [];
        this._m_pOriginalVertices = [];
        this._m_pTexCoordinates = [];
        this._m_pIndices = [];
        var e = this._m_pVertices,
        f = this._m_pTexCoordinates,
        g = this._m_pIndices,
        h, i;
        for (h = 0; h < this._m_sGridSize.x; h++) for (i = 0; i < this._m_sGridSize.y; i++) {
            var j = h * this._m_obStep.x,
            l = j + this._m_obStep.x,
            k = i * this._m_obStep.y,
            o = k + this._m_obStep.y;
            e[h * i] = j;
            e[h * i + 1] = k;
            e[h * i + 2] = 0;
            e[h * i + 3] = l;
            e[h * i + 4] = k;
            e[h * i + 5] = 0;
            e[h * i + 6] = j;
            e[h * i + 7] = o;
            e[h * i + 8] = 0;
            e[h * i + 9] = l;
            e[h * i + 10] = o;
            e[h * i + 11] = 0;
            var n = k,
            m = o;
            this._m_bIsTextureFlipped && (n = c - k, m = c - o);
            f[h * i + 12] = j / a;
            f[h * i + 13] = n / b;
            f[h * i + 14] = l / a;
            f[h * i + 15] = n / b;
            f[h * i + 16] = j / a;
            f[h * i + 17] = m / b;
            f[h * i + 18] = l / a;
            f[h * i + 19] = m / b
        }
        for (h = 0; h < d; h++) g[6 * h + 0] = 4 * h + 0,
        g[6 * h + 1] = 4 * h + 1,
        g[6 * h + 2] = 4 * h + 2,
        g[6 * h + 3] = 4 * h + 1,
        g[6 * h + 4] = 4 * h + 2,
        g[6 * h + 5] = 4 * h + 3;
        a = 0;
        for (d = 12 * d.length; a < d; a++) this._m_pOriginalVertices.push(this._m_pVertices[a])
    }
});
cc.TiledGrid3D.gridWithSize = function(a, b, c) {
    var d = new cc.TiledGrid3D;
    d.initWithSize(a, b, c);
    return d
};
cc = cc = cc || {};
cc.Grabber = cc.Class.extend({
    _m_fbo: 0,
    _m_oldFBO: 0,
    _m_eGlesVersion: null,
    ctor: function() {},
    grab: function() {},
    beforeRender: function() {},
    afterRender: function() {}
});
cc = cc = cc || {};
cc.kCCActionTagInvalid = -1;
cc.Action = cc.Class.extend({
    _m_pOriginalTarget: null,
    _m_pTarget: null,
    _m_nTag: cc.kCCActionTagInvalid,
    description: function() {
        return "<CCAction | Tag = " + this._m_nTag + ">"
    },
    copyWithZone: function() {
        return this.copy()
    },
    copy: function() {
        return cc.clone(this)
    },
    isDone: function() {
        return ! 0
    },
    startWithTarget: function(a) {
        this._m_pTarget = this._m_pOriginalTarget = a
    },
    stop: function() {
        this._m_pTarget = null
    },
    step: function() {
        cc.LOG("[Action step]. override me")
    },
    update: function() {
        cc.LOG("[Action update]. override me")
    },
    getTarget: function() {
        return this._m_pTarget
    },
    setTarget: function(a) {
        this._m_pTarget = a
    },
    getOriginalTarget: function() {
        return this._m_pOriginalTarget
    },
    setOriginalTarget: function(a) {
        this._m_pOriginalTarget = a
    },
    getTag: function() {
        return this._m_nTag
    },
    setTag: function(a) {
        this._m_nTag = a
    }
});
cc.Action.action = function() {
    return new cc.Action
};
cc.FiniteTimeAction = cc.Action.extend({
    _m_fDuration: 0,
    getDuration: function() {
        return this._m_fDuration
    },
    setDuration: function(a) {
        this._m_fDuration = a
    },
    reverse: function() {
        cc.LOG("cocos2d: FiniteTimeAction#reverse: Implement me");
        return null
    }
});
cc.Speed = cc.Action.extend({
    _m_fSpeed: 0,
    _m_pInnerAction: null,
    getSpeed: function() {
        return this._m_fSpeed
    },
    setSpeed: function(a) {
        this._m_fSpeed = a
    },
    initWithAction: function(a, b) {
        cc.Assert(null != a, "");
        this._m_pInnerAction = a;
        this._m_fSpeed = b;
        return ! 0
    },
    startWithTarget: function(a) {
        this._super(a);
        this._m_pInnerAction.startWithTarget(a)
    },
    stop: function() {
        this._m_pInnerAction.stop();
        cc.Action.stop()
    },
    step: function(a) {
        this._m_pInnerAction.step(a * this._m_fSpeed)
    },
    isDone: function() {
        return this._m_pInnerAction.isDone()
    },
    reverse: function() {
        return cc.Speed.actionWithAction(this._m_pInnerAction.reverse(), this._m_fSpeed)
    },
    setInnerAction: function(a) {
        this._m_pInnerAction != a && (this._m_pInnerAction = a)
    },
    getInnerAction: function() {
        return this._m_pInnerAction
    }
});
cc.Speed.actionWithAction = function(a, b) {
    var c = new cc.Speed;
    return c && c.initWithAction(a, b) ? c: null
};
cc.Follow = cc.Action.extend({
    isBoundarySet: function() {
        return this._m_bBoundarySet
    },
    setBoudarySet: function(a) {
        this._m_bBoundarySet = a
    },
    initWithTarget: function(a, b) {
        cc.Assert(null != a, "");
        this._m_pobFollowedNode = a;
        this._m_bBoundaryFullyCovered = this._m_bBoundarySet = !1;
        var c = cc.Director.sharedDirector().getWinSize();
        this._m_obFullScreenSize = cc.PointMake(c.width, c.height);
        this._m_obHalfScreenSize = cc.ccpMult(this._m_obFullScreenSize, 0.5);
        if (b && (this.m_fLeftBoundary = -(b.origin.x + b.size.width - this._m_obFullScreenSize.x),
            this.m_fRightBoundary = -b.origin.x,
            this.m_fTopBoundary = -b.origin.y,
            this.m_fBottomBoundary = -(b.origin.y + b.size.height - this._m_obFullScreenSize.y),
            this.m_fRightBoundary < this.m_fLeftBoundary && (this.m_fRightBoundary = this.m_fLeftBoundary = (this.m_fLeftBoundary + this.m_fRightBoundary) / 2),
            this.m_fTopBoundary < this.m_fBottomBoundary && (this.m_fTopBoundary = this.m_fBottomBoundary = (this.m_fTopBoundary + this.m_fBottomBoundary) / 2),
            this.m_fTopBoundary == this.m_fBottomBoundary && this.m_fLeftBoundary == this.m_fRightBoundary))
            this._m_bBoundaryFullyCovered = !0;
        return ! 0
    },
    step: function() {
        if (this._m_bBoundarySet) {
            if (!this._m_bBoundaryFullyCovered) {
                var a = cc.ccpSub(this._m_obHalfScreenSize, this._m_pobFollowedNode.getPosition());
                this._m_pTarget.setPosition(cc.ccp(cc.clampf(a.x, this.m_fLeftBoundary, this.m_fRightBoundary), cc.clampf(a.y, this.m_fBottomBoundary, this.m_fTopBoundary)))
            }
        } else this._m_pTarget.setPosition(cc.ccpSub(this._m_obHalfScreenSize, this._m_pobFollowedNode.getPosition()))
    },
    isDone: function() {
        return ! this._m_pobFollowedNode.getIsRunning()
    },
    stop: function() {
        this._m_pTarget = null;
        cc.Action.stop()
    },
    _m_pobFollowedNode: null,
    _m_bBoundarySet: !1,
    _m_bBoundaryFullyCovered: !1,
    _m_obHalfScreenSize: null,
    _m_obFullScreenSize: null,
    m_fLeftBoundary: 0,
    m_fRightBoundary: 0,
    m_fTopBoundary: 0,
    m_fBottomBoundary: 0
});
cc.Follow.actionWithTarget = function(a, b) {
    var c = new cc.Follow;
    return null != b && c && c.initWithTarget(a, b) || c && c.initWithTarget(a) ? c: null
};
cc = cc = cc || {};
cc.ActionInterval = cc.FiniteTimeAction.extend({
    _m_elapsed: 0,
    _m_bFirstTick: !1,
    getElapsed: function() {
        return this._m_elapsed
    },
    initWithDuration: function(a) {
        this._m_fDuration = 0 == a ? cc.FLT_EPSILON: a;
        this._m_elapsed = 0;
        return this._m_bFirstTick = !0
    },
    isDone: function() {
        return this._m_elapsed >= this._m_fDuration
    },
    step: function(a) {
        this._m_bFirstTick ? (this._m_bFirstTick = !1, this._m_elapsed = 0) : this._m_elapsed += a;
        this.update(1 > this._m_elapsed / this._m_fDuration ? this._m_elapsed / this._m_fDuration: 1)
    },
    startWithTarget: function(a) {
        this._super(a);
        this._m_elapsed = 0;
        this._m_bFirstTick = !0
    },
    reverse: function() {
        return null
    },
    setAmplitudeRate: function() {
        cc.Assert(0, "Actioninterval setAmplitudeRate")
    },
    getAmplitudeRate: function() {
        cc.Assert(0, "Actioninterval getAmplitudeRate");
        return 0
    }
});
cc.ActionInterval.actionWithDuration = function(a) {
    var b = new cc.ActionInterval;
    b.initWithDuration(a);
    return b
};
cc.Sequence = cc.ActionInterval.extend({
    _m_pActions: null,
    _m_split: null,
    _m_last: 0,
    ctor: function() {
        this._m_pActions = []
    },
    initOneTwo: function(a, b) {
        cc.Assert(null != a, "Sequence.initOneTwo");
        cc.Assert(null != b, "Sequence.initOneTwo");
        var c = a.getDuration(),
        d = b.getDuration();
        if (isNaN(c) || isNaN(d)) console.log(a),
        console.log(b);
        this.initWithDuration(a.getDuration() + b.getDuration());
        this._m_pActions[0] = a;
        this._m_pActions[1] = b;
        return ! 0
    },
    startWithTarget: function(a) {
        this._super(a);
        this._m_split = this._m_pActions[0].getDuration() / this._m_fDuration;
        this._m_last = -1
    },
    stop: function() {
        this._m_pActions[0].stop();
        this._m_pActions[1].stop();
        this._super()
    },
    update: function(a) {
        var b = 0,
        c = 0;
        a >= this._m_split ? (b = 1, c = 1 == this._m_split ? 1 : (a - this._m_split) / (1 - this._m_split)) : (b = 0, c = 0 != this._m_split ? a / this._m_split: 1); - 1 == this._m_last && 1 == b && (this._m_pActions[0].startWithTarget(this._m_pTarget), this._m_pActions[0].update(1), this._m_pActions[0].stop());
        this._m_last != b && ( - 1 != this._m_last && (this._m_pActions[this._m_last].update(1), this._m_pActions[this._m_last].stop()), this._m_pActions[b].startWithTarget(this._m_pTarget));
        this._m_pActions[b].update(c);
        this._m_last = b
    },
    reverse: function() {
        return cc.Sequence.actionOneTwo(this._m_pActions[1].reverse(), this._m_pActions[0].reverse())
    }
});
cc.Sequence.actions = function() {
    for (var a = arguments[0], b = 1; b < arguments.length; b++) null != arguments[b] && (a = cc.Sequence.actionOneTwo(a, arguments[b]));
    return a
};
cc.Sequence.actionsWithArray = function() {
    for (var a = this.actions[0], b = 1; b < this.actions.length; ++b) a = this.actionOneTwo(a, this.actions[b]);
    return a
};
cc.Sequence.actionOneTwo = function(a, b) {
    var c = new cc.Sequence;
    c.initOneTwo(a, b);
    return c
};
cc.Repeat = cc.ActionInterval.extend({
    _m_uTimes: 0,
    _m_uTotal: 0,
    _m_pInnerAction: null,
    initWithAction: function(a, b) {
        return this.initWithDuration(a.getDuration() * b) ? (this._m_uTimes = b, this._m_pInnerAction = a, this._m_uTotal = 0, !0) : !1
    },
    startWithTarget: function(a) {
        this._m_uTotal = 0;
        this._super(a);
        this._m_pInnerAction.startWithTarget(a)
    },
    stop: function() {
        this._m_pInnerAction.stop();
        this._super()
    },
    update: function(a) {
        var b = a * this._m_uTimes;
        b > this._m_uTotal + 1 ? (this._m_pInnerAction.update(1), this._m_uTotal++, this._m_pInnerAction.stop(), this._m_pInnerAction.startWithTarget(this._m_pTarget), this._m_uTotal == this._m_uTimes ? this._m_pInnerAction.update(0) : this._m_pInnerAction.update(b - this._m_uTotal)) : (b %= 1, 1 == a && (b = 1, this._m_uTotal++), this._m_pInnerAction.update(1 < b ? 1 : b))
    },
    isDone: function() {
        return this._m_uTotal == this._m_uTimes
    },
    reverse: function() {
        return cc.Repeat.actionWithAction(this._m_pInnerAction.reverse(), this._m_uTimes)
    },
    setInnerAction: function(a) {
        this._m_pInnerAction != a && (this._m_pInnerAction = a)
    },
    getInnerAction: function() {
        return this._m_pInnerAction
    }
});
cc.Repeat.actionWithAction = function(a, b) {
    var c = new cc.Repeat;
    c.initWithAction(a, b);
    return c
};
cc.RepeatForever = cc.ActionInterval.extend({
    _m_pInnerAction: null,
    initWithAction: function(a) {
        cc.Assert(null != a, "");
        this._m_pInnerAction = a;
        return ! 0
    },
    startWithTarget: function(a) {
        this._super(a);
        this._m_pInnerAction.startWithTarget(a)
    },
    step: function(a) {
        this._m_pInnerAction.step(a);
        this._m_pInnerAction.isDone() && (a = a + this._m_pInnerAction.getDuration() - this._m_pInnerAction.getElapsed(), this._m_pInnerAction.startWithTarget(this._m_pTarget), this._m_pInnerAction.step(a))
    },
    isDone: function() {
        return ! 1
    },
    reverse: function() {
        return cc.RepeatForever.actionWithAction(this._m_pInnerAction.reverse())
    },
    setInnerAction: function(a) {
        this._m_pInnerAction != a && (this._m_pInnerAction = a)
    },
    getInnerAction: function() {
        return this._m_pInnerAction
    }
});
cc.RepeatForever.actionWithAction = function(a) {
    var b = new cc.RepeatForever;
    return b && b.initWithAction(a) ? b: null
};
cc.Spawn = cc.ActionInterval.extend({
    initOneTwo: function(a, b) {
        cc.Assert(null != a, "no action1");
        cc.Assert(null != b, "no action2");
        var c = !1,
        d = a.getDuration(),
        e = b.getDuration();
        this.initWithDuration(Math.max(d, e)) && (this._m_pOne = a, this._m_pTwo = b, d > e ? this._m_pTwo = cc.Sequence.actionOneTwo(b, cc.DelayTime.actionWithDuration(d - e)) : d < e && (this._m_pOne = cc.Sequence.actionOneTwo(a, cc.DelayTime.actionWithDuration(e - d))), c = !0);
        return c
    },
    startWithTarget: function(a) {
        this._super(a);
        this._m_pOne.startWithTarget(a);
        this._m_pTwo.startWithTarget(a)
    },
    stop: function() {
        this._m_pOne.stop();
        this._m_pTwo.stop();
        this._super()
    },
    update: function(a) {
        this._m_pOne && this._m_pOne.update(a);
        this._m_pTwo && this._m_pTwo.update(a)
    },
    reverse: function() {
        return cc.Spawn.actionOneTwo(this._m_pOne.reverse(), this._m_pTwo.reverse())
    },
    _m_pOne: null,
    _m_pTwo: null
});
cc.Spawn.actions = function() {
    for (var a = arguments[0], b = 1; b < arguments.length; b++) null != arguments[b] && (a = this.actionOneTwo(a, arguments[b]));
    return a
};
cc.Spawn.actionsWithArray = function(a) {
    for (var b = a[0], c = 1; c < a.length; ++c) b = this.actionOneTwo(b, a[c]);
    return b
};
cc.Spawn.actionOneTwo = function(a, b) {
    var c = new cc.Spawn;
    c.initOneTwo(a, b);
    return c
};
cc.RotateTo = cc.ActionInterval.extend({
    _m_fDstAngle: 0,
    _m_fStartAngle: 0,
    _m_fDiffAngle: 0,
    initWithDuration: function(a, b) {
        return this._super(a) ? (this._m_fDstAngle = b, !0) : !1
    },
    startWithTarget: function(a) {
        this._super(a);
        this._m_fStartAngle = a.getRotation();
        this._m_fStartAngle %= 360;
        this._m_fDiffAngle = this._m_fDstAngle - this._m_fStartAngle;
        180 < this._m_fDiffAngle && (this._m_fDiffAngle -= 360); - 180 > this._m_fDiffAngle && (this._m_fDiffAngle += 360)
    },
    reverse: function() {
        cc.Assert(0, "RotateTo reverse not implemented")
    },
    update: function(a) {
        this._m_pTarget && this._m_pTarget.setRotation(this._m_fStartAngle + this._m_fDiffAngle * a)
    }
});
cc.RotateTo.actionWithDuration = function(a, b) {
    var c = new cc.RotateTo;
    c.initWithDuration(a, b);
    return c
};
cc.RotateBy = cc.ActionInterval.extend({
    _m_fAngle: 0,
    _m_fStartAngle: 0,
    initWithDuration: function(a, b) {
        return this._super(a) ? (this._m_fAngle = b, !0) : !1
    },
    startWithTarget: function(a) {
        this._super(a);
        this._m_fStartAngle = a.getRotation()
    },
    update: function(a) {
        this._m_pTarget && this._m_pTarget.setRotation(this._m_fStartAngle + this._m_fAngle * a)
    },
    reverse: function() {
        return cc.RotateBy.actionWithDuration(this._m_fDuration, -this._m_fAngle)
    }
});
cc.RotateBy.actionWithDuration = function(a, b) {
    var c = new cc.RotateBy;
    c.initWithDuration(a, b);
    return c
};
cc.MoveTo = cc.ActionInterval.extend({
    initWithDuration: function(a, b) {
        return this._super(a) ? (this._m_endPosition = b, !0) : !1
    },
    startWithTarget: function(a) {
        this._super(a);
        this._m_startPosition = a.getPosition();
        this._m_delta = cc.ccpSub(this._m_endPosition, this._m_startPosition)
    },
    update: function(a) {
        this._m_pTarget && this._m_pTarget.setPosition(cc.ccp(this._m_startPosition.x + this._m_delta.x * a, this._m_startPosition.y + this._m_delta.y * a))
    },
    reverse: function() {
        cc.Assert(0, "moveto implement reverse")
    },
    _m_endPosition: new cc.Point,
    _m_startPosition: new cc.Point,
    _m_delta: new cc.Point
});
cc.MoveTo.actionWithDuration = function(a, b) {
    var c = new cc.MoveTo;
    c.initWithDuration(a, b);
    return c
};
cc.MoveBy = cc.MoveTo.extend({
    initWithDuration: function(a, b) {
        return this._super(a, b) ? (this._m_delta = b, !0) : !1
    },
    startWithTarget: function(a) {
        var b = this._m_delta;
        this._super(a);
        this._m_delta = b
    },
    reverse: function() {
        return cc.MoveBy.actionWithDuration(this._m_fDuration, cc.ccp( - this._m_delta.x, -this._m_delta.y))
    }
});
cc.MoveBy.actionWithDuration = function(a, b) {
    var c = new cc.MoveBy;
    c.initWithDuration(a, b);
    return c
};
cc.SkewTo = cc.ActionInterval.extend({
    initWithDuration: function(a, b, c) {
        var d = !1;
        this._super(a) && (this._m_fEndSkewX = b, this._m_fEndSkewY = c, d = !0);
        return d
    },
    startWithTarget: function(a) {
        this._super(a);
        this._m_fStartSkewX = a.getSkewX();
        this._m_fStartSkewX = 0 < this._m_fStartSkewX ? this._m_fStartSkewX % 180 : this._m_fStartSkewX % -180;
        this._m_fDeltaX = this._m_fEndSkewX - this._m_fStartSkewX;
        180 < this._m_fDeltaX && (this._m_fDeltaX -= 360); - 180 > this._m_fDeltaX && (this._m_fDeltaX += 360);
        this._m_fStartSkewY = a.getSkewY();
        this._m_fStartSkewY = 0 < this._m_fStartSkewY ? this._m_fStartSkewY % 360 : this._m_fStartSkewY % -360;
        this._m_fDeltaY = this._m_fEndSkewY - this._m_fStartSkewY;
        180 < this._m_fDeltaY && (this._m_fDeltaY -= 360); - 180 > this._m_fDeltaY && (this._m_fDeltaY += 360)
    },
    update: function(a) {
        this._m_pTarget.setSkewX(this._m_fStartSkewX + this._m_fDeltaX * a);
        this._m_pTarget.setSkewY(this._m_fStartSkewY + this._m_fDeltaY * a)
    },
    _m_fSkewX: 0,
    _m_fSkewY: 0,
    _m_fStartSkewX: 0,
    _m_fStartSkewY: 0,
    _m_fEndSkewX: 0,
    _m_fEndSkewY: 0,
    _m_fDeltaX: 0,
    _m_fDeltaY: 0
});
cc.SkewTo.actionWithDuration = function(a, b, c) {
    var d = new cc.SkewTo;
    d && d.initWithDuration(a, b, c);
    return d
};
cc.SkewBy = cc.SkewTo.extend({
    initWithDuration: function(a, b, c) {
        var d = !1;
        this._super(a, b, c) && (this._m_fSkewX = b, this._m_fSkewY = c, d = !0);
        return d
    },
    startWithTarget: function(a) {
        this._super(a);
        this._m_fDeltaX = this._m_fSkewX;
        this._m_fDeltaY = this._m_fSkewY;
        this._m_fEndSkewX = this._m_fStartSkewX + this._m_fDeltaX;
        this._m_fEndSkewY = this._m_fStartSkewY + this._m_fDeltaY
    },
    reverse: function() {
        return cc.SkewBy.actionWithDuration(this._m_fDuration, -this._m_fSkewX, -this._m_fSkewY)
    }
});
cc.SkewBy.actionWithDuration = function(a, b, c) {
    var d = new cc.SkewBy;
    d && d.initWithDuration(a, b, c);
    return d
};
cc.JumpBy = cc.ActionInterval.extend({
    initWithDuration: function(a, b, c, d) {
        return this._super(a) ? (this._m_delta = b, this._m_height = c, this._m_nJumps = d, !0) : !1
    },
    startWithTarget: function(a) {
        this._super(a);
        this._m_startPosition = a.getPosition()
    },
    update: function(a) {
        if (this._m_pTarget) {
            var b = a * this._m_nJumps % 1,
            b = 4 * this._m_height * b * (1 - b),
            b = b + this._m_delta.y * a;
            this._m_pTarget.setPosition(cc.ccp(this._m_startPosition.x + this._m_delta.x * a, this._m_startPosition.y + b))
        }
    },
    reverse: function() {
        return cc.JumpBy.actionWithDuration(this._m_fDuration, cc.ccp( - this._m_delta.x, -this._m_delta.y), this._m_height, this._m_nJumps)
    },
    _m_startPosition: new cc.Point,
    _m_delta: new cc.Point,
    _m_height: 0,
    _m_nJumps: 0
});
cc.JumpBy.actionWithDuration = function(a, b, c, d) {
    var e = new cc.JumpBy;
    e.initWithDuration(a, b, c, d);
    return e
};
cc.JumpTo = cc.JumpBy.extend({
    startWithTarget: function(a) {
        this._super(a);
        this._m_delta = cc.ccp(this._m_delta.x - this._m_startPosition.x, this._m_delta.y - this._m_startPosition.y)
    }
});
cc.JumpTo.actionWithDuration = function(a, b, c, d) {
    var e = new cc.JumpTo;
    e.initWithDuration(a, b, c, d);
    return e
};
cc.BezierConfig = cc.Class.extend({
    ctor: function() {
        this.endPosition = new cc.Point;
        this.controlPoint_1 = new cc.Point;
        this.controlPoint_2 = new cc.Point
    }
});
cc.bezierat = function(a, b, c, d, e) {
    return Math.pow(1 - e, 3) * a + 3 * e * Math.pow(1 - e, 2) * b + 3 * Math.pow(e, 2) * (1 - e) * c + Math.pow(e, 3) * d
};
cc.BezierBy = cc.ActionInterval.extend({
    initWithDuration: function(a, b) {
        return this._super(a) ? (this._m_sConfig = b, !0) : !1
    },
    startWithTarget: function(a) {
        this._super(a);
        this._m_startPosition = a.getPosition()
    },
    update: function(a) {
        if (this._m_pTarget) {
            var b = this._m_sConfig.controlPoint_1.y,
            c = this._m_sConfig.controlPoint_2.y,
            d = this._m_sConfig.endPosition.y,
            e = cc.bezierat(0, this._m_sConfig.controlPoint_1.x, this._m_sConfig.controlPoint_2.x, this._m_sConfig.endPosition.x, a),
            a = cc.bezierat(0, b, c, d, a);
            this._m_pTarget.setPosition(cc.ccpAdd(this._m_startPosition, cc.ccp(e, a)))
        }
    },
    reverse: function() {
        var a = new cc.BezierConfig;
        a.endPosition = cc.ccpNeg(this._m_sConfig.endPosition);
        a.controlPoint_1 = cc.ccpAdd(this._m_sConfig.controlPoint_2, cc.ccpNeg(this._m_sConfig.endPosition));
        a.controlPoint_2 = cc.ccpAdd(this._m_sConfig.controlPoint_1, cc.ccpNeg(this._m_sConfig.endPosition));
        return cc.BezierBy.actionWithDuration(this._m_fDuration, a)
    },
    ctor: function() {
        this._m_sConfig = new cc.BezierConfig;
        this._m_startPosition = new cc.Point
    }
});
cc.BezierBy.actionWithDuration = function(a, b) {
    var c = new cc.BezierBy;
    c.initWithDuration(a, b);
    return c
};
cc.BezierTo = cc.BezierBy.extend({
    startWithTarget: function(a) {
        this._super(a);
        this._m_sConfig.controlPoint_1 = cc.ccpSub(this._m_sConfig.controlPoint_1, this._m_startPosition);
        this._m_sConfig.controlPoint_2 = cc.ccpSub(this._m_sConfig.controlPoint_2, this._m_startPosition);
        this._m_sConfig.endPosition = cc.ccpSub(this._m_sConfig.endPosition, this._m_startPosition)
    }
});
cc.BezierTo.actionWithDuration = function(a, b) {
    var c = new cc.BezierTo;
    c.initWithDuration(a, b);
    return c
};
cc.ScaleTo = cc.ActionInterval.extend({
    initWithDuration: function(a, b, c) {
        return this._super(a) ? (this._m_fEndScaleX = b, this._m_fEndScaleY = null != c ? c: b, !0) : !1
    },
    startWithTarget: function(a) {
        this._super(a);
        this._m_fStartScaleX = a.getScaleX();
        this._m_fStartScaleY = a.getScaleY();
        this._m_fDeltaX = this._m_fEndScaleX - this._m_fStartScaleX;
        this._m_fDeltaY = this._m_fEndScaleY - this._m_fStartScaleY
    },
    update: function(a) {
        this._m_pTarget && (this._m_pTarget.setScaleX(this._m_fStartScaleX + this._m_fDeltaX * a), this._m_pTarget.setScaleY(this._m_fStartScaleY + this._m_fDeltaY * a))
    },
    _m_fScaleX: 1,
    _m_fScaleY: 1,
    _m_fStartScaleX: 1,
    _m_fStartScaleY: 1,
    _m_fEndScaleX: 0,
    _m_fEndScaleY: 0,
    _m_fDeltaX: 0,
    _m_fDeltaY: 0
});
cc.ScaleTo.actionWithDuration = function(a, b, c) {
    var d = new cc.ScaleTo;
    c ? d.initWithDuration(a, b, c) : d.initWithDuration(a, b);
    return d
};
cc.ScaleBy = cc.ScaleTo.extend({
    startWithTarget: function(a) {
        this._super(a);
        this._m_fDeltaX = this._m_fStartScaleX * this._m_fEndScaleX - this._m_fStartScaleX;
        this._m_fDeltaY = this._m_fStartScaleY * this._m_fEndScaleY - this._m_fStartScaleY
    },
    reverse: function() {
        return cc.ScaleBy.actionWithDuration(this._m_fDuration, 1 / this._m_fEndScaleX, 1 / this._m_fEndScaleY)
    }
});
cc.ScaleBy.actionWithDuration = function(a, b, c) {
    var d = new cc.ScaleBy;
    3 == arguments.length ? d.initWithDuration(a, b, c) : d.initWithDuration(a, b);
    return d
};
cc.Blink = cc.ActionInterval.extend({
    initWithDuration: function(a, b) {
        return this._super(a) ? (this._m_nTimes = b, !0) : !1
    },
    update: function(a) {
        if (this._m_pTarget && !this.isDone()) {
            var b = 1 / this._m_nTimes;
            this._m_pTarget.setIsVisible(a % b > b / 2 ? !0 : !1)
        }
    },
    reverse: function() {
        return cc.Blink.actionWithDuration(this._m_fDuration, this._m_nTimes)
    },
    _m_nTimes: 0
});
cc.Blink.actionWithDuration = function(a, b) {
    var c = new cc.Blink;
    c.initWithDuration(a, b);
    return c
};
cc.FadeIn = cc.ActionInterval.extend({
    update: function(a) {
        this._m_pTarget.setOpacity(255 * a)
    },
    reverse: function() {
        return cc.FadeOut.actionWithDuration(this._m_fDuration)
    }
});
cc.FadeIn.actionWithDuration = function(a) {
    var b = new cc.FadeIn;
    b.initWithDuration(a);
    return b
};
cc.FadeOut = cc.ActionInterval.extend({
    update: function(a) {
        this._m_pTarget.setOpacity(255 * (1 - a))
    },
    reverse: function() {
        return cc.FadeIn.actionWithDuration(this._m_fDuration)
    }
});
cc.FadeOut.actionWithDuration = function(a) {
    var b = new cc.FadeOut;
    b.initWithDuration(a);
    return b
};
cc.FadeTo = cc.ActionInterval.extend({
    initWithDuration: function(a, b) {
        return this._super(a) ? (this._m_toOpacity = b, !0) : !1
    },
    update: function(a) {
        this._m_pTarget.setOpacity(this._m_fromOpacity + (this._m_toOpacity - this._m_fromOpacity) * a)
    },
    startWithTarget: function(a) {
        this._super(a);
        this._m_fromOpacity = a.getOpacity()
    },
    _m_toOpacity: "",
    _m_fromOpacity: ""
});
cc.FadeTo.actionWithDuration = function(a, b) {
    var c = new cc.FadeTo;
    c.initWithDuration(a, b);
    return c
};
cc.TintTo = cc.ActionInterval.extend({
    initWithDuration: function(a, b, c, d) {
        return this._super(a) ? (this._m_to = cc.ccc3(b, c, d), !0) : !1
    },
    startWithTarget: function(a) {
        this._super(a);
        this._m_from = this._m_pTarget.getColor()
    },
    update: function(a) {
        this._m_pTarget.setColor(cc.ccc3(this._m_from.r + (this._m_to.r - this._m_from.r) * a, this._m_from.g + (this._m_to.g - this._m_from.g) * a, this._m_from.b + (this._m_to.b - this._m_from.b) * a))
    },
    _m_to: new cc.Color3B,
    _m_from: new cc.Color3B
});
cc.TintTo.actionWithDuration = function(a, b, c, d) {
    var e = new cc.TintTo;
    e.initWithDuration(a, b, c, d);
    return e
};
cc.TintBy = cc.ActionInterval.extend({
    initWithDuration: function(a, b, c, d) {
        return this._super(a) ? (this._m_deltaR = b, this._m_deltaG = c, this._m_deltaB = d, !0) : !1
    },
    startWithTarget: function(a) {
        this._super(a);
        a = a.getColor();
        this._m_fromR = a.r;
        this._m_fromG = a.g;
        this._m_fromB = a.b
    },
    update: function(a) {
        this._m_pTarget.setColor(cc.ccc3(this._m_fromR + this._m_deltaR * a, this._m_fromG + this._m_deltaG * a, this._m_fromB + this._m_deltaB * a))
    },
    reverse: function() {
        return cc.TintBy.actionWithDuration(this._m_fDuration, -this._m_deltaR, -this._m_deltaG, -this._m_deltaB)
    },
    _m_deltaR: 0,
    _m_deltaG: 0,
    _m_deltaB: 0,
    _m_fromR: 0,
    _m_fromG: 0,
    _m_fromB: 0
});
cc.TintBy.actionWithDuration = function(a, b, c, d) {
    var e = new cc.TintBy;
    e.initWithDuration(a, b, c, d);
    return e
};
cc.DelayTime = cc.ActionInterval.extend({
    update: function() {},
    reverse: function() {
        return cc.DelayTime.actionWithDuration(this._m_fDuration)
    }
});
cc.DelayTime.actionWithDuration = function(a) {
    var b = new cc.DelayTime;
    b.initWithDuration(a);
    return b
};
cc.ReverseTime = cc.ActionInterval.extend({
    initWithAction: function(a) {
        cc.Assert(null != a, "");
        cc.Assert(a != this._m_pOther, "");
        return this._super(a.getDuration()) ? (this._m_pOther = a, !0) : !1
    },
    startWithTarget: function(a) {
        this._super(a);
        this._m_pOther.startWithTarget(a)
    },
    update: function(a) {
        this._m_pOther && this._m_pOther.update(1 - a)
    },
    reverse: function() {
        return this._m_pOther.copy()
    },
    stop: function() {
        this._m_pOther.stop();
        this._super()
    },
    _m_pOther: null
});
cc.ReverseTime.actionsWithAction = function(a) {
    var b = new cc.ReverseTime;
    b.initWithAction(a);
    return b
};
cc.Animate = cc.ActionInterval.extend({
    _m_pAnimation: null,
    _m_pOrigFrame: null,
    _m_bRestoreOriginalFrame: !1,
    getAnimation: function() {
        return this._m_pAnimation
    },
    setAnimation: function(a) {
        this._m_pAnimation = a
    },
    initWithAnimation: function(a, b) {
        cc.Assert(null != a, "");
        return this.initWithDuration(a.getFrames().length * a.getDelay(), null, null, !0) ? (this._m_bRestoreOriginalFrame = b, this._m_pAnimation = a, this._m_pOrigFrame = null, !0) : !1
    },
    initWithDuration: function(a, b, c, d) {
        if (d) return this._super(a);
        cc.Assert(null != b, "");
        return this._super(a) ? (this._m_bRestoreOriginalFrame = c, this._m_pAnimation = b, this._m_pOrigFrame = null, !0) : !1
    },
    startWithTarget: function(a) {
        this._super(a);
        this._m_bRestoreOriginalFrame && (this._m_pOrigFrame = a.displayedFrame())
    },
    update: function(a) {
        var b = this._m_pAnimation.getFrames(),
        c = b.length,
        a = Math.round(a * c);
        a >= c && (a = c - 1);
        c = this._m_pTarget;
        c.isFrameDisplayed(b[a]) || c.setDisplayFrame(b[a])
    },
    reverse: function() {
        var a = cc.Animation.animationWithFrames(this._m_pAnimation.getFrames().reverse(), this._m_pAnimation.getDelay());
        return cc.Animate.actionWithDuration(this._m_fDuration, a, this._m_bRestoreOriginalFrame)
    },
    stop: function() {
        this._m_bRestoreOriginalFrame && this._m_pTarget && this._m_pTarget.setDisplayFrame(this._m_pOrigFrame);
        this._super()
    }
});
cc.Animate.actionWithAnimation = function(a, b) {
    var c = new cc.Animate;
    c.initWithAnimation(a, b ? b: !0);
    return c
};
cc.Animate.actionWithDuration = function(a, b, c) {
    var d = new cc.Animate;
    d.initWithDuration(a, b, c);
    return d
};
cc = cc = cc || {};
cc.ActionInstant = cc.FiniteTimeAction.extend({
    isDone: function() {
        return ! 0
    },
    step: function(a) {
        cc.UNUSED_PARAM(a);
        this.update(1)
    },
    update: function() {}
});
cc.Show = cc.ActionInstant.extend({
    startWithTarget: function(a) {
        this._super(a);
        a.setIsVisible(!0)
    },
    reverse: function() {
        return cc.Hide.action.call(this)
    }
});
cc.Show.action = function() {
    return new cc.Show
};
cc.Hide = cc.ActionInstant.extend({
    startWithTarget: function(a) {
        this._super(a);
        a.setIsVisible(!1)
    },
    reverse: function() {
        return cc.Show.action.call(this)
    }
});
cc.Hide.action = function() {
    return new cc.Hide
};
cc.ToggleVisibility = cc.ActionInstant.extend({
    startWithTarget: function(a) {
        this._super();
        a.setIsVisible(!a.getIsVisible())
    },
    reverse: function() {
        return new cc.ToggleVisibility
    }
});
cc.ActionInstant.action = function() {
    return new cc.ToggleVisibility
};
cc.FlipX = cc.ActionInstant.extend({
    initWithFlipX: function(a) {
        this._m_bFlipX = a;
        return ! 0
    },
    startWithTarget: function(a) {
        this._super();
        a.setFlipX(this._m_bFlipX)
    },
    reverse: function() {
        return this.actionWithFlipX(!this._m_bFlipX)
    },
    _m_bFlipX: !1
});
cc.FlipX.actionWithFlipX = function(a) {
    var b = new cc.FlipX;
    if (b.initWithFlipX(a)) return b
};
cc.FlipY = cc.ActionInstant.extend({
    initWithFlipY: function(a) {
        this._m_bFlipY = a;
        return ! 0
    },
    startWithTarget: function(a) {
        this._super();
        a.setFlipY(this._m_bFlipY)
    },
    reverse: function() {
        return this.actionWithFlipY(!this._m_bFlipY)
    },
    _m_bFlipY: !1
});
cc.FlipY.actionWithFlipY = function(a) {
    var b = new cc.FlipY;
    if (b.initWithFlipY(a)) return b
};
cc.Place = cc.ActionInstant.extend({
    initWithPosition: function(a) {
        this._m_tPosition = a;
        return ! 0
    },
    startWithTarget: function(a) {
        this._super(a);
        this._m_pTarget.setPosition(this._m_tPosition)
    }
});
cc.Place.actionWithPosition = function(a) {
    var b = new cc.Place;
    b.initWithPosition(a);
    return b
};
cc.CallFunc = cc.ActionInstant.extend({
    initWithTarget: function(a, b, c) {
        this._m_pData = c || null;
        this._m_pCallFunc = b || null;
        this._m_pSelectorTarget = a || null;
        return ! 0
    },
    execute: function() {
        null != this._m_pCallFunc && this._m_pCallFunc.call(this._m_pSelectorTarget, this._m_pTarget, this._m_pData)
    },
    startWithTarget: function(a) {
        this._super(a);
        this.execute()
    },
    getTargetCallback: function() {
        return this._m_pSelectorTarget
    },
    setTargetCallback: function(a) {
        a != this._m_pSelectorTarget && (this._m_pSelectorTarget && (this._m_pSelectorTarget = null), this._m_pSelectorTarget = a)
    },
    _m_pSelectorTarget: null,
    _m_pCallFunc: null
});
cc.CallFunc.actionWithTarget = function(a, b, c) {
    var d = new cc.CallFunc;
    return d && d.initWithTarget(a, b, c) ? (d._m_pCallFunc = b, d) : null
};
cc = cc = cc || {};
cc.tHashElement = cc.Class.extend({
    actions: null,
    target: null,
    actionIndex: 0,
    currentAction: null,
    currentActionSalvaged: !1,
    paused: !1,
    hh: null,
    ctor: function() {
        this.actions = []
    }
});
cc.ActionManager = cc.Class.extend({
    _m_pTargets: null,
    _m_pCurrentTarget: null,
    _m_bCurrentTargetSalvaged: !1,
    _searchElementByTarget: function(a, b) {
        for (var c = 0; c < a.length; c++) if (b == a[c].target) return a[c];
        return null
    },
    ctor: function() {
        cc.Assert(null == cc.gSharedManager, "");
        this._m_pTargets = []
    },
    init: function() {
        cc.Scheduler.sharedScheduler().scheduleUpdateForTarget(this, 0, !1);
        return ! 0
    },
    selTarget: null,
    addAction: function(a, b, c) {
        cc.Assert(null != a, "no action");
        cc.Assert(null != b, "");
        var d = this._searchElementByTarget(this._m_pTargets, b);
        d || (d = new cc.tHashElement, d.paused = c, d.target = b, d.id = b.id || "no id", this.selTarget = d, this._m_pTargets.push(d));
        this._actionAllocWithHashElement(d);
        cc.Assert( - 1 == d.actions.indexOf(a), "ActionManager.addAction(),");
        d.actions.push(a);
        a.startWithTarget(b)
    },
    removeAllActions: function() {
        for (var a = 0; a < this._m_pTargets.length; a++) {
            var b = this._m_pTargets[a];
            b && this.removeAllActionsFromTarget(b.target)
        }
    },
    removeAllActionsFromTarget: function(a) {
        if (null != a && (a = this._searchElementByTarget(this._m_pTargets, a))) a.currentAction in a.actions && !a.currentActionSalvaged && (a.currentActionSalvaged = !0),
        a.actions = [],
        this._m_pCurrentTarget == a ? this._m_bCurrentTargetSalvaged = !0 : this._deleteHashElement(a)
    },
    removeAction: function(a) {
        if (null != a) {
            var b = this._searchElementByTarget(this._m_pTargets, a.getOriginalTarget());
            if (b) for (var c = 0; c < b.actions.length; c++) {
                if (b.actions[c] == a) {
                    b.actions.splice(c, 1);
                    break
                }
            } else cc.LOG("cocos2d: removeAction: Target not found")
        }
    },
    removeActionByTag: function(a, b) {
        cc.Assert(a != cc.kCCActionTagInvalid, "");
        cc.Assert(null != b, "");
        var c = this._searchElementByTarget(this._m_pTargets, b);
        if (c) for (var d = c.actions.length,
        e = 0; e < d; ++e) {
            var f = c.actions[e];
            if (f && f.getTag() == a && f.getOriginalTarget() == b) {
                this._removeActionAtIndex(e, c);
                break
            }
        }
    },
    getActionByTag: function(a, b) {
        cc.Assert(a != cc.kCCActionTagInvalid, "");
        var c = this._searchElementByTarget(this._m_pTargets, b);
        if (c && null != c.actions) for (var d = 0; d < c.actions.length; ++d) {
            var e = c.actions[d];
            if (e && e.getTag() == a) return e
        }
        return null
    },
    numberOfRunningActionsInTarget: function(a) {
        return (a = this._searchElementByTarget(this._m_pTargets, a)) ? a.actions ? a.actions.length: 0 : 0
    },
    pauseTarget: function(a) {
        if (a = this._searchElementByTarget(this._m_pTargets, a)) a.paused = !0
    },
    resumeTarget: function(a) {
        if (a = this._searchElementByTarget(this._m_pTargets, a)) a.paused = !1
    },
    purgeSharedManager: function() {
        cc.Scheduler.sharedScheduler().unscheduleUpdateForTarget(this)
    },
    _removeActionAtIndex: function(a, b) {
        b.actions[a] == b.currentAction && !b.currentActionSalvaged && (b.currentActionSalvaged = !0);
        b.actions[a] = null;
        b.actionIndex >= a && b.actionIndex--;
        0 == b.actions.length && (this._m_pCurrentTarget == b ? this._m_bCurrentTargetSalvaged = !0 : this._deleteHashElement(b))
    },
    _deleteHashElement: function(a) {
        cc.ArrayRemoveObject(this._m_pTargets, a);
        a && (a.actions = null, a.target = null)
    },
    _actionAllocWithHashElement: function(a) {
        null == a.actions && (a.actions = [])
    },
    update: function(a) {
        for (var b = 0; b < this._m_pTargets.length; b++) {
            this._m_pCurrentTarget = this._m_pTargets[b];
            this._m_bCurrentTargetSalvaged = !1;
            if (!this._m_pCurrentTarget.paused) for (this._m_pCurrentTarget.actionIndex = 0; this._m_pCurrentTarget.actionIndex < this._m_pCurrentTarget.actions.length; this._m_pCurrentTarget.actionIndex++) if (this._m_pCurrentTarget.currentAction = this._m_pCurrentTarget.actions[this._m_pCurrentTarget.actionIndex], null != this._m_pCurrentTarget.currentAction) {
                this._m_pCurrentTarget.currentActionSalvaged = !1;
                this._m_pCurrentTarget.currentAction.step(a);
                if (this._m_pCurrentTarget.currentActionSalvaged) this._m_pCurrentTarget.currentAction = null;
                else if (this._m_pCurrentTarget.currentAction.isDone()) {
                    this._m_pCurrentTarget.currentAction.stop();
                    var c = this._m_pCurrentTarget.currentAction;
                    this._m_pCurrentTarget.currentAction = null;
                    this.removeAction(c)
                }
                this._m_pCurrentTarget.currentAction = null
            }
            this._m_bCurrentTargetSalvaged && 0 == this._m_pCurrentTarget.actions.length && this._deleteHashElement(this._m_pCurrentTarget)
        }
    }
});
cc.ActionManager.sharedManager = function() {
    cc.gSharedManager || (cc.gSharedManager = new cc.ActionManager, cc.gSharedManager.init() || delete cc.gSharedManager);
    return cc.gSharedManager
};
cc.gSharedManager = null;
cc = cc = cc || {};
cc.ProgressTo = cc.ActionInterval.extend({
    _m_fTo: 0,
    _m_fFrom: 0,
    initWithDuration: function(a, b) {
        return this._super(a) ? (this._m_fTo = b, !0) : !1
    },
    copyWithZone: function(a) {
        var b = null;
        a && a._m_pCopyObject ? b = a._m_pCopyObject: (b = new cc.ProgressTo, a = new cc.Zone(b));
        this._super(a);
        b.initWithDuration(this._m_fDuration, this._m_fTo);
        return b
    },
    startWithTarget: function(a) {
        this._super(a);
        this._m_fFrom = a.getPercentage();
        100 == this._m_fFrom && (this._m_fFrom = 0)
    },
    update: function(a) {
        this._m_pTarget instanceof cc.ProgressTimer && this._m_pTarget.setPercentage(this._m_fFrom + (this._m_fTo - this._m_fFrom) * a)
    }
});
cc.ProgressTo.actionWithDuration = function(a, b) {
    var c = new cc.ProgressTo;
    c.initWithDuration(a, b);
    return c
};
cc.ProgressFromTo = cc.ActionInterval.extend({
    _m_fTo: 0,
    _m_fFrom: 0,
    initWithDuration: function(a, b, c) {
        return this._super(a) ? (this._m_fTo = c, this._m_fFrom = b, !0) : !1
    },
    copyWithZone: function(a) {
        var b = null;
        a && a._m_pCopyObject ? b = a._m_pCopyObject: (b = new cc.ProgressFromTo, a = new cc.Zone(b));
        this._super(a);
        b.initWithDuration(this._m_fDuration, this._m_fFrom, this._m_fTo);
        return b
    },
    reverse: function() {
        return cc.ProgressFromTo.actionWithDuration(this._m_fDuration, this._m_fTo, this._m_fFrom)
    },
    startWithTarget: function(a) {
        this._super(a)
    },
    update: function(a) {
        this._m_pTarget instanceof cc.ProgressTimer && this._m_pTarget.setPercentage(this._m_fFrom + (this._m_fTo - this._m_fFrom) * a)
    }
});
cc.ProgressFromTo.actionWithDuration = function(a, b, c) {
    var d = new cc.ProgressFromTo;
    d.initWithDuration(a, b, c);
    return d
};
cc = cc = cc || {};
cc.ActionCamera = cc.ActionInterval.extend({
    m_fCenterXOrig: 0,
    m_fCenterYOrig: 0,
    m_fCenterZOrig: 0,
    m_fEyeXOrig: 0,
    m_fEyeYOrig: 0,
    m_fEyeZOrig: 0,
    m_fUpXOrig: 0,
    m_fUpYOrig: 0,
    m_fUpZOrig: 0,
    startWithTarget: function(a) {
        this._super(a);
        a = a.getCamera();
        a.getCenterXYZ(this.m_fCenterXOrig, this.m_fCenterYOrig, this.m_fCenterZOrig);
        a.getEyeXYZ(this.m_fEyeXOrig, this.m_fEyeYOrig, this.m_fEyeZOrig);
        a.getUpXYZ(this.m_fUpXOrig, this.m_fUpYOrig, this.m_fUpZOrig)
    },
    reverse: function() {
        return cc.ReverseTime.actionWithAction(this)
    }
});
cc.OrbitCamera = cc.ActionCamera.extend({
    m_fRadius: 0,
    m_fDeltaRadius: 0,
    m_fAngleZ: 0,
    m_fDeltaAngleZ: 0,
    m_fAngleX: 0,
    m_fDeltaAngleX: 0,
    m_fRadZ: 0,
    m_fRadDeltaZ: 0,
    m_fRadX: 0,
    m_fRadDeltaX: 0,
    initWithDuration: function(a, b, c, d, e, f, g) {
        return this._super(a) ? (this.m_fRadius = b, this.m_fDeltaRadius = c, this.m_fAngleZ = d, this.m_fDeltaAngleZ = e, this.m_fAngleX = f, this.m_fDeltaAngleX = g, this.m_fRadDeltaZ = cc.DEGREES_TO_RADIANS(e), this.m_fRadDeltaX = cc.DEGREES_TO_RADIANS(g), !0) : !1
    },
    sphericalRadius: function() {
        var a, b;
        a = this._m_pTarget.getCamera();
        a.getEyeXYZ(void 0, void 0, void 0);
        a.getCenterXYZ(void 0, void 0, void 0);
        a = Math.sqrt(Math.pow(NaN, 2) + Math.pow(NaN, 2) + Math.pow(NaN, 2));
        b = Math.sqrt(Math.pow(NaN, 2) + Math.pow(NaN, 2));
        0 == b && (b = cc.FLT_EPSILON);
        0 == a && (a = cc.FLT_EPSILON);
        Math.acos(NaN / a);
        Math.asin(NaN / b);
        cc.Camera.getZEye()
    },
    copyWithZone: function(a) {
        var b = null;
        a && a.m_pCopyObject ? b = a.m_pCopyObject: (b = new cc.OrbitCamera, a = new cc.Zone(b));
        cc.ActionInterval.copyWithZone(a);
        b.initWithDuration(this._m_fDuration, this.m_fRadius, this.m_fDeltaRadius, this.m_fAngleZ, this.m_fDeltaAngleZ, this.m_fAngleX, this.m_fDeltaAngleX);
        return b
    },
    startWithTarget: function(a) {
        this._super(a);
        this.sphericalRadius(void 0, void 0, void 0);
        isNaN(this.m_fRadius) && (this.m_fRadius = void 0);
        isNaN(this.m_fAngleZ) && (this.m_fAngleZ = cc.RADIANS_TO_DEGREES(void 0));
        isNaN(this.m_fAngleX) && (this.m_fAngleX = cc.RADIANS_TO_DEGREES(void 0));
        this.m_fRadZ = cc.DEGREES_TO_RADIANS(this.m_fAngleZ);
        this.m_fRadX = cc.DEGREES_TO_RADIANS(this.m_fAngleX)
    },
    update: function(a) {
        var b = (this.m_fRadius + this.m_fDeltaRadius * a) * cc.Camera.getZEye(),
        c = this.m_fRadZ + this.m_fRadDeltaZ * a,
        d = this.m_fRadX + this.m_fRadDeltaX * a,
        a = Math.sin(c) * Math.cos(d) * b + this.m_fCenterXOrig,
        d = Math.sin(c) * Math.sin(d) * b + this.m_fCenterYOrig,
        b = Math.cos(c) * b + this.m_fCenterZOrig;
        this._m_pTarget.getCamera().setEyeXYZ(a, d, b)
    }
});
cc.OrbitCamera.actionWithDuration = function(a, b, c, d, e, f, g) {
    var h = new cc.OrbitCamera;
    return h.initWithDuration(a, b, c, d, e, f, g) ? h: null
};
cc = cc = cc || {};
cc.ActionEase = cc.ActionInterval.extend({
    initWithAction: function(a) {
        cc.Assert(null != a, "");
        return this.initWithDuration(a.getDuration()) ? (this._m_pOther = a, !0) : !1
    },
    copyWithZone: function() {},
    startWithTarget: function(a) {
        this._super(a);
        this._m_pOther.startWithTarget(this._m_pTarget)
    },
    stop: function() {
        this._m_pOther.stop();
        this._super()
    },
    update: function(a) {
        this._m_pOther.update(a)
    },
    reverse: function() {
        return cc.ActionEase.actionWithAction(this._m_pOther.reverse())
    },
    _m_pOther: null
});
cc.ActionEase.actionWithAction = function(a) {
    var b = new cc.ActionEase;
    b && b.initWithAction(a);
    return b
};
cc.EaseRateAction = cc.ActionEase.extend({
    setRate: function(a) {
        this._m_fRate = a
    },
    getRate: function() {
        return this._m_fRate
    },
    initWithAction: function(a, b) {
        return this._super(a) ? (this._m_fRate = b, !0) : !1
    },
    copyWithZone: function() {},
    reverse: function() {
        return cc.EaseRateAction.actionWithAction(this._m_pOther.reverse(), 1 / this._m_fRate)
    },
    _m_fRate: null
});
cc.EaseRateAction.actionWithAction = function(a, b) {
    var c = new cc.EaseRateAction;
    c && c.initWithAction(a, b);
    return c
};
cc.EaseIn = cc.EaseRateAction.extend({
    update: function(a) {
        this._m_pOther.update(Math.pow(a, this._m_fRate))
    },
    copyWithZone: function() {}
});
cc.EaseIn.actionWithAction = function(a, b) {
    var c = new cc.EaseIn;
    c && c.initWithAction(a, b);
    return c
};
cc.EaseOut = cc.EaseRateAction.extend({
    update: function(a) {
        this._m_pOther.update(Math.pow(a, 1 / this._m_fRate))
    },
    copyWithZone: function() {}
});
cc.EaseOut.actionWithAction = function(a, b) {
    var c = new cc.EaseOut;
    c && c.initWithAction(a, b);
    return c
};
cc.EaseInOut = cc.EaseRateAction.extend({
    update: function(a) {
        var b = 1;
        0 == this._m_fRate % 2 && (b = -1);
        a *= 2;
        1 > a ? this._m_pOther.update(0.5 * Math.pow(a, this._m_fRate)) : this._m_pOther.update(0.5 * b * (Math.pow(a - 2, this._m_fRate) + 2 * b))
    },
    copyWithZone: function() {},
    reverse: function() {
        return cc.EaseInOut.actionWithAction(this._m_pOther.reverse(), this._m_fRate)
    }
});
cc.EaseInOut.actionWithAction = function(a, b) {
    var c = new cc.EaseInOut;
    c && c.initWithAction(a, b);
    return c
};
cc.EaseExponentialIn = cc.ActionEase.extend({
    update: function(a) {
        this._m_pOther.update(0 == a ? 0 : Math.pow(2, 10 * (a / 1 - 1)) - 0.0010)
    },
    reverse: function() {
        return cc.EaseExponentialOut.actionWithAction(this._m_pOther.reverse())
    },
    copyWithZone: function() {}
});
cc.EaseExponentialIn.actionWithAction = function(a) {
    var b = new cc.EaseExponentialIn;
    b && b.initWithAction(a);
    return b
};
cc.EaseExponentialOut = cc.ActionEase.extend({
    update: function(a) {
        this._m_pOther.update(1 == a ? 1 : -Math.pow(2, -10 * a / 1) + 1)
    },
    reverse: function() {
        return cc.EaseExponentialIn.actionWithAction(this._m_pOther.reverse())
    },
    copyWithZone: function() {}
});
cc.EaseExponentialOut.actionWithAction = function(a) {
    var b = new cc.EaseExponentialOut;
    b && b.initWithAction(a);
    return b
};
cc.EaseExponentialInOut = cc.ActionEase.extend({
    update: function(a) {
        a /= 0.5;
        a = 1 > a ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * ( - Math.pow(2, 10 * (a - 1)) + 2);
        this._m_pOther.update(a)
    },
    copyWithZone: function() {}
});
cc.EaseExponentialInOut.actionWithAction = function(a) {
    var b = new cc.EaseExponentialInOut;
    b && b.initWithAction(a);
    return b
};
cc.EaseSineIn = cc.ActionEase.extend({
    update: function(a) {
        this._m_pOther.update( - 1 * Math.cos(a * Math.PI / 2) + 1)
    },
    reverse: function() {
        return cc.EaseSineOut.actionWithAction(this._m_pOther.reverse())
    },
    copyWithZone: function() {}
});
cc.EaseSineIn.actionWithAction = function(a) {
    var b = new cc.EaseSineIn;
    b && b.initWithAction(a);
    return b
};
cc.EaseSineOut = cc.ActionEase.extend({
    update: function(a) {
        this._m_pOther.update(Math.sin(a * Math.PI / 2))
    },
    reverse: function() {
        return cc.EaseSineIn.actionWithAction(this._m_pOther.reverse())
    },
    copyWithZone: function() {}
});
cc.EaseSineOut.actionWithAction = function(a) {
    var b = new cc.EaseSineOut;
    b && b.initWithAction(a);
    return b
};
cc.EaseSineInOut = cc.ActionEase.extend({
    update: function(a) {
        this._m_pOther.update( - 0.5 * (Math.cos(Math.PI * a) - 1))
    },
    copyWithZone: function() {}
});
cc.EaseSineInOut.actionWithAction = function(a) {
    var b = new cc.EaseSineInOut;
    b && b.initWithAction(a);
    return b
};
cc.EaseElastic = cc.ActionEase.extend({
    getPeriod: function() {
        return this._m_fPeriod
    },
    setPeriod: function(a) {
        this._m_fPeriod = a
    },
    initWithAction: function(a, b) {
        this._super(a);
        this._m_fPeriod = null == b ? 3 : b;
        return ! 0
    },
    reverse: function() {
        cc.Assert(0, "");
        return null
    },
    copyWithZone: function() {},
    _m_fPeriod: null
});
cc.EaseElastic.actionWithAction = function(a, b) {
    var c = new cc.EaseElastic;
    c && (null == b ? c.initWithAction(a) : c.initWithAction(a, b));
    return c
};
cc.EaseElasticIn = cc.EaseElastic.extend({
    update: function(a) {
        var b = 0;
        0 == a || 1 == a ? b = a: (b = this._m_fPeriod / 4, a -= 1, b = -Math.pow(2, 10 * a) * Math.sin(2 * (a - b) * Math.PI / this._m_fPeriod));
        this._m_pOther.update(b)
    },
    reverse: function() {
        return cc.EaseElasticOut.actionWithAction(this._m_pOther.reverse(), this._m_fPeriod)
    },
    copyWithZone: function() {}
});
cc.EaseElasticIn.actionWithAction = function(a, b) {
    var c = new cc.EaseElasticIn;
    c && (null == b ? c.initWithAction(a) : c.initWithAction(a, b));
    return c
};
cc.EaseElasticOut = cc.EaseElastic.extend({
    update: function(a) {
        var b = 0;
        0 == a || 1 == a ? b = a: (b = this._m_fPeriod / 4, b = Math.pow(2, -10 * a) * Math.sin(2 * (a - b) * Math.PI / this._m_fPeriod) + 1);
        this._m_pOther.update(b)
    },
    reverse: function() {
        return cc.EaseElasticIn.actionWithAction(this._m_pOther.reverse(), this._m_fPeriod)
    },
    copyWithZone: function() {}
});
cc.EaseElasticOut.actionWithAction = function(a, b) {
    var c = new cc.EaseElasticOut;
    c && (null == b ? c.initWithAction(a) : c.initWithAction(a, b));
    return c
};
cc.EaseElasticInOut = cc.EaseElastic.extend({
    update: function(a) {
        var b = 0;
        0 == a || 1 == a ? b = a: (this._m_fPeriod || (this._m_fPeriod = 0.3 * 1.5), b = this._m_fPeriod / 4, a = 2 * a - 1, b = 0 > a ? -0.5 * Math.pow(2, 10 * a) * Math.sin(2 * (a - b) * Math.PI / this._m_fPeriod) : 0.5 * Math.pow(2, -10 * a) * Math.sin(2 * (a - b) * Math.PI / this._m_fPeriod) + 1);
        this._m_pOther.update(b)
    },
    reverse: function() {
        return cc.EaseInOut.actionWithAction(this._m_pOther.reverse(), this._m_fPeriod)
    },
    copyWithZone: function() {}
});
cc.EaseElasticInOut.actionWithAction = function(a, b) {
    var c = new cc.EaseElasticInOut;
    c && (null == b ? c.initWithAction(a) : c.initWithAction(a, b));
    return c
};
cc.EaseBounce = cc.ActionEase.extend({
    bounceTime: function(a) {
        if (a < 1 / 2.75) return 7.5625 * a * a;
        if (a < 2 / 2.75) return a -= 1.5 / 2.75,
        7.5625 * a * a + 0.75;
        if (a < 2.5 / 2.75) return a -= 2.25 / 2.75,
        7.5625 * a * a + 0.9375;
        a -= 2.625 / 2.75;
        return 7.5625 * a * a + 0.984375
    },
    copyWithZone: function() {}
});
cc.EaseBounce.actionWithAction = function(a) {
    var b = new cc.EaseBounce;
    b && b.initWithAction(a);
    return b
};
cc.EaseBounceIn = cc.EaseBounce.extend({
    update: function(a) {
        this._m_pOther.update(1 - this.bounceTime(1 - a))
    },
    reverse: function() {
        return cc.EaseBounceOut.actionWithAction(this._m_pOther.reverse())
    },
    copyWithZone: function() {}
});
cc.EaseBounceIn.actionWithAction = function(a) {
    var b = new cc.EaseBounceIn;
    b && b.initWithAction(a);
    return b
};
cc.EaseBounceOut = cc.EaseBounce.extend({
    update: function(a) {
        this._m_pOther.update(this.bounceTime(a))
    },
    reverse: function() {
        return cc.EaseBounceIn.actionWithAction(this._m_pOther.reverse())
    },
    copyWithZone: function() {}
});
cc.EaseBounceOut.actionWithAction = function(a) {
    var b = new cc.EaseBounceOut;
    b && b.initWithAction(a);
    return b
};
cc.EaseBounceInOut = cc.EaseBounce.extend({
    update: function(a) {
        var b = 0,
        b = 0.5 > a ? 0.5 * (1 - this.bounceTime(1 - 2 * a)) : 0.5 * this.bounceTime(2 * a - 1) + 0.5;
        this._m_pOther.update(b)
    },
    copyWithZone: function() {}
});
cc.EaseBounceInOut.actionWithAction = function(a) {
    var b = new cc.EaseBounceInOut;
    b && b.initWithAction(a);
    return b
};
cc.EaseBackIn = cc.ActionEase.extend({
    update: function(a) {
        this._m_pOther.update(a * a * (2.70158 * a - 1.70158))
    },
    reverse: function() {
        return cc.EaseBackOut.actionWithAction(this._m_pOther.reverse())
    },
    copyWithZone: function() {}
});
cc.EaseBackIn.actionWithAction = function(a) {
    var b = new cc.EaseBackIn;
    b && b.initWithAction(a);
    return b
};
cc.EaseBackOut = cc.ActionEase.extend({
    update: function(a) {
        a -= 1;
        this._m_pOther.update(a * a * (2.70158 * a + 1.70158) + 1)
    },
    reverse: function() {
        return cc.EaseBackIn.actionWithAction(this._m_pOther.reverse())
    },
    copyWithZone: function() {}
});
cc.EaseBackOut.actionWithAction = function(a) {
    var b = new cc.EaseBackOut;
    b && b.initWithAction(a);
    return b
};
cc.EaseBackInOut = cc.ActionEase.extend({
    update: function(a) {
        a *= 2;
        1 > a ? this._m_pOther.update(a * a * (3.5949095 * a - 2.5949095) / 2) : (a -= 2, this._m_pOther.update(a * a * (3.5949095 * a + 2.5949095) / 2 + 1))
    },
    copyWithZone: function() {}
});
cc.EaseBackInOut.actionWithAction = function(a) {
    var b = new cc.EaseBackInOut;
    b && b.initWithAction(a);
    return b
};
cc = cc = cc || {};
cc.GridAction = cc.ActionInterval.extend({
    _m_sGridSize: null,
    startWithTarget: function(a) {
        this._super(a);
        var a = this.getGrid(),
        b = this._m_pTarget,
        c = b.getGrid();
        c && 0 < c.getReuseGrid() ? c.isActive() && c.getGridSize().x == this._m_sGridSize.x && c.getGridSize().y == this._m_sGridSize.y ? c.reuse() : cc.Assert(0, "") : (c && c.isActive() && c.setActive(!1), b.setGrid(a), b.getGrid().setActive(!0))
    },
    reverse: function() {
        return cc.ReverseTime.actionWithAction(this)
    },
    initWithSize: function(a, b) {
        return this.initWithDuration(b) ? (this._m_sGridSize = a, !0) : !1
    },
    getGrid: function() {
        cc.Assert(0, "");
        return null
    }
});
cc.GridAction.actionWithSize = function(a, b) {
    var c = new cc.GridAction;
    c.initWithSize(a, b);
    return c
};
cc.Grid3DAction = cc.GridAction.extend({
    getGrid: function() {
        return cc.Grid3D.gridWithSize(this._m_sGridSize)
    },
    vertex: function(a) {
        return this._m_pTarget.getGrid().vertex(a)
    },
    originalVertex: function(a) {
        return this._m_pTarget.getGrid().originalVertex(a)
    },
    setVertex: function(a, b) {
        this._m_pTarget.getGrid().setVertex(a, b)
    }
});
cc.Grid3DAction.actionWithSize = function() {};
cc.TiledGrid3DAction = cc.GridAction.extend({
    tile: function(a) {
        return this._m_pTarget.getGrid().tile(a)
    },
    originalTile: function(a) {
        return this._m_pTarget.getGrid().originalTile(a)
    },
    setTile: function(a, b) {
        return this._m_pTarget.getGrid().setTile(a, b)
    },
    getGrid: function() {
        return cc.TiledGrid3D.gridWithSize(this._m_sGridSize)
    }
});
cc.TiledGrid3DAction.actionWithSize = function() {};
cc.AccelDeccelAmplitude = cc.ActionInterval.extend({
    _m_fRate: null,
    _m_pOther: null,
    initWithAction: function(a, b) {
        return cc.ActionInterval.initWithDuration(b) ? (this._m_fRate = 1, this._m_pOther = a, !0) : !1
    },
    startWithTarget: function(a) {
        cc.ActionInterval.startWithTarget(a);
        this._m_pOther.startWithTarget(a)
    },
    update: function(a) {
        a *= 2;
        1 < a && (a = 1 - (a - 1));
        this._m_pOther.setAmplitudeRate(Math.pow(a, this._m_fRate))
    },
    reverse: function() {
        return cc.AccelDeccelAmplitude.actionWithAction(this._m_pOther.reverse(), this._m_fDuration)
    },
    getRate: function() {
        return this._m_fRate
    },
    setRate: function(a) {
        this._m_fRate = a
    }
});
cc.AccelDeccelAmplitude.actionWithAction = function() {
    return new cc.AccelDeccelAmplitude
};
cc.AccelAmplitude = cc.ActionInterval.extend({
    _m_fRate: null,
    _m_pOther: null,
    initWithAction: function(a, b) {
        return cc.ActionInterval.initWithDuration(b) ? (this._m_fRate = 1, this._m_pOther = a, !0) : !1
    },
    getRate: function() {
        return this._m_fRate
    },
    setRate: function(a) {
        this._m_fRate = a
    },
    startWithTarget: function(a) {
        cc.ActionInterval.startWithTarget(a);
        this._m_pOther.startWithTarget(a)
    },
    update: function(a) {
        this._m_pOther.setAmplitudeRate(Math.pow(a, this._m_fRate));
        this._m_pOther.update(a)
    },
    reverse: function() {
        return cc.AccelAmplitude.actionWithAction(this._m_pOther.reverse(), this._m_fDuration)
    }
});
cc.AccelAmplitude.actionWithAction = function() {
    return new cc.AccelAmplitude
};
cc.DeccelAmplitude = cc.ActionInterval.extend({
    _m_fRate: null,
    _m_pOther: null,
    initWithAction: function(a, b) {
        return cc.ActionInterval.initWithDuration(b) ? (this._m_fRate = 1, this._m_pOther = a, !0) : !1
    },
    getRate: function() {
        return this._m_fRate
    },
    setRate: function(a) {
        this._m_fRate = a
    },
    startWithTarget: function(a) {
        cc.ActionInterval.startWithTarget(a);
        this._m_pOther.startWithTarget(a)
    },
    update: function(a) {
        this._m_pOther.setAmplitudeRate(Math.pow(1 - a, this._m_fRate));
        this._m_pOther.update(a)
    },
    reverse: function() {
        return cc.DeccelAmplitude.actionWithAction(this._m_pOther.reverse(), this._m_fDuration)
    }
});
cc.DeccelAmplitude.actionWithAction = function() {
    return new cc.DeccelAmplitude
};
cc.StopGrid = cc.ActionInstant.extend({
    startWithTarget: function(a) {
        this._super(a); (a = this._m_pTarget.getGrid()) && a.isActive() && a.setActive(!1)
    }
});
cc.StopGrid.action = function() {
    return new cc.StopGrid
};
cc.ReuseGrid = cc.ActionInstant.extend({
    _m_nTimes: null,
    initWithTimes: function(a) {
        this._m_nTimes = a;
        return ! 0
    },
    startWithTarget: function(a) {
        cc.ActionInstant.startWithTarget(a);
        this._m_pTarget.getGrid() && this.__m_pTarget.getGrid().isActive() && this._m_pTarget.getGrid().setReuseGrid(this.__m_pTarget.getGrid().getReuseGrid() + this._m_nTimes)
    }
});
cc.ReuseGrid.actionWithTimes = function() {
    return new cc.ReuseGrid
};
cc = cc = cc || {};
cc.TurnOffTiles = cc.TiledGrid3DAction.extend({
    _m_nSeed: null,
    _m_nTilesCount: 0,
    _m_pTilesOrder: [],
    initWithSeed: function(a, b, c) {
        return this.initWithSize(b, c) ? (this._m_nSeed = a, this._m_pTilesOrder = null, !0) : !1
    },
    shuffle: function(a, b) {
        var c;
        for (c = b - 1; 0 <= c; c--) {
            var d = parseInt(Math.random() * (c + 1)),
            e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    },
    turnOnTile: function(a) {
        this.setTile(a, this.originalTile(a))
    },
    turnOffTile: function(a) {
        var b = new cc.Quad3;
        this.setTile(a, b)
    },
    startWithTarget: function(a) {
        this._super(a); - 1 != this._m_nSeed && parseInt(Math.random() * this._m_nSeed);
        this._m_nTilesCount = this._m_sGridSize.x * this._m_sGridSize.y;
        this._m_pTilesOrder = [];
        for (a = 0; a < this._m_nTilesCount; ++a) this._m_pTilesOrder[a] = a;
        this.shuffle(this._m_pTilesOrder, this._m_nTilesCount)
    },
    update: function(a) {
        var b, c;
        b = a * this._m_nTilesCount;
        for (a = 0; a < this._m_nTilesCount; a++) c = this._m_pTilesOrder[a],
        c = cc.ccg(c / this._m_sGridSize.y, c % this._m_sGridSize.y),
        a < b ? this.turnOffTile(c) : this.turnOnTile(c)
    }
});
cc.TurnOffTiles.actionWithSize = function(a, b) {
    var c = new cc.TurnOffTiles;
    c.initWithSize(a, b);
    return c
};
cc.TurnOffTiles.actionWithSeed = function(a, b, c) {
    var d = new cc.TurnOffTiles;
    d.initWithSeed(a, b, c);
    return d
};
cc = cc = cc || {};
cc.Scene = cc.Node.extend({
    ctor: function() {
        this._m_bIsRelativeAnchorPoint = !1;
        var a = cc.Director.sharedDirector();
        this.setAnchorPoint(cc.ccp(0.5, 0.5));
        this.setContentSize(a.getWinSize())
    },
    init: function() {
        this.setContentSize(cc.Director.sharedDirector().getWinSize());
        return ! 0
    }
});
cc.Scene.node = function() {
    return new cc.Scene
};
cc = cc = cc || {};
cc.Layer = cc.Node.extend({
    _m_bIsTouchEnabled: !1,
    _m_bIsAccelerometerEnabled: !1,
    _m_bIsKeypadEnabled: !1,
    ctor: function() {
        this._super();
        this.setAnchorPoint(cc.ccp(0.5, 0.5));
        this._m_bIsRelativeAnchorPoint = !1;
        var a = cc.Director.sharedDirector();
        if (!a) return ! 1;
        this.setContentSize(a.getWinSize());
        this._m_bIsAccelerometerEnabled = this._m_bIsTouchEnabled = !1
    },
    init: function() {
        return ! 0
    },
    type: "layer",
    registerWithTouchDispatcher: function() {
        cc.TouchDispatcher.sharedDispatcher().addStandardDelegate(this, 0)
    },
    getIsTouchEnabled: function() {
        return this._m_bIsTouchEnabled
    },
    setIsTouchEnabled: function(a) {
        this._m_bIsTouchEnabled != a && (this._m_bIsTouchEnabled = a, this._m_bIsRunning && (a ? this.registerWithTouchDispatcher() : cc.TouchDispatcher.sharedDispatcher().removeDelegate(this)))
    },
    getIsAccelerometerEnabled: function() {
        return this._m_bIsAccelerometerEnabled
    },
    setIsAccelerometerEnabled: function(a) {
        a != this._m_bIsAccelerometerEnabled && (this._m_bIsAccelerometerEnabled = a, this._m_bIsRunning && (a ? cc.Accelerometer.sharedAccelerometer().setDelegate(this) : cc.Accelerometer.sharedAccelerometer().setDelegate(null)))
    },
    getIsKeypadEnabled: function() {
        return this._m_bIsKeypadEnabled
    },
    setIsKeypadEnabled: function(a) {
        a != this._m_bIsKeypadEnabled && (this._m_bIsKeypadEnabled = a, this._m_bIsRunning && (a ? cc.KeypadDispatcher.sharedDispatcher().addDelegate(this) : cc.KeypadDispatcher.sharedDispatcher().removeDelegate(this)))
    },
    onEnter: function() {
        this._m_bIsTouchEnabled && this.registerWithTouchDispatcher();
        this._super();
        this._m_bIsAccelerometerEnabled && cc.Accelerometer.sharedAccelerometer().setDelegate(this);
        this._m_bIsKeypadEnabled && cc.KeypadDispatcher.sharedDispatcher().addDelegate(this)
    },
    onExit: function() {
        this._m_bIsTouchEnabled && cc.TouchDispatcher.sharedDispatcher().removeDelegate(this);
        this._m_bIsAccelerometerEnabled && cc.Accelerometer.sharedAccelerometer().setDelegate(null);
        this._m_bIsKeypadEnabled && cc.KeypadDispatcher.sharedDispatcher().removeDelegate(this);
        this._super()
    },
    onEnterTransitionDidFinish: function() {
        this._m_bIsAccelerometerEnabled && cc.Accelerometer.sharedAccelerometer().setDelegate(this);
        this._super()
    },
    ccTouchBegan: function() {
        cc.Assert(!1, "Layer#ccTouchBegan override me");
        return ! 0
    },
    ccTouchMoved: function() {},
    ccTouchEnded: function() {},
    ccTouchCancelled: function() {},
    ccTouchesBegan: function() {},
    ccTouchesMoved: function() {},
    ccTouchesEnded: function() {},
    ccTouchesCancelled: function() {},
    didAccelerate: function() {},
    addLayer: function(a) {
        cc.Assert(this.m_pLayers, "cc.Layer addLayer");
        this.m_pLayers.addObject(a)
    }
});
cc.Layer.node = function() {
    var a = new cc.Layer;
    return a && a.init() ? a: null
};
cc.LayerColor = cc.Layer.extend({
    _m_pSquareVertices: [],
    _m_pSquareColors: [],
    _m_cOpacity: 0,
    _m_tColor: new cc.Color3B(255, 255, 255),
    _m_tBlendFunc: new cc.BlendFunc(cc.BLEND_SRC, cc.BLEND_DST),
    ctor: function() {
        this._m_pSquareVertices = [new cc.Vertex2F(0, 0), new cc.Vertex2F(0, 0), new cc.Vertex2F(0, 0), new cc.Vertex2F(0, 0)];
        this._m_pSquareColors = [new cc.Color4B(0, 0, 0, 1), new cc.Color4B(0, 0, 0, 1), new cc.Color4B(0, 0, 0, 1), new cc.Color4B(0, 0, 0, 1)];
        this._m_tColor = new cc.Color3B(0, 0, 0);
        this._super()
    },
    getOpacity: function() {
        return this._m_cOpacity
    },
    setOpacity: function(a) {
        this._m_cOpacity = a;
        this._updateColor();
        this.setNodeDirty()
    },
    getColor: function() {
        return this._m_tColor
    },
    setColor: function(a) {
        this._m_tColor = a;
        this._updateColor();
        this.setNodeDirty()
    },
    getBlendFunc: function() {
        return this._m_tBlendFunc
    },
    setBlendFunc: function(a) {
        this._m_tBlendFunc = a
    },
    initWithColor: function(a) {
        var b = cc.Director.sharedDirector().getWinSize();
        this.initWithColorWidthHeight(a, b.width, b.height);
        return ! 0
    },
    initWithColorWidthHeight: function(a, b, c) {
        this._m_tBlendFunc.src = cc.BLEND_SRC;
        this._m_tBlendFunc.dst = cc.BLEND_DST;
        this._m_tColor = new cc.Color3B(a.r, a.g, a.b);
        this._m_cOpacity = a.a;
        for (a = 0; a < this._m_pSquareVertices.length; a++) this._m_pSquareVertices[a].x = 0,
        this._m_pSquareVertices[a].y = 0;
        this._updateColor();
        this.setContentSize(cc.SizeMake(b, c));
        return ! 0
    },
    setContentSize: function(a) {
        this._m_pSquareVertices[1].x = a.width * cc.CONTENT_SCALE_FACTOR();
        this._m_pSquareVertices[2].y = a.height * cc.CONTENT_SCALE_FACTOR();
        this._m_pSquareVertices[3].x = a.width * cc.CONTENT_SCALE_FACTOR();
        this._m_pSquareVertices[3].y = a.height * cc.CONTENT_SCALE_FACTOR();
        this._super(a)
    },
    changeWidthAndHeight: function(a, b) {
        this.setContentSize(cc.SizeMake(a, b))
    },
    changeWidth: function(a) {
        this.setContentSize(cc.SizeMake(a, this._m_tContentSize.height))
    },
    changeHeight: function(a) {
        this.setContentSize(cc.SizeMake(this._m_tContentSize.width, a))
    },
    _updateColor: function() {
        for (var a = 0; 4 > a; a++) this._m_pSquareColors[a].r = Math.round(this._m_tColor.r),
        this._m_pSquareColors[a].g = Math.round(this._m_tColor.g),
        this._m_pSquareColors[a].b = Math.round(this._m_tColor.b),
        this._m_pSquareColors[a].a = Math.round(this._m_cOpacity)
    },
    setIsOpacityModifyRGB: function() {},
    getIsOpacityModifyRGB: function() {
        return ! 1
    },
    draw: function(a) {
        a = a || cc.renderContext;
        if (cc.renderContextType == cc.kCanvas) {
            var b = this.getContentSize().width,
            c = this.getContentSize().height,
            d = a.createLinearGradient( - this.getAnchorPointInPixels().x, this.getAnchorPointInPixels().y, -this.getAnchorPointInPixels().x + b, -(this.getAnchorPointInPixels().y + c));
            d.addColorStop(0, "rgba(" + this._m_pSquareColors[0].r + "," + this._m_pSquareColors[0].g + "," + this._m_pSquareColors[0].b + "," + this._m_pSquareColors[0].a / 255 + ")");
            d.addColorStop(1, "rgba(" + this._m_pSquareColors[3].r + "," + this._m_pSquareColors[3].g + "," + this._m_pSquareColors[3].b + "," + this._m_pSquareColors[3].a / 255 + ")");
            a.fillStyle = d;
            a.fillRect( - this.getAnchorPointInPixels().x, this.getAnchorPointInPixels().y, b, -c)
        }
        this._super()
    }
});
cc.LayerColor.layerWithColorWidthHeight = function(a, b, c) {
    var d = new cc.LayerColor;
    return d && d.initWithColorWidthHeight(a, b, c) ? d: null
};
cc.LayerColor.layerWithColor = function(a) {
    var b = new cc.LayerColor;
    return b && b.initWithColor(a) ? b: null
};
cc.LayerColor.node = function() {
    var a = new cc.LayerColor;
    return a && a.init() ? a: null
};
cc.LayerGradient = cc.LayerColor.extend({
    _m_startColor: new cc.Color3B(0, 0, 0),
    _m_endColor: new cc.Color3B(0, 0, 0),
    _m_cStartOpacity: null,
    _m_cEndOpacity: null,
    _m_AlongVector: null,
    _m_bCompressedInterpolation: !1,
    ctor: function() {
        this._m_startColor = new cc.Color3B(0, 0, 0);
        this._m_endColor = new cc.Color3B(0, 0, 0);
        this._super()
    },
    getStartColor: function() {
        return this._m_tColor
    },
    setStartColor: function(a) {
        this.setColor(a)
    },
    setEndColor: function(a) {
        this._m_endColor = a;
        this._updateColor()
    },
    getEndColor: function() {
        return this._m_endColor
    },
    setStartOpacity: function(a) {
        this._m_cStartOpacity = a;
        this._updateColor()
    },
    getStartOpacity: function() {
        return this._m_cStartOpacity
    },
    setEndOpacity: function(a) {
        this._m_cEndOpacity = a;
        this._updateColor()
    },
    getEndOpacity: function() {
        return this._m_cEndOpacity
    },
    setVector: function(a) {
        this.m_AlongVector = a;
        this._updateColor()
    },
    getVector: function() {
        return this.m_AlongVector
    },
    getIsCompressedInterpolation: function() {
        return this._m_bCompressedInterpolation
    },
    setIsCompressedInterpolation: function(a) {
        this._m_bCompressedInterpolation = a;
        this._updateColor()
    },
    initWithColor: function(a, b, c) {
        2 == arguments.length && (c = cc.ccp(0, -1));
        this._m_startColor.r = a.r;
        this._m_startColor.g = a.g;
        this._m_startColor.b = a.b;
        this._m_cStartOpacity = a.a;
        this._m_endColor.r = b.r;
        this._m_endColor.g = b.g;
        this._m_endColor.b = b.b;
        this._m_cEndOpacity = b.a;
        this.m_AlongVector = c;
        this._m_bCompressedInterpolation = !0;
        return this._super(cc.ccc4(a.r, a.g, a.b, 255))
    },
    _updateColor: function() {
        this._super();
        var a = cc.ccpLength(this.m_AlongVector);
        if (0 != a) {
            var b = Math.sqrt(2),
            c = new cc.Point,
            c = cc.ccp(this.m_AlongVector.x / a, this.m_AlongVector.y / a);
            this._m_bCompressedInterpolation && (a = 1 / (Math.abs(c.x) + Math.abs(c.y)), c = cc.ccpMult(c, a * b));
            var d = this._m_cOpacity / 255,
            a = new cc.Color4B(this._m_startColor.r, this._m_startColor.g, this._m_startColor.b, this._m_cStartOpacity * d),
            d = new cc.Color4B(this._m_endColor.r, this._m_endColor.g, this._m_endColor.b, this._m_cEndOpacity * d);
            this._m_pSquareColors[0].r = parseInt(d.r + (a.r - d.r) * ((b + c.x + c.y) / (2 * b)));
            this._m_pSquareColors[0].g = parseInt(d.g + (a.g - d.g) * ((b + c.x + c.y) / (2 * b)));
            this._m_pSquareColors[0].b = parseInt(d.b + (a.b - d.b) * ((b + c.x + c.y) / (2 * b)));
            this._m_pSquareColors[0].a = parseInt(d.a + (a.a - d.a) * ((b + c.x + c.y) / (2 * b)));
            this._m_pSquareColors[1].r = parseInt(d.r + (a.r - d.r) * ((b - c.x + c.y) / (2 * b)));
            this._m_pSquareColors[1].g = parseInt(d.g + (a.g - d.g) * ((b - c.x + c.y) / (2 * b)));
            this._m_pSquareColors[1].b = parseInt(d.b + (a.b - d.b) * ((b - c.x + c.y) / (2 * b)));
            this._m_pSquareColors[1].a = parseInt(d.a + (a.a - d.a) * ((b - c.x + c.y) / (2 * b)));
            this._m_pSquareColors[2].r = parseInt(d.r + (a.r - d.r) * ((b + c.x - c.y) / (2 * b)));
            this._m_pSquareColors[2].g = parseInt(d.g + (a.g - d.g) * ((b + c.x - c.y) / (2 * b)));
            this._m_pSquareColors[2].b = parseInt(d.b + (a.b - d.b) * ((b + c.x - c.y) / (2 * b)));
            this._m_pSquareColors[2].a = parseInt(d.a + (a.a - d.a) * ((b + c.x - c.y) / (2 * b)));
            this._m_pSquareColors[3].r = parseInt(d.r + (a.r - d.r) * ((b - c.x - c.y) / (2 * b)));
            this._m_pSquareColors[3].g = parseInt(d.g + (a.g - d.g) * ((b - c.x - c.y) / (2 * b)));
            this._m_pSquareColors[3].b = parseInt(d.b + (a.b - d.b) * ((b - c.x - c.y) / (2 * b)));
            this._m_pSquareColors[3].a = parseInt(d.a + (a.a - d.a) * ((b - c.x - c.y) / (2 * b)))
        }
    }
});
cc.LayerGradient.layerWithColor = function(a, b, c) {
    var d = arguments.length,
    e = new cc.LayerGradient;
    switch (d) {
    case 2:
        return e && e.initWithColor(a, b) ? e: null;
    case 3:
        return e && e.initWithColor(a, b, c) ? e: null;
    default:
        throw "Argument must be non-nil ";
    }
};
cc.LayerGradient.node = function() {
    var a = new cc.LayerGradient;
    return a && a.init() ? a: null
};
cc.LayerMultiplex = cc.Layer.extend({
    m_nEnabledLayer: 0,
    m_pLayers: null,
    ctor: function() {
        this._super()
    },
    initWithLayer: function(a) {
        this.m_pLayers = [];
        this.m_pLayers.push(a);
        this.m_nEnabledLayer = 0;
        this.addChild(a);
        return ! 0
    },
    initWithLayers: function(a) {
        this.m_pLayers = a;
        this.m_nEnabledLayer = 0;
        this.addChild(this.m_pLayers[this.m_nEnabledLayer]);
        return ! 0
    },
    switchTo: function(a) {
        cc.Assert(a < this.m_pLayers.length, "Invalid index in MultiplexLayer switchTo message");
        this.removeChild(this.m_pLayers[this.m_nEnabledLayer], !0);
        this.m_nEnabledLayer = a;
        this.addChild(this.m_pLayers[a])
    },
    switchToAndReleaseMe: function(a) {
        cc.Assert(a < this.m_pLayers.count(), "Invalid index in MultiplexLayer switchTo message");
        this.removeChild(this.m_pLayers[this.m_nEnabledLayer], !0);
        this.m_pLayers[this.m_nEnabledLayer] = null;
        this.m_nEnabledLayer = a;
        this.addChild(this.m_pLayers[a])
    }
});
cc.LayerMultiplex.layerWithLayers = function() {
    var a = new cc.LayerMultiplex;
    return a.initWithLayers(arguments) ? a: null
};
cc.LayerMultiplex.layerWithLayer = function(a) {
    var b = new cc.LayerMultiplex;
    b.initWithLayer(a);
    return b
};
cc.LayerMultiplex.node = function() {
    var a = new cc.LayerMultiplex;
    return a && a.init() ? a: null
};
cc.LazyLayer = cc.Node.extend({
    _layerCanvas: null,
    _layerContext: null,
    _isNeedUpdate: !1,
    _canvasZOrder: -10,
    ctor: function() {
        this._super();
        this.setAnchorPoint(new cc.Point(0, 0));
        this._setupHtml()
    },
    setLayerZOrder: function(a) {
        if (0 <= a) throw "LazyLayer zOrder must Less than Zero.Because LazyLayer is a background Layer!";
        this._canvasZOrder = a;
        this._layerCanvas.style.zIndex = this._canvasZOrder
    },
    getLayerZOrder: function() {
        return this._canvasZOrder
    },
    _setupHtml: function() {
        var a = document.getElementById("Cocos2dGameContainer");
        a || (cc.setupHTML(), a = document.getElementById("Cocos2dGameContainer"));
        this._layerCanvas = document.createElement("canvas");
        this._layerCanvas.width = cc.canvas.width;
        this._layerCanvas.height = cc.canvas.height;
        this._layerCanvas.id = "lazyCanvas" + Date.now();
        this._layerCanvas.style.zIndex = this._canvasZOrder;
        this._layerCanvas.style.position = "absolute";
        this._layerCanvas.style.top = "0";
        this._layerCanvas.style.left = "0";
        this._layerContext = this._layerCanvas.getContext("2d");
        this._layerContext.fillStyle = "rgba(0,0,0,1)";
        this._layerContext.translate(0, this._layerCanvas.height);
        a.appendChild(this._layerCanvas);
        var b = this;
        window.addEventListener("resize",
        function() {
            b.adjustSizeForCanvas()
        })
    },
    adjustSizeForCanvas: function() {
        this._isNeedUpdate = !0;
        this._layerCanvas.width = cc.canvas.width;
        this._layerCanvas.height = cc.canvas.height;
        var a = cc.canvas.width / cc.originalCanvasSize.width,
        b = cc.canvas.height / cc.originalCanvasSize.height;
        a > b && (a = b);
        this._layerContext.translate(0, this._layerCanvas.height);
        this._layerContext.scale(a, a)
    },
    addChild: function(a, b, c) {
        this._isNeedUpdate = !0;
        this._super(a, b, c)
    },
    removeChild: function(a, b) {
        this._isNeedUpdate = !0;
        this._super(a, b)
    },
    visit: function() {
        if (this._m_bIsVisible && this._isNeedUpdate) {
            this._isNeedUpdate = !1;
            var a = this._layerContext;
            a.save();
            a.clearRect(0, 0, this._layerCanvas.width, -this._layerCanvas.height);
            this._m_pGrid && this._m_pGrid.isActive() && (this._m_pGrid.beforeDraw(), this.transformAncestors());
            if (this._m_pChildren) for (var b = 0; b < this._m_pChildren.length; b++) {
                var c = this._m_pChildren[b];
                c && 0 > c._m_nZOrder && c.visit(a)
            }
            if (this._m_pChildren) for (b = 0; b < this._m_pChildren.length; b++)(c = this._m_pChildren[b]) && 0 <= c._m_nZOrder && c.visit(a);
            this._m_pGrid && this._m_pGrid.isActive() && this._m_pGrid.afterDraw(this);
            a.restore()
        }
    },
    _setNodeDirtyForCache: function() {
        this._isNeedUpdate = this._isCacheDirty = !0
    }
});
cc = cc = cc || {};
cc.kSceneFade = parseInt("0xFADEFADE");
cc.TransitionEaseScene = cc.Class.extend({
    easeActionWithAction: function() {}
});
cc.kOrientationLeftOver = 0;
cc.kOrientationRightOver = 1;
cc.kOrientationUpOver = 0;
cc.kOrientationDownOver = 1;
cc.TransitionScene = cc.Scene.extend({
    _m_pInScene: null,
    _m_pOutScene: null,
    _m_fDuration: null,
    _m_bIsInSceneOnTop: !1,
    _m_bIsSendCleanupToScene: !1,
    _setNewScene: function() {
        this.unschedule(this._setNewScene);
        var a = cc.Director.sharedDirector();
        this._m_bIsSendCleanupToScene = a.isSendCleanupToScene();
        a.replaceScene(this._m_pInScene);
        cc.TouchDispatcher.sharedDispatcher().setDispatchEvents(!0);
        this._m_pOutScene.setIsVisible(!0)
    },
    _sceneOrder: function() {
        this._m_bIsInSceneOnTop = !0
    },
    draw: function() {
        this._super();
        this._m_bIsInSceneOnTop ? (this._m_pOutScene.visit(), this._m_pInScene.visit()) : (this._m_pInScene.visit(), this._m_pOutScene.visit())
    },
    onEnter: function() {
        this._super();
        this._m_pInScene.onEnter()
    },
    onExit: function() {
        this._super();
        this._m_pOutScene.onExit();
        this._m_pInScene.onEnterTransitionDidFinish()
    },
    cleanup: function() {
        this._super();
        this._m_bIsSendCleanupToScene && this._m_pOutScene.cleanup()
    },
    initWithDuration: function(a, b) {
        cc.Assert(null != b, "CCTransitionScene.initWithDuration() Argument scene must be non-nil");
        return this.init() ? (this._m_fDuration = a, this.setAnchorPoint(cc.ccp(0, 0)), this.setPosition(cc.ccp(0, 0)), this._m_pInScene = b, this._m_pOutScene = cc.Director.sharedDirector().getRunningScene(), cc.Assert(this._m_pInScene != this._m_pOutScene, "CCTransitionScene.initWithDuration() Incoming scene must be different from the outgoing scene"), cc.TouchDispatcher.sharedDispatcher().setDispatchEvents(!1), this._sceneOrder(), !0) : !1
    },
    finish: function() {
        this._m_pInScene.setIsVisible(!0);
        this._m_pInScene.setPosition(cc.ccp(0, 0));
        this._m_pInScene.setScale(1);
        this._m_pInScene.setRotation(0);
        this._m_pInScene.getCamera().restore();
        this._m_pOutScene.setIsVisible(!1);
        this._m_pOutScene.setPosition(cc.ccp(0, 0));
        this._m_pOutScene.setScale(1);
        this._m_pOutScene.setRotation(0);
        this._m_pOutScene.getCamera().restore();
        this.schedule(this._setNewScene, 0)
    },
    hideOutShowIn: function() {
        this._m_pInScene.setIsVisible(!0);
        this._m_pOutScene.setIsVisible(!1)
    }
});
cc.TransitionScene.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionScene;
    return null != c && c.initWithDuration(a, b) ? c: null
};
cc.TransitionSceneOriented = cc.TransitionScene.extend({
    _m_eOrientation: 0,
    initWithDuration: function(a, b, c) {
        this._super(a, b) && (this._m_eOrientation = c);
        return ! 0
    }
});
cc.TransitionSceneOriented.transitionWithDuration = function(a, b, c) {
    var d = new cc.TransitionSceneOriented;
    d.initWithDuration(a, b, c);
    return d
};
cc.TransitionRotoZoom = cc.TransitionScene.extend({
    ctor: function() {},
    onEnter: function() {
        this._super();
        this._m_pInScene.setScale(0.0010);
        this._m_pOutScene.setScale(1);
        this._m_pInScene.setAnchorPoint(cc.ccp(0.5, 0.5));
        this._m_pOutScene.setAnchorPoint(cc.ccp(0.5, 0.5));
        var a = cc.Sequence.actions(cc.Spawn.actions(cc.ScaleBy.actionWithDuration(this._m_fDuration / 2, 0.0010), cc.RotateBy.actionWithDuration(this._m_fDuration / 2, 720), null), cc.DelayTime.actionWithDuration(this._m_fDuration / 2), null);
        this._m_pOutScene.runAction(a);
        this._m_pInScene.runAction(cc.Sequence.actions(a.reverse(), cc.CallFunc.actionWithTarget(this, this.finish), null))
    }
});
cc.TransitionRotoZoom.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionRotoZoom;
    return null != c && c.initWithDuration(a, b) ? c: null
};
cc.TransitionJumpZoom = cc.TransitionScene.extend({
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize();
        this._m_pInScene.setScale(0.5);
        this._m_pInScene.setPosition(cc.ccp(a.width, 0));
        this._m_pInScene.setAnchorPoint(cc.ccp(0.5, 0.5));
        this._m_pOutScene.setAnchorPoint(cc.ccp(0.5, 0.5));
        var b = cc.JumpBy.actionWithDuration(this._m_fDuration / 4, cc.ccp( - a.width, 0), a.width / 4, 2),
        c = cc.ScaleTo.actionWithDuration(this._m_fDuration / 4, 1),
        a = cc.ScaleTo.actionWithDuration(this._m_fDuration / 4, 0.5),
        a = cc.Sequence.actions(a, b, null),
        b = cc.Sequence.actions(b, c, null),
        c = cc.DelayTime.actionWithDuration(this._m_fDuration / 2);
        this._m_pOutScene.runAction(a);
        this._m_pInScene.runAction(cc.Sequence.actions(c, b, cc.CallFunc.actionWithTarget(this, this.finish), null))
    }
});
cc.TransitionJumpZoom.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionJumpZoom;
    return null != c && c.initWithDuration(a, b) ? c: null
};
cc.TransitionMoveInL = cc.TransitionScene.extend({
    onEnter: function() {
        this._super();
        this.initScenes();
        var a = this.action();
        this._m_pInScene.runAction(cc.Sequence.actions(this.easeActionWithAction(a), cc.CallFunc.actionWithTarget(this, this.finish), null))
    },
    initScenes: function() {
        this._m_pInScene.setPosition(cc.ccp( - cc.Director.sharedDirector().getWinSize().width, 0))
    },
    action: function() {
        return cc.MoveTo.actionWithDuration(this._m_fDuration, cc.ccp(0, 0))
    },
    easeActionWithAction: function(a) {
        return cc.EaseOut.actionWithAction(a, 2)
    }
});
cc.TransitionMoveInL.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionMoveInL;
    return null != c && c.initWithDuration(a, b) ? c: null
};
cc.TransitionMoveInR = cc.TransitionMoveInL.extend({
    initScenes: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        this._m_pInScene.setPosition(cc.ccp(a.width, 0))
    }
});
cc.TransitionMoveInR.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionMoveInR;
    return null != c && c.initWithDuration(a, b) ? c: null
};
cc.TransitionMoveInT = cc.TransitionMoveInL.extend({
    initScenes: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        this._m_pInScene.setPosition(cc.ccp(a.height, 0))
    }
});
cc.TransitionMoveInT.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionMoveInT;
    return null != c && c.initWithDuration(a, b) ? c: null
};
cc.TransitionMoveInB = cc.TransitionMoveInL.extend({
    initScenes: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        this._m_pInScene.setPosition(cc.ccp(0, -a.height))
    }
});
cc.TransitionMoveInB.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionMoveInB;
    return null != c && c.initWithDuration(a, b) ? c: null
};
cc.ADJUST_FACTOR = 0.5;
cc.TransitionSlideInL = cc.TransitionScene.extend({
    _sceneOrder: function() {
        this._m_bIsInSceneOnTop = !1
    },
    ctor: function() {},
    onEnter: function() {
        this._super();
        this.initScenes();
        var a = this.action(),
        b = this.action(),
        a = this.easeActionWithAction(a),
        b = cc.Sequence.actions(this.easeActionWithAction(b), cc.CallFunc.actionWithTarget(this, this.finish), null);
        this._m_pInScene.runAction(a);
        this._m_pOutScene.runAction(b)
    },
    initScenes: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        this._m_pInScene.setPosition(cc.ccp( - (a.width - cc.ADJUST_FACTOR), 0))
    },
    action: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        return cc.MoveBy.actionWithDuration(this._m_fDuration, cc.ccp(a.width - cc.ADJUST_FACTOR, 0))
    },
    easeActionWithAction: function(a) {
        return cc.EaseOut.actionWithAction(a, 2)
    }
});
cc.TransitionSlideInL.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionSlideInL;
    return null != c && c.initWithDuration(a, b) ? c: null
};
cc.TransitionSlideInR = cc.TransitionSlideInL.extend({
    _sceneOrder: function() {
        this._m_bIsInSceneOnTop = !0
    },
    initScenes: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        this._m_pInScene.setPosition(cc.ccp(a.width - cc.ADJUST_FACTOR, 0))
    },
    action: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        return cc.MoveBy.actionWithDuration(this._m_fDuration, cc.ccp( - (a.width - cc.ADJUST_FACTOR), 0))
    }
});
cc.TransitionSlideInR.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionSlideInR;
    return null != c && c.initWithDuration(a, b) ? c: null
};
cc.TransitionSlideInB = cc.TransitionSlideInL.extend({
    _sceneOrder: function() {
        this._m_bIsInSceneOnTop = !1
    },
    initScenes: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        this._m_pInScene.setPosition(cc.ccp(0, a.height - cc.ADJUST_FACTOR))
    },
    action: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        return cc.MoveBy.actionWithDuration(this._m_fDuration, cc.ccp(0, -(a.height - cc.ADJUST_FACTOR)))
    }
});
cc.TransitionSlideInB.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionSlideInB;
    return null != c && c.initWithDuration(a, b) ? c: null
};
cc.TransitionSlideInT = cc.TransitionSlideInL.extend({
    _sceneOrder: function() {
        this._m_bIsInSceneOnTop = !0
    },
    initScenes: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        this._m_pInScene.setPosition(cc.ccp(0, -(a.height - cc.ADJUST_FACTOR)))
    },
    action: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        return cc.MoveBy.actionWithDuration(this._m_fDuration, cc.ccp(0, a.height - cc.ADJUST_FACTOR))
    }
});
cc.TransitionSlideInT.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionSlideInT;
    return null != c && c.initWithDuration(a, b) ? c: null
};
cc.TransitionShrinkGrow = cc.TransitionScene.extend({
    onEnter: function() {
        this._super();
        this._m_pInScene.setScale(0.0010);
        this._m_pOutScene.setScale(1);
        this._m_pInScene.setAnchorPoint(cc.ccp(2 / 3, 0.5));
        this._m_pOutScene.setAnchorPoint(cc.ccp(1 / 3, 0.5));
        var a = cc.ScaleTo.actionWithDuration(this._m_fDuration, 0.01);
        this._m_pInScene.runAction(this.easeActionWithAction(cc.ScaleTo.actionWithDuration(this._m_fDuration, 1)));
        this._m_pOutScene.runAction(cc.Sequence.actions(this.easeActionWithAction(a), cc.CallFunc.actionWithTarget(this, this.finish), null))
    },
    easeActionWithAction: function(a) {
        return cc.EaseOut.actionWithAction(a, 2)
    }
});
cc.TransitionShrinkGrow.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionShrinkGrow;
    return null != c && c.initWithDuration(a, b) ? c: null
};
cc.TransitionFlipX = cc.TransitionSceneOriented.extend({
    onEnter: function() {
        this._super();
        var a, b;
        this._m_pInScene.setIsVisible(!1);
        var c;
        this._m_eOrientation == cc.kOrientationRightOver ? (a = 90, c = 270, b = 90) : (a = -90, c = 90, b = -90);
        a = cc.Sequence.actions(cc.DelayTime.actionWithDuration(this._m_fDuration / 2), cc.Show.action(), cc.OrbitCamera.actionWithDuration(this._m_fDuration / 2, 1, 0, c, a, 0, 0), cc.CallFunc.actionWithTarget(this, this.finish), null);
        b = cc.Sequence.actions(cc.OrbitCamera.actionWithDuration(this._m_fDuration / 2, 1, 0, 0, b, 0, 0), cc.Hide.action(), cc.DelayTime.actionWithDuration(this._m_fDuration / 2), null);
        this._m_pInScene.runAction(a);
        this._m_pOutScene.runAction(b)
    }
});
cc.TransitionFlipX.transitionWithDuration = function(a, b, c) {
    null == c && (c = cc.kOrientationRightOver);
    var d = new cc.TransitionFlipX;
    d.initWithDuration(a, b, c);
    return d
};
cc.TransitionFlipY = cc.TransitionSceneOriented.extend({
    onEnter: function() {
        this._super();
        var a, b;
        this._m_pInScene.setIsVisible(!1);
        var c;
        this._m_eOrientation == cc.kOrientationUpOver ? (a = 90, c = 270, b = 90) : (a = -90, c = 90, b = -90);
        a = cc.Sequence.actions(cc.DelayTime.actionWithDuration(this._m_fDuration / 2), cc.Show.action(), cc.OrbitCamera.actionWithDuration(this._m_fDuration / 2, 1, 0, c, a, 90, 0), cc.CallFunc.actionWithTarget(this, this.finish), null);
        b = cc.Sequence.actions(cc.OrbitCamera.actionWithDuration(this._m_fDuration / 2, 1, 0, 0, b, 90, 0), cc.Hide.action(), cc.DelayTime.actionWithDuration(this._m_fDuration / 2), null);
        this._m_pInScene.runAction(a);
        this._m_pOutScene.runAction(b)
    }
});
cc.TransitionFlipY.transitionWithDuration = function(a, b, c) {
    null == c && (c = cc.kOrientationUpOver);
    var d = new cc.TransitionFlipY;
    d.initWithDuration(a, b, c);
    return d
};
cc.TransitionFlipAngular = cc.TransitionSceneOriented.extend({
    onEnter: function() {
        this._super();
        var a, b;
        this._m_pInScene.setIsVisible(!1);
        var c;
        this._m_eOrientation == cc.kOrientationRightOver ? (a = 90, c = 270, b = 90) : (a = -90, c = 90, b = -90);
        a = cc.Sequence.actions(cc.DelayTime.actionWithDuration(this._m_fDuration / 2), cc.Show.action(), cc.OrbitCamera.actionWithDuration(this._m_fDuration / 2, 1, 0, c, a, -45, 0), cc.CallFunc.actionWithTarget(this, this.finish), null);
        b = cc.Sequence.actions(cc.OrbitCamera.actionWithDuration(this._m_fDuration / 2, 1, 0, 0, b, 45, 0), cc.Hide.action(), cc.DelayTime.actionWithDuration(this._m_fDuration / 2), null);
        this._m_pInScene.runAction(a);
        this._m_pOutScene.runAction(b)
    }
});
cc.TransitionFlipAngular.transitionWithDuration = function(a, b, c) {
    null == c && (c = cc.kOrientationRightOver);
    var d = new cc.TransitionFlipAngular;
    d.initWithDuration(a, b, c);
    return d
};
cc.TransitionZoomFlipX = cc.TransitionSceneOriented.extend({
    onEnter: function() {
        this._super();
        var a, b;
        this._m_pInScene.setIsVisible(!1);
        var c;
        this._m_eOrientation == cc.kOrientationRightOver ? (a = 90, c = 270, b = 90) : (a = -90, c = 90, b = -90);
        a = cc.Sequence.actions(cc.DelayTime.actionWithDuration(this._m_fDuration / 2), cc.Spawn.actions(cc.OrbitCamera.actionWithDuration(this._m_fDuration / 2, 1, 0, c, a, 0, 0), cc.ScaleTo.actionWithDuration(this._m_fDuration / 2, 1), cc.Show.action(), null), cc.CallFunc.actionWithTarget(this, this.finish), null);
        b = cc.Sequence.actions(cc.Spawn.actions(cc.OrbitCamera.actionWithDuration(this._m_fDuration / 2, 1, 0, 0, b, 0, 0), cc.ScaleTo.actionWithDuration(this._m_fDuration / 2, 0.5), null), cc.Hide.action(), cc.DelayTime.actionWithDuration(this._m_fDuration / 2), null);
        this._m_pInScene.setScale(0.5);
        this._m_pInScene.runAction(a);
        this._m_pOutScene.runAction(b)
    }
});
cc.TransitionZoomFlipX.transitionWithDuration = function(a, b, c) {
    null == c && (c = cc.kOrientationRightOver);
    var d = new cc.TransitionZoomFlipX;
    d.initWithDuration(a, b, c);
    return d
};
cc.TransitionZoomFlipY = cc.TransitionSceneOriented.extend({
    onEnter: function() {
        this._super();
        var a, b;
        this._m_pInScene.setIsVisible(!1);
        var c;
        this._m_eOrientation == cc.kOrientationUpOver ? (a = 90, c = 270, b = 90) : (a = -90, c = 90, b = -90);
        a = cc.Sequence.actions(cc.DelayTime.actionWithDuration(this._m_fDuration / 2), cc.Spawn.actions(cc.OrbitCamera.actionWithDuration(this._m_fDuration / 2, 1, 0, c, a, 90, 0), cc.ScaleTo.actionWithDuration(this._m_fDuration / 2, 1), cc.Show.action(), null), cc.CallFunc.actionWithTarget(this, this.finish), null);
        b = cc.Sequence.actions(cc.Spawn.actions(cc.OrbitCamera.actionWithDuration(this._m_fDuration / 2, 1, 0, 0, b, 90, 0), cc.ScaleTo.actionWithDuration(this._m_fDuration / 2, 0.5), null), cc.Hide.action(), cc.DelayTime.actionWithDuration(this._m_fDuration / 2), null);
        this._m_pInScene.setScale(0.5);
        this._m_pInScene.runAction(a);
        this._m_pOutScene.runAction(b)
    }
});
cc.TransitionZoomFlipY.transitionWithDuration = function(a, b, c) {
    null == c && (c = cc.kOrientationUpOver);
    var d = new cc.TransitionZoomFlipY;
    d.initWithDuration(a, b, c);
    return d
};
cc.TransitionZoomFlipAngular = cc.TransitionSceneOriented.extend({
    onEnter: function() {
        this._super();
        var a, b;
        this._m_pInScene.setIsVisible(!1);
        var c;
        this._m_eOrientation == cc.kOrientationRightOver ? (a = 90, c = 270, b = 90) : (a = -90, c = 90, b = -90);
        a = cc.Sequence.actions(cc.DelayTime.actionWithDuration(this._m_fDuration / 2), cc.Spawn.actions(cc.OrbitCamera.actionWithDuration(this._m_fDuration / 2, 1, 0, c, a, -45, 0), cc.ScaleTo.actionWithDuration(this._m_fDuration / 2, 1), cc.Show.action(), null), cc.Show.action(), cc.CallFunc.actionWithTarget(this, this.finish), null);
        b = cc.Sequence.actions(cc.Spawn.actions(cc.OrbitCamera.actionWithDuration(this._m_fDuration / 2, 1, 0, 0, b, 45, 0), cc.ScaleTo.actionWithDuration(this._m_fDuration / 2, 0.5), null), cc.Hide.action(), cc.DelayTime.actionWithDuration(this._m_fDuration / 2), null);
        this._m_pInScene.setScale(0.5);
        this._m_pInScene.runAction(a);
        this._m_pOutScene.runAction(b)
    }
});
cc.TransitionZoomFlipAngular.transitionWithDuration = function(a, b, c) {
    null == c && (c = cc.kOrientationRightOver);
    var d = new cc.TransitionZoomFlipAngular;
    d.initWithDuration(a, b, c);
    return d
};
cc.TransitionFade = cc.TransitionScene.extend({
    _m_tColor: new cc.Color3B,
    ctor: function() {},
    onEnter: function() {
        this._super();
        var a = cc.LayerColor.layerWithColor(this._m_tColor);
        this._m_pInScene.setIsVisible(!1);
        this.addChild(a, 2, cc.kSceneFade);
        var a = this.getChildByTag(cc.kSceneFade),
        b = cc.Sequence.actions(cc.FadeIn.actionWithDuration(this._m_fDuration / 2), cc.CallFunc.actionWithTarget(this, this.hideOutShowIn), cc.FadeOut.actionWithDuration(this._m_fDuration / 2), cc.CallFunc.actionWithTarget(this, this.finish), null);
        a.runAction(b)
    },
    onExit: function() {
        this._super();
        this.removeChildByTag(cc.kSceneFade, !1)
    },
    initWithDuration: function(a, b, c) {
        if ("undefined" == c || null == c) c = cc.BLACK();
        this._super(a, b) && (this._m_tColor.r = c.r, this._m_tColor.g = c.g, this._m_tColor.b = c.b, this._m_tColor.a = 0);
        return ! 0
    }
});
cc.TransitionFade.transitionWithDuration = function(a, b, c) {
    var d = new cc.TransitionFade;
    d.initWithDuration(a, b, c);
    return d
};
cc.TransitionCrossFade = cc.TransitionScene.extend({
    onEnter: function() {
        this._super();
        var a = new cc.Color4B(0, 0, 0, 0),
        b = cc.Director.sharedDirector().getWinSize(),
        a = cc.LayerColor.layerWithColor(a),
        c = cc.RenderTexture.renderTextureWithWidthAndHeight(b.width, b.height);
        if (null != c) {
            c.getSprite().setAnchorPoint(cc.ccp(0.5, 0.5));
            c.setPosition(cc.ccp(b.width / 2, b.height / 2));
            c.setAnchorPoint(cc.ccp(0.5, 0.5));
            c.begin();
            this._m_pInScene.visit();
            c.end();
            var d = cc.RenderTexture.renderTextureWithWidthAndHeight(b.width, b.height);
            d.getSprite().setAnchorPoint(cc.ccp(0.5, 0.5));
            d.setPosition(cc.ccp(b.width / 2, b.height / 2));
            d.setAnchorPoint(cc.ccp(0.5, 0.5));
            d.begin();
            this._m_pOutScene.visit();
            d.end();
            var b = new cc.BlendFunc(cc.GL_ONE, cc.GL_ONE),
            e = cc.BlendFunc(cc.GL_SRC_ALPHA, cc.GL_ONE_MINUS_SRC_ALPHA);
            c.getSprite().setBlendFunc(b);
            d.getSprite().setBlendFunc(e);
            a.addChild(c);
            a.addChild(d);
            c.getSprite().setOpacity(255);
            d.getSprite().setOpacity(255);
            c = cc.Sequence.actions(cc.FadeTo.actionWithDuration(this._m_fDuration, 0), cc.CallFunc.actionWithTarget(this, this.hideOutShowIn), cc.CallFunc.actionWithTarget(this, this.finish), null);
            d.getSprite().runAction(c);
            this.addChild(a, 2, cc.kSceneFade)
        }
    },
    onExit: function() {
        this.removeChildByTag(cc.kSceneFade, !1);
        this._super()
    },
    draw: function() {}
});
cc.TransitionCrossFade.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionCrossFade;
    c.initWithDuration(a, b);
    return c
};
cc.TransitionTurnOffTiles = cc.TransitionScene.extend({
    _sceneOrder: function() {
        this._m_bIsInSceneOnTop = !1
    },
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        a = this.easeActionWithAction(cc.TurnOffTiles.actionWithSize(cc.ccg(12 * (a.width / a.height), 12), this._m_fDuration));
        this._m_pOutScene.runAction(cc.Sequence.actions(a, cc.CallFunc.actionWithTarget(this, this.finish), cc.StopGrid.action(), null))
    },
    easeActionWithAction: function(a) {
        return a
    }
});
cc.TransitionTurnOffTiles.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionTurnOffTiles;
    return null != c && c.initWithDuration(a, b) ? c: null
};
cc.TransitionSplitCols = cc.TransitionScene.extend({
    onEnter: function() {
        this._super();
        this._m_pInScene.setIsVisible(!1);
        var a = this.action(),
        a = cc.Sequence.actions(a, cc.CallFunc.actionWithTarget(this, this.hideOutShowIn), a.reverse(), null);
        this.runAction(cc.Sequence.actions(this.easeActionWithAction(a), cc.CallFunc.actionWithTarget(this, this.finish), cc.StopGrid.action(), null))
    },
    easeActionWithAction: function(a) {
        return cc.EaseInOut.actionWithAction(a, 3)
    },
    action: function() {
        return cc.SplitCols.actionWithCols(3, this._m_fDuration / 2)
    }
});
cc.TransitionSplitCols.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionSplitCols;
    return null != c && c.initWithDuration(a, b) ? c: null
};
cc.TransitionSplitRows = cc.TransitionSplitCols.extend({
    action: function() {
        return cc.SplitRows.actionWithRows(3, this._m_fDuration / 2)
    }
});
cc.TransitionSplitRows.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionSplitRows;
    return null != c && c.initWithDuration(a, b) ? c: null
};
cc.TransitionFadeTR = cc.TransitionScene.extend({
    _sceneOrder: function() {
        this._m_bIsInSceneOnTop = !1
    },
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        a = this.actionWithSize(cc.ccg(12 * (a.width / a.height), 12));
        this._m_pOutScene.runAction(cc.Sequence.actions(this.easeActionWithAction(a), cc.CallFunc.actionWithTarget(this, this.finish), cc.StopGrid.action(), null))
    },
    easeActionWithAction: function(a) {
        return a
    },
    actionWithSize: function(a) {
        return cc.FadeOutTRTiles.actionWithSize(a, this._m_fDuration)
    }
});
cc.TransitionFadeTR.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionFadeTR;
    return null != c && c.initWithDuration(a, b) ? c: null
};
cc.TransitionFadeBL = cc.TransitionFadeTR.extend({
    actionWithSize: function(a) {
        return cc.FadeOutBLTiles.actionWithSize(a, this._m_fDuration)
    }
});
cc.TransitionFadeBL.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionFadeBL;
    return null != c && c.initWithDuration(a, b) ? c: null
};
cc.TransitionFadeUp = cc.TransitionFadeTR.extend({
    actionWithSize: function(a) {
        return cc.FadeOutUpTiles.actionWithSize(a, this._m_fDuration)
    }
});
cc.TransitionFadeUp.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionFadeUp;
    return null != c && c.initWithDuration(a, b) ? c: null
};
cc.TransitionFadeDown = cc.TransitionFadeTR.extend({
    actionWithSize: function(a) {
        return cc.FadeOutDownTiles.actionWithSize(a, this._m_fDuration)
    }
});
cc.TransitionFadeDown.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionFadeDown;
    return null != c && c.initWithDuration(a, b) ? c: null
};
cc = cc = cc || {};
cc.kSceneRadial = 49153;
cc.TransitionRadialCCW = cc.TransitionScene.extend({
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.RenderTexture.renderTextureWithWidthAndHeight(a.width, a.height);
        null != b && (b.getSprite().setAnchorPoint(cc.ccp(0.5, 0.5)), b.setPosition(cc.ccp(a.width / 2, a.height / 2)), b.setAnchorPoint(cc.ccp(0.5, 0.5)), b.clear(0, 0, 0, 1), b.begin(), this._m_pOutScene.visit(), b.end(), this.hideOutShowIn(), b = cc.ProgressTimer.progressWithTexture(b.getSprite().getTexture()), b.getSprite().setFlipY(!0), b.setType(_radialType()), b.setPercentage(100), b.setPosition(cc.ccp(a.width / 2, a.height / 2)), b.setAnchorPoint(cc.ccp(0.5, 0.5)), a = cc.Sequence.actions(cc.ProgressFromTo.actionWithDuration(this._m_fDuration, 100, 0), cc.CallFunc.actionWithTarget(this, cc.TransitionScene.finish), null), b.runAction(a), this.addChild(b, 2, cc.kSceneRadial))
    },
    onExit: function() {
        this.removeChildByTag(cc.kSceneRadial, !1);
        this._super()
    },
    _sceneOrder: function() {
        this._m_bIsInSceneOnTop = !1
    },
    _radialType: function() {
        return cc.kCCProgressTimerTypeRadialCCW
    }
});
cc.TransitionRadialCW = cc.TransitionRadialCCW.extend({
    _radialType: function() {
        return cc.kCCProgressTimerTypeRadialCW
    }
});
cc.TransitionRadialCCW.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionRadialCCW;
    c.initWithDuration(a, b);
    return c
};
cc.TransitionRadialCW.transitionWithDuration = function(a, b) {
    var c = new cc.TransitionRadialCW;
    c.initWithDuration(a, b);
    return c
};
cc = cc = cc || {};
cc.TransitionPageTurn = cc.TransitionScene.extend({
    _m_bBack: null,
    initWithDuration: function(a, b, c) {
        this._m_bBack = c;
        this._super(a, b);
        return ! 0
    },
    actionWithSize: function(a) {
        return this._m_bBack ? cc.ReverseTime.actionWithAction(this._super(a, this._m_fDuration)) : this._super(a, this._m_fDuration)
    },
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b;
        a.width > a.height ? (a = 16, b = 12) : (a = 12, b = 16);
        a = this.actionWithSize(cc.ccg(a, b));
        this._m_bBack ? (this._m_pInScene.setIsVisible(!1), this._m_pInScene.runAction(cc.Sequence.actions(cc.Show.action(), a, cc.CallFunc.actionWithTarget(this, cc.TransitionScene.finish), cc.StopGrid.action(), null))) : this._m_pOutScene.runAction(cc.Sequence.actions(a, cc.CallFunc.actionWithTarget(this, cc.TransitionScene.finish), cc.StopGrid.action(), null))
    },
    _sceneOrder: function() {
        this.m_bIsInSceneOnTop = this._m_bBack
    }
});
cc.TransitionPageTurn.transitionWithDuration = function(a, b, c) {
    var d = new cc.TransitionPageTurn;
    d.initWithDuration(a, b, c);
    return d
};
cc = cc = cc || {};
cc.SpriteIndexNotInitialized = "0xffffffff";
cc.imageRGBAColor = function(a, b) {
    if (!a) return null;
    var c = document.createElement("canvas"),
    d = c.getContext("2d");
    c.width = a.width;
    c.height = a.height;
    d.drawImage(a, 0, 0, a.width, a.height, 0, 0, c.width, c.height);
    try {
        var e = d.getImageData(0, 0, a.width, a.height)
    } catch(f) {
        e = d.getImageData(0, 0, a.width - 1, a.height - 1)
    }
    if (b instanceof cc.Color3B) for (var g = b.r / 255,
    h = b.g / 255,
    i = b.b / 255,
    j = 0; j < e.data.length / 4; j++) e.data[4 * j] *= g,
    e.data[4 * j + 1] *= h,
    e.data[4 * j + 2] *= i;
    else if (b instanceof cc.Color4F) for (j = 0; j < e.data.length / 4; j++) e.data[4 * j] *= b.r,
    e.data[4 * j + 1] *= b.g,
    e.data[4 * j + 2] *= b.b,
    e.data[4 * j + 3] *= b.a;
    d.putImageData(e, 0, 0, 0, 0, c.width, c.height);
    return c.toDataURL()
};
cc.pixelsDataRGBAColor = function(a, b) {
    var c = document.createElement("canvas").getContext("2d").createImageData(a.width, a.height);
    if (b instanceof cc.Color3B) for (var d = b.r / 255,
    e = b.g / 255,
    f = b.b / 255,
    g = 0; g < a.data.length / 4; g++) c.data[4 * g] = a.data[4 * g] * d,
    c.data[4 * g + 1] = a.data[4 * g + 1] * e,
    c.data[4 * g + 2] = a.data[4 * g + 2] * f;
    else if (b instanceof cc.Color4F) for (g = 0; g < a.data.length / 4; g++) c.data[4 * g] = a.data[4 * g] * b.r,
    c.data[4 * g + 1] = a.data[4 * g + 1] * b.g,
    c.data[4 * g + 2] = a.data[4 * g + 2] * b.b,
    c.data[4 * g + 3] = a.data[4 * g + 3] * b.a;
    return c
};
cc.getImagePixelsData = function(a, b, c) {
    var d = document.createElement("canvas"),
    e = d.getContext("2d");
    d.width = c.width;
    d.height = c.height;
    e.drawImage(a, b.x, b.y, c.width, c.height);
    return e.getImageData(0, 0, d.width, d.height)
};
cc.cutImageByCanvas = function(a, b, c) {
    var d = document.createElement("canvas"),
    e = d.getContext("2d");
    d.width = c.width;
    d.height = c.height;
    e.drawImage(a, b.x, b.y, c.width, c.height, 0, 0, c.width, c.height);
    return d
};
cc.generateTextureCacheForColor = function(a) {
    var b = a.width,
    c = a.height,
    d = [],
    e = document.createElement("canvas");
    e.width = b;
    e.height = c;
    var f = e.getContext("2d");
    f.drawImage(a, 0, 0);
    e = document.createElement("canvas");
    e.width = b;
    e.height = c;
    for (var e = e.getContext("2d"), f = f.getImageData(0, 0, b, c).data, g = 0; 4 > g; g++) {
        var h = document.createElement("canvas");
        h.width = b;
        h.height = c;
        var i = h.getContext("2d");
        e.drawImage(a, 0, 0);
        for (var j = e.getImageData(0, 0, b, c), l = j.data, k = 0; k < f.length; k += 4) l[k] = 0 === g ? f[k] : 0,
        l[k + 1] = 1 === g ? f[k + 1] : 0,
        l[k + 2] = 2 === g ? f[k + 2] : 0,
        l[k + 3] = f[k + 3];
        i.putImageData(j, 0, 0);
        d.push(h)
    }
    return d
};
cc.generateTintImage = function(a, b, c, d) {
    d || (d = new cc.Rect, d.size = new cc.Size(a.width, a.height));
    a = c instanceof cc.Color4F ? cc.ccc3(255 * c.r, 255 * c.g, 255 * c.b) : c;
    c = document.createElement("canvas");
    c.width = d.size.width;
    c.height = d.size.height;
    var e = c.getContext("2d");
    e.globalAlpha = 1;
    e.globalCompositeOperation = "copy";
    e.drawImage(b[3], d.origin.x, d.origin.y, d.size.width, d.size.height, 0, 0, d.size.width, d.size.height);
    e.globalCompositeOperation = "lighter";
    0 < a.r && (e.globalAlpha = a.r / 255, e.drawImage(b[0], d.origin.x, d.origin.y, d.size.width, d.size.height, 0, 0, d.size.width, d.size.height));
    0 < a.g && (e.globalAlpha = a.g / 255, e.drawImage(b[1], d.origin.x, d.origin.y, d.size.width, d.size.height, 0, 0, d.size.width, d.size.height));
    0 < a.b && (e.globalAlpha = a.b / 255, e.drawImage(b[2], d.origin.x, d.origin.y, d.size.width, d.size.height, 0, 0, d.size.width, d.size.height));
    return c
};
cc.HONOR_PARENT_TRANSFORM_TRANSLATE = 1;
cc.HONOR_PARENT_TRANSFORM_ROTATE = 2;
cc.HONOR_PARENT_TRANSFORM_SCALE = 4;
cc.HONOR_PARENT_TRANSFORM_SKEW = 8;
cc.HONOR_PARENT_TRANSFORM_ALL = cc.HONOR_PARENT_TRANSFORM_TRANSLATE | cc.HONOR_PARENT_TRANSFORM_ROTATE | cc.HONOR_PARENT_TRANSFORM_SCALE | cc.HONOR_PARENT_TRANSFORM_SKEW;
function transformValues_(a, b, c, d, e, f) {
    this.pos = a;
    this.scale = b;
    this.rotation = c;
    this.skew = d;
    this.ap = e;
    this.visible = f
}
cc.RENDER_IN_SUBPIXEL = function(a) {
    return cc.SPRITEBATCHNODE_RENDER_SUBPIXEL ? a: parseInt(a)
};
cc.Sprite = cc.Node.extend({
    _m_pobTextureAtlas: null,
    _m_uAtlasIndex: 0,
    _m_pobBatchNode: null,
    _m_eHonorParentTransform: null,
    _m_bDirty: null,
    _m_bRecursiveDirty: null,
    _m_bHasChildren: null,
    _m_sBlendFunc: new cc.BlendFunc,
    _m_pobTexture: new cc.Texture2D,
    _m_originalTexture: null,
    _m_bUsesBatchNode: null,
    _m_obRect: new cc.Rect,
    _m_obRectInPixels: cc.RectZero(),
    _m_bRectRotated: null,
    _m_obOffsetPositionInPixels: cc.PointZero(),
    _m_obUnflippedOffsetPositionFromCenter: cc.PointZero(),
    _m_sQuad: cc.V3F_C4B_T2F_QuadZero(),
    m_sColorUnmodified: null,
    _m_bOpacityModifyRGB: null,
    _m_bFlipX: null,
    _m_bFlipY: null,
    _m_nOpacity: 255,
    ctor: function(a) {
        this._super();
        if (a) if ("string" == typeof a) this.initWithSpriteFrame(cc.SpriteFrameCache.sharedSpriteFrameCache().spriteFrameByName(a));
        else if ("object" == typeof a) if (a instanceof cc.SpriteFrame) this.initWithSpriteFrame(a);
        else if (a instanceof cc.SpriteBatchNode) {
            if (1 < arguments.length) {
                var b = arguments[1];
                b instanceof cc.Rect && this.initWithBatchNode(a, b)
            }
        } else a instanceof HTMLImageElement || a instanceof HTMLCanvasElement ? this.initWithTexture(a) : a instanceof cc.Texture2D && this.initWithTexture(a)
    },
    isDirty: function() {
        return this._m_bDirty
    },
    setDirty: function(a) {
        this._m_bDirty = a
    },
    getQuad: function() {
        return this._m_sQuad
    },
    isTextureRectRotated: function() {
        return this._m_bRectRotated
    },
    getAtlasIndex: function() {
        return this._m_uAtlasIndex
    },
    setAtlasIndex: function(a) {
        this._m_uAtlasIndex = a
    },
    getTextureRect: function() {
        return new cc.Rect(this._m_obRect)
    },
    isUsesBatchNode: function() {
        return this._m_bUsesBatchNode
    },
    setUsesSpriteBatchNode: function(a) {
        this._m_bUsesBatchNode = a
    },
    getTextureAtlas: function() {
        return this._m_pobTextureAtlas
    },
    setTextureAtlas: function(a) {
        this._m_pobTextureAtlas = a
    },
    getSpriteBatchNode: function() {
        return this._m_pobBatchNode
    },
    setSpriteBatchNode: function(a) {
        this._m_pobBatchNode = a
    },
    getHonorParentTransform: function() {
        return this._m_eHonorParentTransform
    },
    setHonorParentTransform: function(a) {
        this._m_eHonorParentTransform = a
    },
    getOffsetPositionInPixels: function() {
        return new cc.Point(this._m_obOffsetPositionInPixels.x, this._m_obOffsetPositionInPixels.y)
    },
    getBlendFunc: function() {
        return this._m_sBlendFunc
    },
    setBlendFunc: function(a) {
        this._m_sBlendFunc = a
    },
    initWithBatchNode: function(a, b) {
        return this.initWithTexture(a.getTexture(), b) ? (this.useBatchNode(a), !0) : !1
    },
    initWithBatchNodeRectInPixels: function(a, b) {
        return this.initWithTexture(a.getTexture()) ? (this.setTextureRectInPixels(b, !1, b.size), this.useBatchNode(a), !0) : !1
    },
    init: function() {
        this._m_bDirty = this._m_bRecursiveDirty = !1;
        this.useSelfRender();
        this._m_bOpacityModifyRGB = !0;
        this._m_nOpacity = 255;
        this._m_sColor = cc.WHITE();
        this._m_sColorUnmodified = cc.WHITE();
        this._m_sBlendFunc.src = cc.BLEND_SRC;
        this._m_sBlendFunc.dst = cc.BLEND_DST;
        this.setTexture(null);
        this._m_bFlipX = this._m_bFlipY = !1;
        this.setAnchorPoint(cc.ccp(0.5, 0.5));
        this._m_obOffsetPositionInPixels = cc.PointZero();
        this._m_eHonorParentTransform = cc.HONOR_PARENT_TRANSFORM_ALL;
        this._m_bHasChildren = !1;
        var a = new cc.Color4B(255, 255, 255, 255);
        this._m_sQuad.bl.colors = a;
        this._m_sQuad.br.colors = a;
        this._m_sQuad.tl.colors = a;
        this._m_sQuad.tr.colors = a;
        this.setTextureRectInPixels(cc.RectZero(), !1, cc.SizeZero());
        return ! 0
    },
    initWithTexture: function(a, b) {
        var c = arguments.length;
        if (0 == c) throw "Sprite.initWithTexture(): Argument must be non-nil ";
        cc.Assert(null != a, "");
        if (1 == c) if (b = new cc.Rect, a instanceof cc.Texture2D) b.size = a.getContentSize();
        else if (a instanceof HTMLImageElement || a instanceof HTMLCanvasElement) b.size = new cc.Size(a.width, a.height);
        cc.renderContextType == cc.kCanvas && (this._m_originalTexture = a);
        this.init();
        this.setTexture(a);
        this.setTextureRect(b);
        return ! 0
    },
    initWithFile: function(a, b) {
        var c = arguments.length;
        cc.Assert(null != a, "");
        var d = cc.TextureCache.sharedTextureCache().textureForKey(a);
        d || (d = cc.TextureCache.sharedTextureCache().addImage(a));
        switch (c) {
        case 1:
            return d ? (b = cc.RectZero(), b.size = cc.renderContextType == cc.kCanvas ? new cc.Size(d.width, d.height) : d.getContentSize(), this.initWithTexture(d, b)) : !1;
        case 2:
            return d ? this.initWithTexture(d, b) : !1;
        default:
            throw "initWithFile():Argument must be non-nil ";
        }
    },
    initWithSpriteFrame: function(a) {
        cc.Assert(null != a, "");
        var b = this.initWithTexture(a.getTexture(), a.getRect());
        this.setDisplayFrame(a);
        return b
    },
    initWithSpriteFrameName: function(a) {
        cc.Assert(null != a, "");
        return this.initWithSpriteFrame(cc.SpriteFrameCache.sharedSpriteFrameCache().spriteFrameByName(a))
    },
    useSelfRender: function() {
        this._m_uAtlasIndex = cc.SpriteIndexNotInitialized;
        this._m_bUsesBatchNode = !1;
        this._m_pobBatchNode = this._m_pobTextureAtlas = null;
        this._m_bDirty = this._m_bRecursiveDirty = !1;
        var a = 0 + this._m_obOffsetPositionInPixels.x,
        b = 0 + this._m_obOffsetPositionInPixels.y,
        c = a + this._m_obRectInPixels.size.width,
        d = b + this._m_obRectInPixels.size.height;
        this._m_sQuad.bl.vertices = cc.vertex3(a, b, 0);
        this._m_sQuad.br.vertices = cc.vertex3(c, b, 0);
        this._m_sQuad.tl.vertices = cc.vertex3(a, d, 0);
        this._m_sQuad.tr.vertices = cc.vertex3(c, d, 0)
    },
    useBatchNode: function(a) {
        this._m_bUsesBatchNode = !0;
        this._m_pobTextureAtlas = a.getTextureAtlas();
        this._m_pobBatchNode = a
    },
    setTextureRect: function(a) {
        a = cc.RECT_POINTS_TO_PIXELS(a);
        this.setTextureRectInPixels(a, !1, a.size)
    },
    setTextureRectInPixels: function(a, b, c) {
        this._m_obRectInPixels = a;
        this._m_obRect = cc.RECT_PIXELS_TO_POINTS(a);
        this._m_bRectRotated = b;
        this.setContentSizeInPixels(c);
        this._updateTextureCoords(this._m_obRectInPixels);
        a = this._m_obUnflippedOffsetPositionFromCenter;
        this._m_obOffsetPositionInPixels.x = a.x + (this._m_tContentSizeInPixels.width - this._m_obRectInPixels.size.width) / 2;
        this._m_obOffsetPositionInPixels.y = a.y + (this._m_tContentSizeInPixels.height - this._m_obRectInPixels.size.height) / 2;
        if (this._m_bUsesBatchNode) this._m_bDirty = !0;
        else {
            var a = 0 + this._m_obOffsetPositionInPixels.x,
            b = 0 + this._m_obOffsetPositionInPixels.y,
            c = a + this._m_obRectInPixels.size.width,
            d = b + this._m_obRectInPixels.size.height;
            this._m_sQuad.bl.vertices = cc.vertex3(a, b, 0);
            this._m_sQuad.br.vertices = cc.vertex3(c, b, 0);
            this._m_sQuad.tl.vertices = cc.vertex3(a, d, 0);
            this._m_sQuad.tr.vertices = cc.vertex3(c, d, 0)
        }
    },
    _updateTextureCoords: function(a) {
        if (cc.renderContextType == cc.kWebGL) {
            var b = this._m_bUsesBatchNode ? this._m_pobTextureAtlas.getTexture() : this._m_pobTexture;
            if (b) {
                var c = b.getPixelsWide(),
                d = b.getPixelsHigh(),
                e;
                this._m_bRectRotated ? (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (b = (2 * a.origin.x + 1) / (2 * c), c = b + (2 * a.size.height - 2) / (2 * c), e = (2 * a.origin.y + 1) / (2 * d), a = e + (2 * a.size.width - 2) / (2 * d)) : (b = a.origin.x / c, c = b + a.size.height / c, e = a.origin.y / d, a = e + a.size.width / d), this._m_bFlipX && cc.SWAP(e, a), this._m_bFlipY && cc.SWAP(b, c), this._m_sQuad.bl.texCoords.u = b, this._m_sQuad.bl.texCoords.v = e, this._m_sQuad.br.texCoords.u = b, this._m_sQuad.br.texCoords.v = a, this._m_sQuad.tl.texCoords.u = c, this._m_sQuad.tl.texCoords.v = e, this._m_sQuad.tr.texCoords.u = c, this._m_sQuad.tr.texCoords.v = a) : (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (b = (2 * a.origin.x + 1) / (2 * c), c = b + (2 * a.size.width - 2) / (2 * c), e = (2 * a.origin.y + 1) / (2 * d), a = e + (2 * a.size.height - 2) / (2 * d)) : (b = a.origin.x / c, c = b + a.size.width / c, e = a.origin.y / d, a = e + a.size.height / d), this._m_bFlipX && cc.SWAP(b, c), this._m_bFlipY && cc.SWAP(e, a), this._m_sQuad.bl.texCoords.u = b, this._m_sQuad.bl.texCoords.v = a, this._m_sQuad.br.texCoords.u = c, this._m_sQuad.br.texCoords.v = a, this._m_sQuad.tl.texCoords.u = b, this._m_sQuad.tl.texCoords.v = e, this._m_sQuad.tr.texCoords.u = c, this._m_sQuad.tr.texCoords.v = e)
            }
        }
    },
    updateTransform: function() {
        cc.Assert(this._m_bUsesBatchNode, "");
        if (this._m_bDirty) {
            var a = new cc.AffineTransform;
            if (this._m_bIsVisible) {
                if (!this._m_pParent || this._m_pParent == this._m_pobBatchNode) {
                    var b = -cc.DEGREES_TO_RADIANS(this._m_fRotation),
                    c = Math.cos(b),
                    b = Math.sin(b),
                    a = cc.AffineTransformMake(c * this._m_fScaleX, b * this._m_fScaleX, -b * this._m_fScaleY, c * this._m_fScaleY, this._m_tPositionInPixels.x, this._m_tPositionInPixels.y);
                    if (this._m_fSkewX || this._m_fSkewY) c = cc.AffineTransformMake(1, Math.tan(cc.DEGREES_TO_RADIANS(this._m_fSkewY)), Math.tan(cc.DEGREES_TO_RADIANS(this._m_fSkewX)), 1, 0, 0),
                    a = cc.AffineTransformConcat(c, a);
                    a = cc.AffineTransformTranslate(a, -this._m_tAnchorPointInPixels.x, -this._m_tAnchorPointInPixels.y)
                } else {
                    a = cc.AffineTransformIdentity();
                    c = cc.HONOR_PARENT_TRANSFORM_ALL;
                    for (b = this; b && b != this._m_pobBatchNode; b = b.getParent()) {
                        var d = new transformValues_;
                        b._getTransformValues(d);
                        if (!d.visible) {
                            this._m_sQuad.br.vertices = this._m_sQuad.tl.vertices = this._m_sQuad.tr.vertices = this._m_sQuad.bl.vertices = cc.vertex3(0, 0, 0);
                            this._m_pobTextureAtlas.updateQuad(this._m_sQuad, this._m_uAtlasIndex);
                            this._m_bDirty = this._m_bRecursiveDirty = !1;
                            return
                        }
                        var e = cc.AffineTransformIdentity();
                        c & cc.HONOR_PARENT_TRANSFORM_TRANSLATE && (e = cc.AffineTransformTranslate(e, d.pos.x, d.pos.y));
                        c & cc.HONOR_PARENT_TRANSFORM_ROTATE && (e = cc.AffineTransformRotate(e, -cc.DEGREES_TO_RADIANS(d.rotation)));
                        if (c & cc.HONOR_PARENT_TRANSFORM_SKEW) var f = new cc.AffineTransform,
                        f = cc.AffineTransformMake(1, Math.tan(cc.DEGREES_TO_RADIANS(d.skew.y)), Math.tan(cc.DEGREES_TO_RADIANS(d.skew.x)), 1, 0, 0),
                        e = cc.AffineTransformConcat(f, e);
                        c & cc.HONOR_PARENT_TRANSFORM_SCALE && (e = cc.AffineTransformScale(e, d.scale.x, d.scale.y));
                        e = cc.AffineTransformTranslate(e, -d.ap.x, -d.ap.y);
                        a = cc.AffineTransformConcat(a, e);
                        c = b;
                        this.getHonorParentTransform()
                    }
                }
                var d = new cc.Size,
                d = this._m_obRectInPixels.size,
                c = this._m_obOffsetPositionInPixels.x,
                b = this._m_obOffsetPositionInPixels.y,
                g = c + d.width,
                f = b + d.height,
                d = a.tx,
                h = a.ty,
                e = a.a,
                i = a.b,
                j = a.d,
                a = -a.c,
                l = c * i + b * j + h,
                k = g * e - b * a + d,
                o = g * i + b * j + h,
                n = g * e - f * a + d,
                g = g * i + f * j + h,
                m = c * e - f * a + d,
                f = c * i + f * j + h;
                this._m_sQuad.bl.vertices = cc.vertex3(cc.RENDER_IN_SUBPIXEL(c * e - b * a + d), cc.RENDER_IN_SUBPIXEL(l), this._m_fVertexZ);
                this._m_sQuad.br.vertices = cc.vertex3(cc.RENDER_IN_SUBPIXEL(k), cc.RENDER_IN_SUBPIXEL(o), this._m_fVertexZ);
                this._m_sQuad.tl.vertices = cc.vertex3(cc.RENDER_IN_SUBPIXEL(m), cc.RENDER_IN_SUBPIXEL(f), this._m_fVertexZ);
                this._m_sQuad.tr.vertices = cc.vertex3(cc.RENDER_IN_SUBPIXEL(n), cc.RENDER_IN_SUBPIXEL(g), this._m_fVertexZ)
            } else this._m_sQuad.br.vertices = this._m_sQuad.tl.vertices = this._m_sQuad.tr.vertices = this._m_sQuad.bl.vertices = cc.vertex3(0, 0, 0);
            this._m_pobTextureAtlas.updateQuad(this._m_sQuad, this._m_uAtlasIndex);
            this._m_bDirty = this._m_bRecursiveDirty = !1
        }
    },
    _getTransformValues: function(a) {
        a.pos = this._m_tPositionInPixels;
        a.scale.x = this._m_fScaleX;
        a.scale.y = this._m_fScaleY;
        a.rotation = this._m_fRotation;
        a.skew.x = this._m_fSkewX;
        a.skew.y = this._m_fSkewY;
        a.ap = this._m_tAnchorPointInPixels;
        a.visible = this._m_bIsVisible;
        return a
    },
    draw: function(a) {
        this._super();
        a = a || cc.renderContext;
        if (cc.renderContextType == cc.kCanvas) {
            a.globalAlpha = this._m_nOpacity / 255;
            this._m_bFlipX && a.scale( - 1, 1);
            this._m_bFlipY && a.scale(1, -1);
            var b = this._m_obOffsetPositionInPixels,
            b = new cc.Point(0 | -this._m_tAnchorPointInPixels.x + b.x, 0 | -this._m_tAnchorPointInPixels.y + b.y);
            this._m_pobTexture ? this._m_pobTexture instanceof HTMLImageElement ? 0 == this._m_tContentSize.width && 0 == this._m_tContentSize.height ? (this.setContentSize(new cc.Size(this._m_pobTexture.width, this._m_pobTexture.height)), this._m_obRect.size.width = this._m_pobTexture.width, this._m_obRect.size.height = this._m_pobTexture.height, a.drawImage(this._m_pobTexture, b.x, -(b.y + this._m_pobTexture.height))) : a.drawImage(this._m_pobTexture, this._m_obRect.origin.x, this._m_obRect.origin.y, this._m_obRect.size.width, this._m_obRect.size.height, b.x, -(b.y + this._m_obRect.size.height), this._m_obRect.size.width, this._m_obRect.size.height) : 0 == this._m_tContentSize.width && 0 == this._m_tContentSize.height ? (this.setContentSize(new cc.Size(this._m_pobTexture.width, this._m_pobTexture.height)), this._m_obRect.size.width = this._m_pobTexture.width, this._m_obRect.size.height = this._m_pobTexture.height, a.drawImage(this._m_pobTexture, b.x, -(b.y + this._m_pobTexture.height))) : a.drawImage(this._m_pobTexture, 0, 0, this._m_obRect.size.width, this._m_obRect.size.height, b.x, -(b.y + this._m_obRect.size.height), this._m_obRect.size.width, this._m_obRect.size.height) : (a.fillStyle = "rgba(" + this._m_sColor.r + "," + this._m_sColor.g + "," + this._m_sColor.b + ",1)", a.fillRect(b.x, b.y, this._m_tContentSize.width, this._m_tContentSize.height));
            1 == cc.SPRITE_DEBUG_DRAW ? (a = this._m_tContentSize, a = [cc.ccp(0, 0), cc.ccp(a.width, 0), cc.ccp(a.width, a.height), cc.ccp(0, a.height)], cc.drawingUtil.drawPoly(a, 4, !0)) : 2 == cc.SPRITE_DEBUG_DRAW && (a = this._m_obRect.size, b = this.getOffsetPositionInPixels(), a = [cc.ccp(b.x, b.y), cc.ccp(b.x + a.width, b.y), cc.ccp(b.x + a.width, b.y + a.height), cc.ccp(b.x, b.y + a.height)], cc.drawingUtil.drawPoly(a, 4, !0))
        } else cc.Assert(!this._m_bUsesBatchNode, ""),
        cc.offsetof(cc.V3F_C4B_T2F, cc.vertices),
        cc.offsetof(cc.V3F_C4B_T2F, cc.colors),
        cc.offsetof(cc.V3F_C4B_T2F, cc.texCoords),
        1 == cc.SPRITE_DEBUG_DRAW ? (a = this._m_tContentSize, a = [cc.ccp(0, 0), cc.ccp(a.width, 0), cc.ccp(a.width, a.height), cc.ccp(0, a.height)], cc.drawingUtil.drawPoly(a, 4, !0)) : 2 == cc.SPRITE_DEBUG_DRAW && (a = this._m_obRect.size, new cc.Point, b = this.getOffsetPositionInPixels(), a = [cc.ccp(b.x, b.y), cc.ccp(b.x + a.width, b.y), cc.ccp(b.x + a.width, b.y + a.height), cc.ccp(b.x, b.y + a.height)], cc.drawingUtil.drawPoly(a, 4, !0))
    },
    addChild: function(a, b, c) {
        switch (arguments.length) {
        case 1:
            this._super(a);
            break;
        case 2:
            this._super(a, b);
            break;
        case 3:
            cc.Assert(null != a, "");
            this._super(a, b, c);
            if (cc.renderContextType == cc.kWebGL) {
                if (this._m_bUsesBatchNode) {
                    cc.Assert(a.getTexture().getName() == this._m_pobTextureAtlas.getTexture().getName(), "");
                    var d = this._m_pobBatchNode.atlasIndexForChild(a, b);
                    this._m_pobBatchNode._insertChild(a, d)
                }
                this._m_bHasChildren = !0
            }
            break;
        default:
            throw "Sprite.addChild():Argument must be non-nil ";
        }
    },
    reorderChild: function(a, b) {
        cc.Assert(null != a, "pChild is null");
        cc.Assert( - 1 < this._m_pChildren.indexOf(a), "");
        b != a.getZOrder() && (this._m_bUsesBatchNode ? (this.removeChild(a, !1), this.addChild(a, b)) : this._super(a, b))
    },
    removeChild: function(a, b) {
        this._m_bUsesBatchNode && this._m_pobBatchNode.removeSpriteFromAtlas(a);
        this._super(a, b)
    },
    removeAllChildrenWithCleanup: function(a) {
        if (this._m_bUsesBatchNode && null != this._m_pChildren) for (var b in this._m_pChildren) this._m_pChildren[b] instanceof cc.Sprite && this._m_pobBatchNode.removeSpriteFromAtlas(this._m_pChildren[b]);
        this._super(a);
        this._m_bHasChildren = !1
    },
    setDirtyRecursively: function(a) {
        this._m_bDirty = this._m_bRecursiveDirty = a;
        if (null != this._m_pChildren) for (var b in this._m_pChildren) this._m_pChildren[b] instanceof cc.Sprite && this._m_pChildren[b].setDirtyRecursively(!0)
    },
    SET_DIRTY_RECURSIVELY: function() {
        this._m_bUsesBatchNode && !this._m_bRecursiveDirty && (this._m_bDirty = this._m_bRecursiveDirty = !0, this._m_bHasChildren && this.setDirtyRecursively(!0))
    },
    setPosition: function(a) {
        this._super(a);
        this.SET_DIRTY_RECURSIVELY()
    },
    setPositionInPixels: function(a) {
        this._super(a);
        this.SET_DIRTY_RECURSIVELY()
    },
    setRotation: function(a) {
        this._super(a);
        this.SET_DIRTY_RECURSIVELY()
    },
    setSkewX: function(a) {
        this._super(a);
        this.SET_DIRTY_RECURSIVELY()
    },
    setSkewY: function(a) {
        this._super(a);
        this.SET_DIRTY_RECURSIVELY()
    },
    setScaleX: function(a) {
        this._super(a);
        this.SET_DIRTY_RECURSIVELY()
    },
    setScaleY: function(a) {
        this._super(a);
        this.SET_DIRTY_RECURSIVELY()
    },
    setScale: function(a) {
        this._super(a);
        this.SET_DIRTY_RECURSIVELY()
    },
    setVertexZ: function(a) {
        this._super(a);
        this.SET_DIRTY_RECURSIVELY()
    },
    setAnchorPoint: function(a) {
        this._super(a);
        this.SET_DIRTY_RECURSIVELY()
    },
    setIsRelativeAnchorPoint: function(a) {
        cc.Assert(!this._m_bUsesBatchNode, "");
        this._super(a)
    },
    setIsVisible: function(a) {
        this._super(a);
        this.SET_DIRTY_RECURSIVELY()
    },
    setFlipX: function(a) {
        this._m_bFlipX != a && (this._m_bFlipX = a, this.setTextureRectInPixels(this._m_obRectInPixels, this._m_bRectRotated, this._m_tContentSizeInPixels), this.setNodeDirty())
    },
    isFlipX: function() {
        return this._m_bFlipX
    },
    setFlipY: function(a) {
        this._m_bFlipY != a && (this._m_bFlipY = a, this.setNodeDirty())
    },
    isFlipY: function() {
        return this._m_bFlipY
    },
    updateColor: function() {
        var a = new cc.Color4B(this._m_sColor.r, this._m_sColor.g, this._m_sColor.b, this._m_nOpacity);
        this._m_sQuad.bl.colors = a;
        this._m_sQuad.br.colors = a;
        this._m_sQuad.tl.colors = a;
        this._m_sQuad.tr.colors = a;
        this._m_bUsesBatchNode && (this._m_uAtlasIndex != cc.SpriteIndexNotInitialized ? this._m_pobTextureAtlas.updateQuad(this._m_sQuad, this._m_uAtlasIndex) : this._m_bDirty = !0)
    },
    getOpacity: function() {
        return this._m_nOpacity
    },
    setOpacity: function(a) {
        this._m_nOpacity = a;
        this.setNodeDirty()
    },
    getColor: function() {
        return this._m_bOpacityModifyRGB ? new cc.Color3B(this._m_sColorUnmodified) : new cc.Color3B(this._m_sColor)
    },
    setColor: function(a) {
        this._m_sColor = this._m_sColorUnmodified = new cc.Color3B(a.r, a.g, a.b);
        this.getTexture() && cc.renderContextType == cc.kCanvas && (a = cc.TextureCache.sharedTextureCache().getTextureColors(this._m_originalTexture)) && this.setTexture(cc.generateTintImage(this.getTexture(), a, this._m_sColor, this.getTextureRect()));
        this.updateColor();
        this.setNodeDirty()
    },
    setIsOpacityModifyRGB: function(a) {
        var b = this._m_sColor;
        this._m_bOpacityModifyRGB = a;
        this._m_sColor = b
    },
    getIsOpacityModifyRGB: function() {
        return this._m_bOpacityModifyRGB
    },
    setDisplayFrame: function(a) {
        this.setNodeDirty();
        this._m_obUnflippedOffsetPositionFromCenter = a.getOffsetInPixels();
        var b = a.getTexture();
        b != this._m_pobTexture && this.setTexture(b);
        this._m_bRectRotated = a.isRotated();
        this.setTextureRectInPixels(a.getRectInPixels(), a.isRotated(), a.getOriginalSizeInPixels())
    },
    setDisplayFrameWithAnimationName: function(a, b) {
        cc.Assert(a, "");
        var c = cc.AnimationCache.sharedAnimationCache().animationByName(a);
        cc.Assert(c, "");
        c = c.getFrames()[b];
        cc.Assert(c, "");
        this.setDisplayFrame(c)
    },
    isFrameDisplayed: function(a) {
        return cc.renderContextType == cc.kCanvas ? a.getTexture() != this._m_pobTexture ? !1 : cc.Rect.CCRectEqualToRect(a.getRect(), this._m_obRect) : cc.Rect.CCRectEqualToRect(a.getRect(), this._m_obRect) && a.getTexture().getName() == this._m_pobTexture.getName()
    },
    displayedFrame: function() {
        return cc.renderContextType == cc.kCanvas ? cc.SpriteFrame.frameWithTextureForCanvas(this._m_pobTexture, this._m_obRectInPixels, this._m_bRectRotated, this._m_obUnflippedOffsetPositionFromCenter, this._m_tContentSizeInPixels) : cc.SpriteFrame.frameWithTexture(this._m_pobTexture, this._m_obRectInPixels, this._m_bRectRotated, this._m_obUnflippedOffsetPositionFromCenter, this._m_tContentSizeInPixels)
    },
    _updateBlendFunc: function() {
        cc.renderContextType == cc.kWebGL && (cc.Assert(!this._m_bUsesBatchNode, "CCSprite: _updateBlendFunc doesn't work when the sprite is rendered using a CCSpriteSheet"), !this._m_pobTexture || !this._m_pobTexture.getHasPremultipliedAlpha() ? (this._m_sBlendFunc.src = cc.GL_SRC_ALPHA, this._m_sBlendFunc.dst = cc.GL_ONE_MINUS_SRC_ALPHA, this.setIsOpacityModifyRGB(!1)) : (this._m_sBlendFunc.src = cc.BLEND_SRC, this._m_sBlendFunc.dst = cc.BLEND_DST, this.setIsOpacityModifyRGB(!0)))
    },
    setTexture: function(a) {
        cc.renderContextType != cc.kCanvas && cc.Assert(!this._m_bUsesBatchNode, "setTexture doesn't work when the sprite is rendered using a CCSpriteSheet");
        this._m_pobTexture = a;
        this._updateBlendFunc()
    },
    getTexture: function() {
        return this._m_pobTexture
    }
});
cc.Sprite.spriteWithTexture = function(a, b, c) {
    var d = arguments.length,
    e = new cc.Sprite;
    switch (d) {
    case 1:
        return e && e.initWithTexture(a) ? e: null;
    case 2:
        return e && e.initWithTexture(a, b) ? e: null;
    case 3:
        return cc.Assert(0, ""),
        null;
    default:
        throw "Sprite.spriteWithTexture(): Argument must be non-nil ";
    }
};
cc.Sprite.spriteWithSpriteFrame = function(a) {
    var b = new cc.Sprite;
    return b && b.initWithSpriteFrame(a) ? b: null
};
cc.Sprite.spriteWithSpriteFrameName = function(a) {
    var b = cc.SpriteFrameCache.sharedSpriteFrameCache().spriteFrameByName(a);
    cc.Assert(null != b, "Invalid spriteFrameName:" + a);
    return cc.Sprite.spriteWithSpriteFrame(b)
};
cc.Sprite.spriteWithFile = function(a, b) {
    var c = arguments.length,
    d = new cc.Sprite;
    return 2 > c ? d && d.initWithFile(a) ? d: null: d && d.initWithFile(a, b) ? d: null
};
cc.Sprite.spriteWithBatchNode = function(a, b) {
    var c = new cc.Sprite;
    return c && c.initWithBatchNode(a, b) ? c: null
};
cc = cc = cc || {};
cc.Animation = cc.Class.extend({
    _name: "",
    _delay: 0,
    _frames: null,
    ctor: function() {
        this._frames = []
    },
    getName: function() {
        return this._name
    },
    setName: function(a) {
        this._name = a
    },
    getDelay: function() {
        return this._delay
    },
    setDelay: function(a) {
        this._delay = a
    },
    getFrames: function() {
        return this._frames
    },
    setFrames: function(a) {
        this._frames = a
    },
    initWithFrames: function(a, b) {
        this._delay = b;
        this._frames = a ? a: [];
        return ! 0
    },
    addFrame: function(a) {
        this._frames.push(a)
    },
    addFrameWithFileName: function(a) {
        var a = cc.TextureCache.sharedTextureCache().addImage(a),
        b = cc.RectZero();
        b.size = a instanceof HTMLImageElement || a instanceof HTMLCanvasElement ? cc.SizeMake(a.width, a.height) : a.getContentSize();
        this._frames.push(cc.SpriteFrame.frameWithTexture(a, b))
    },
    addFrameWithTexture: function(a, b) {
        this._frames.push(cc.SpriteFrame.frameWithTexture(a, b))
    },
    init: function() {
        return this.initWithFrames(null, 0)
    }
});
cc.Animation.animation = function() {
    var a = new cc.Animation;
    a.init();
    return a
};
cc.Animation.animationWithFrames = function(a, b) {
    b || (b = 0);
    var c = new cc.Animation;
    c.initWithFrames(a, b);
    return c
};
cc = cc = cc || {};
cc.AnimationCache = cc.Class.extend({
    addAnimation: function(a, b) {
        this._m_pAnimations[b] = a
    },
    removeAnimationByName: function(a) {
        a && delete this._m_pAnimations[a]
    },
    animationByName: function(a) {
        return this._m_pAnimations[a]
    },
    init: function() {
        this._m_pAnimations = {};
        return ! 0
    },
    _m_pAnimations: null
});
cc.AnimationCache.purgeSharedAnimationCache = function() {
    cc.s_pSharedAnimationCache = null
};
cc.AnimationCache.sharedAnimationCache = function() {
    null == cc.s_pSharedAnimationCache && (cc.s_pSharedAnimationCache = new cc.AnimationCache, cc.s_pSharedAnimationCache.init());
    return cc.s_pSharedAnimationCache
};
cc.s_pSharedAnimationCache = null;
cc = cc = cc || {};
cc.SpriteFrame = cc.Class.extend({
    _m_obRectInPixels: new cc.Rect,
    _m_bRotated: null,
    _m_obRect: new cc.Rect,
    _m_obOffsetInPixels: new cc.Point,
    _m_obOriginalSizeInPixels: new cc.Size,
    _m_pobTexture: null,
    getRectInPixels: function() {
        return this._m_obRectInPixels
    },
    setRectInPixels: function(a) {
        this._m_obRectInPixels = a;
        this._m_obRect = cc.RECT_PIXELS_TO_POINTS(a)
    },
    isRotated: function() {
        return this._m_bRotated
    },
    setRotated: function(a) {
        this._m_bRotated = a
    },
    getRect: function() {
        return this._m_obRect
    },
    setRect: function(a) {
        this._m_obRect = a;
        this._m_obRectInPixels = cc.RECT_POINTS_TO_PIXELS(this._m_obRect)
    },
    getOffsetInPixels: function() {
        return this._m_obOffsetInPixels
    },
    setOffsetInPixels: function(a) {
        this._m_obOffsetInPixels = a
    },
    getOriginalSizeInPixels: function() {
        return this._m_obOriginalSizeInPixels
    },
    setOriginalSizeInPixels: function(a) {
        this._m_obOriginalSizeInPixels = a
    },
    getTexture: function() {
        return this._m_pobTexture
    },
    setTexture: function(a) {
        this._m_pobTexture = a
    },
    copyWithZone: function() {
        var a = new cc.SpriteFrame;
        a.initWithTexture(this._m_pobTexture, this._m_obRectInPixels, this._m_bRotated, this._m_obOffsetInPixels, this._m_obOriginalSizeInPixels);
        return a
    },
    initWithTexture: function(a, b, c, d, e) {
        switch (arguments.length) {
        case 2:
            var f = cc.RECT_POINTS_TO_PIXELS(b);
            return this.initWithTexture(a, f, !1, cc.PointZero(), f.size);
        case 5:
            return this._m_pobTexture = a,
            this._m_obRectInPixels = b,
            this._m_obRect = cc.RECT_PIXELS_TO_POINTS(b),
            this._m_bRotated = c,
            this._m_obOffsetInPixels = d,
            this._m_obOriginalSizeInPixels = e,
            !0;
        default:
            throw "Argument must be non-nil ";
        }
    }
});
cc.SpriteFrame.frameWithTexture = function(a, b, c, d, e) {
    var f = arguments.length,
    g = new cc.SpriteFrame;
    switch (f) {
    case 2:
        g.initWithTexture(a, b);
        break;
    case 5:
        g.initWithTexture(a, b, c, d, e);
        break;
    default:
        throw "Argument must be non-nil ";
    }
    return g
};
cc.SpriteFrame.frameWithTextureForCanvas = function(a, b, c, d, e) {
    var f = new cc.SpriteFrame;
    f._m_pobTexture = a;
    f._m_obRectInPixels = b;
    f._m_obRect = cc.RECT_PIXELS_TO_POINTS(b);
    f._m_bRotated = c;
    f._m_obOffsetInPixels = d;
    f._m_obOriginalSizeInPixels = e;
    return f
};
cc = cc = cc || {};
cc.SpriteFrameCache = cc.Class.extend({
    _m_pSpriteFrames: {},
    _m_pSpriteFramesAliases: {},
    init: function() {
        return ! 0
    },
    addSpriteFramesWithDictionary: function(a, b) {
        var c = a.metadata,
        d = a.frames,
        e = 0;
        null != c && (e = parseInt(this._valueForKey("format", c)));
        cc.Assert(0 <= e && 3 >= e, "");
        var f = null,
        g;
        for (g in d) if (f = d[g]) if (c = this._m_pSpriteFrames[g], !c) {
            if (0 == e) {
                var h = parseFloat(this._valueForKey("x", f)),
                i = parseFloat(this._valueForKey("y", f)),
                j = parseFloat(this._valueForKey("width", f)),
                l = parseFloat(this._valueForKey("height", f)),
                k = parseFloat(this._valueForKey("offsetX", f)),
                o = parseFloat(this._valueForKey("offsetY", f)),
                n = parseInt(this._valueForKey("originalWidth", f)),
                f = parseInt(this._valueForKey("originalHeight", f)); (!n || !f) && cc.LOG("cocos2d: WARNING: originalWidth/Height not found on the cc.SpriteFrame. AnchorPoint won't work as expected. Regenrate the .plist");
                n = Math.abs(n);
                f = Math.abs(f);
                c = new cc.SpriteFrame;
                c.initWithTexture(b, cc.RectMake(h, i, j, l), !1, cc.PointMake(k, o), cc.SizeMake(n, f))
            } else if (1 == e || 2 == e) h = cc.RectFromString(this._valueForKey("frame", f)),
            i = !1,
            2 == e && (i = 0 == parseInt(this._valueForKey("rotated", f))),
            j = cc.PointFromString(this._valueForKey("offset", f)),
            f = cc.SizeFromString(this._valueForKey("sourceSize", f)),
            c = new cc.SpriteFrame,
            c.initWithTexture(b, h, i, j, f);
            else if (3 == e) {
                var h = new cc.Size,
                i = new cc.Point,
                j = new cc.Size,
                l = new cc.Rect,
                h = cc.SizeFromString(this._valueForKey("spriteSize", f)),
                i = cc.PointFromString(this._valueForKey("spriteOffset", f)),
                j = cc.SizeFromString(this._valueForKey("spriteSourceSize", f)),
                l = cc.RectFromString(this._valueForKey("textureRect", f)),
                k = 0 == parseInt(this._valueForKey("textureRotated", f)),
                c = f.aliases,
                f = g.toString(),
                m;
                for (m in c) this._m_pSpriteFramesAliases.hasOwnProperty(c[m]) && cc.LOG("cocos2d: WARNING: an alias with name " + m + " already exists"),
                this._m_pSpriteFramesAliases[c[m]] = f;
                c = new cc.SpriteFrame;
                c.initWithTexture(b, cc.RectMake(l.origin.x, l.origin.y, h.width, h.height), k, i, j)
            }
            this._m_pSpriteFrames[g] = c
        }
    },
    addSpriteFramesWithJson: function(a) {
        var b = "",
        c = a.metadata;
        c && (b = this._valueForKey("textureFileName", c), b = b.toString());
        c = new cc.Texture2D; (c = cc.TextureCache.sharedTextureCache().addImage(b)) ? this.addSpriteFramesWithDictionary(a, c) : cc.LOG("cocos2d: cc.SpriteFrameCache: Couldn't load texture")
    },
    addSpriteFramesWithFile: function(a, b) {
        var c = arguments.length,
        d = cc.FileUtils.dictionaryWithContentsOfFileThreadSafe(a);
        switch (c) {
        case 1:
            var c = "",
            e = d.metadata;
            e && (c = this._valueForKey("textureFileName", e).toString());
            "" != c ? (e = a.lastIndexOf("/"), c = (e ? a.substring(0, e + 1) : "") + c) : (c = a, e = c.lastIndexOf(".", c.length), c = c.substr(0, e), c += ".png", cc.LOG("cocos2d: cc.SpriteFrameCache: Trying to use file " + c.toString() + " as texture")); (c = cc.TextureCache.sharedTextureCache().addImage(c)) ? this.addSpriteFramesWithDictionary(d, c) : cc.LOG("cocos2d: cc.SpriteFrameCache: Couldn't load texture");
            break;
        case 2:
            arguments[1] instanceof cc.Texture2D ? this.addSpriteFramesWithDictionary(d, b) : (c = arguments[1], cc.Assert(c, "texture name should not be null"), (e = cc.TextureCache.sharedTextureCache().addImage(c)) ? this.addSpriteFramesWithDictionary(d, e) : cc.LOG("cocos2d: cc.SpriteFrameCache: couldn't load texture file. File not found " + c));
            break;
        default:
            throw "Argument must be non-nil ";
        }
    },
    addSpriteFrame: function(a, b) {
        this._m_pSpriteFrames[b] = a
    },
    removeSpriteFrames: function() {
        this._m_pSpriteFrames = [];
        this._m_pSpriteFramesAliases = []
    },
    removeUnusedSpriteFrames: function() {
        for (var a in this._m_pSpriteFrames) null == this._m_pSpriteFrames[a] && (cc.LOG("cocos2d: cc.SpriteFrameCache: removing unused frame:" + a), delete this._m_pSpriteFrames[a])
    },
    removeSpriteFrameByName: function(a) {
        if (a) {
            var b = this._m_pSpriteFramesAliases[a];
            b ? (delete this._m_pSpriteFrames[b], delete this._m_pSpriteFramesAliases[b]) : delete this._m_pSpriteFrames[a]
        }
    },
    removeSpriteFramesFromFile: function(a) {
        a = cc.FileUtils.fullPathFromRelativePath(a);
        this.removeSpriteFramesFromDictionary(cc.FileUtils.dictionaryWithContentsOfFileThreadSafe(a))
    },
    removeSpriteFramesFromDictionary: function(a) {
        var a = a.frames,
        b;
        for (b in null) null == a[b] && this._m_pSpriteFrames[b] && delete this._m_pSpriteFrames[b]
    },
    removeSpriteFramesFromTexture: function(a) {
        for (var b in null) {
            var c = this._m_pSpriteFrames[b];
            c && c.getTexture() == a && delete this._m_pSpriteFrames[b]
        }
    },
    spriteFrameByName: function(a) {
        var b;
        this._m_pSpriteFrames.hasOwnProperty(a) && (b = this._m_pSpriteFrames[a]);
        if (!b) {
            var c;
            this._m_pSpriteFramesAliases.hasOwnProperty(a) && (c = this._m_pSpriteFramesAliases[a]);
            c && (this._m_pSpriteFrames.hasOwnProperty(c.toString()) && (b = this._m_pSpriteFrames[c.toString()]), b || cc.LOG("cocos2d: cc.SpriteFrameCahce: Frame " + a + " not found"))
        }
        return b
    },
    _valueForKey: function(a, b) {
        return b && b.hasOwnProperty(a) ? b[a].toString() : ""
    }
});
cc.pSharedSpriteFrameCache = null;
cc.SpriteFrameCache.sharedSpriteFrameCache = function() {
    cc.pSharedSpriteFrameCache || (cc.pSharedSpriteFrameCache = new cc.SpriteFrameCache, cc.pSharedSpriteFrameCache.init());
    return cc.pSharedSpriteFrameCache
};
cc.SpriteFrameCache.purgeSharedSpriteFrameCache = function() {
    cc.pSharedSpriteFrameCache = null
};
cc = cc = cc || {};
cc.defaultCapacity = 29;
cc.UINT_MAX = 4294967295;
cc.GL_SRC_ALPHA = 770;
cc.GL_ONE_MINUS_SRC_ALPHA = 771;
cc.SpriteBatchNode = cc.Node.extend({
    _m_pobTextureAtlas: new cc.TextureAtlas,
    _m_blendFunc: new cc.BlendFunc(0, 0),
    _m_pobDescendants: [],
    _renderTexture: null,
    _isUseCache: !1,
    ctor: function(a) {
        this._super();
        a && this.initWithFile(a, cc.defaultCapacity);
        this.setContentSize(new cc.Size(cc.canvas.width, cc.canvas.height));
        this._renderTexture = cc.RenderTexture.renderTextureWithWidthAndHeight(cc.canvas.width, cc.canvas.height)
    },
    _updateBlendFunc: function() {
        this._m_pobTextureAtlas.getTexture().getHasPremultipliedAlpha() || (this._m_blendFunc.src = cc.GL_SRC_ALPHA, this._m_blendFunc.dst = cc.GL_ONE_MINUS_SRC_ALPHA)
    },
    addQuadFromSprite: function(a, b) {
        cc.Assert(null != a, "SpriteBatchNode.addQuadFromSprite():Argument must be non-nil");
        a.useBatchNode(this);
        a.setAtlasIndex(b);
        this._m_pobTextureAtlas.insertQuad(a.getQuad(), b);
        a.setDirty(!0);
        a.updateTransform();
        this._m_pChildren = cc.ArrayAppendObjectToIndex(this._m_pChildren, a, b)
    },
    addSpriteWithoutQuad: function(a, b, c) {
        cc.Assert(null != a, "SpriteBatchNode.addQuadFromSprite():Argument must be non-nil");
        a.setAtlasIndex(b);
        var d = 0;
        if (this._m_pobDescendants && 0 < this._m_pobDescendants.length) for (var e = null,
        f = 0; f < this._m_pobDescendants.length; f++)(e = this._m_pobDescendants[f]) && e.getAtlasIndex() >= b && ++d;
        this._m_pobDescendants = cc.ArrayAppendObjectToIndex(this._m_pobDescendants, a, d);
        this.addChild(a, b, c, !0);
        return this
    },
    getTextureAtlas: function() {
        return this._m_pobTextureAtlas
    },
    setTextureAtlas: function(a) {
        a != this._m_pobTextureAtlas && (this._m_pobTextureAtlas = a)
    },
    getDescendants: function() {
        return this._m_pobDescendants
    },
    initWithTexture: function(a, b) {
        this._m_pChildren = [];
        this._m_pobDescendants = [];
        this._m_blendFunc.src = cc.BLEND_SRC;
        this._m_blendFunc.dst = cc.BLEND_DST;
        this._m_pobTextureAtlas = new cc.TextureAtlas;
        this._m_pobTextureAtlas.initWithTexture(a, b);
        cc.renderContextType == cc.kWebGL && this._updateBlendFunc();
        return ! 0
    },
    setNodeDirty: function() {
        this._setNodeDirtyForCache();
        this._m_bIsTransformDirty = this._m_bIsInverseDirty = !0;
        cc.NODE_TRANSFORM_USING_AFFINE_MATRIX && (this._m_bIsTransformGLDirty = !0)
    },
    _setNodeDirtyForCache: function() {
        this._isCacheDirty = !0
    },
    setContentSizeInPixels: function(a) {
        a && (this._super(a), this._renderTexture.setContentSize(a))
    },
    initWithFile: function(a, b) {
        var c = cc.TextureCache.sharedTextureCache().textureForKey(a);
        c || (c = cc.TextureCache.sharedTextureCache().addImage(a));
        return this.initWithTexture(c, b)
    },
    increaseAtlasCapacity: function() {
        var a = 4 * (this._m_pobTextureAtlas.getCapacity() + 1) / 3;
        cc.LOG("cocos2d: CCSpriteBatchNode: resizing TextureAtlas capacity from " + this._m_pobTextureAtlas.getCapacity() + " to [" + a + "].");
        this._m_pobTextureAtlas.resizeCapacity(a) || (cc.LOG("cocos2d: WARNING: Not enough memory to resize the atlas"), cc.Assert(!1, "Not enough memory to resize the atla"))
    },
    removeChildAtIndex: function(a, b) {
        this.removeChild(this._m_pChildren[a], b)
    },
    insertChild: function(a, b) {
        a.useBatchNode(this);
        a.setAtlasIndex(b);
        a.setDirty(!0);
        this._m_pobTextureAtlas.getTotalQuads() == this._m_pobTextureAtlas.getCapacity() && this.increaseAtlasCapacity();
        this._m_pobTextureAtlas.insertQuad(a.getQuad(), b);
        this._m_pobDescendants = cc.ArrayAppendObjectToIndex(this._m_pobDescendants, a, b);
        var c = 0;
        if (this._m_pobDescendants && 0 < this._m_pobDescendants.length) for (var d = 0; d < this._m_pobDescendants.length; d++) {
            var e = this._m_pobDescendants[d];
            e && (c > b && e.setAtlasIndex(e.getAtlasIndex() + 1), ++c)
        }
        if ((d = a.getChildren()) && 0 < d.length) for (d = 0; d < this._m_pobDescendants.length; d++) if (e = this._m_pobDescendants[d]) c = this.atlasIndexForChild(e, e.getZOrder()),
        this.insertChild(e, c)
    },
    removeSpriteFromAtlas: function(a) {
        this._m_pobTextureAtlas.removeQuadAtIndex(a.getAtlasIndex());
        a.useSelfRender();
        var b = cc.ArrayGetIndexOfObject(this._m_pobDescendants, a);
        if ( - 1 != b) {
            cc.ArrayRemoveObjectAtIndex(this._m_pobDescendants, b);
            for (var c = this._m_pobDescendants.length; b < c; ++b) {
                var d = this._m_pobDescendants[b];
                d.setAtlasIndex(d.getAtlasIndex() - 1)
            }
        }
        if ((a = a.getChildren()) && 0 < a.length) for (b = 0; b < a.length; b++) a[b] && this.removeSpriteFromAtlas(a[b])
    },
    rebuildIndexInOrder: function(a, b) {
        var c = a.getChildren();
        if (c && 0 < c.length) for (var d = 0; d < c.length; d++) {
            var e = c[d];
            e && 0 > e.getZOrder() && (b = this.rebuildIndexInOrder(e, b))
        }
        a.isEqual(this) || (a.setAtlasIndex(b), b++);
        if (c && 0 < c.length) for (d = 0; d < c.length; d++)(e = c[d]) && 0 <= e.getZOrder() && (b = this.rebuildIndexInOrder(e, b));
        return b
    },
    highestAtlasIndexInChild: function(a) {
        var b = a.getChildren();
        return ! b || 0 == b.length ? a.getAtlasIndex() : this.highestAtlasIndexInChild(b.pop())
    },
    lowestAtlasIndexInChild: function(a) {
        var b = a.getChildren();
        return ! b || 0 == b.length ? a.getAtlasIndex() : this.lowestAtlasIndexInChild(b.pop())
    },
    atlasIndexForChild: function(a, b) {
        var c = a.getParent().getChildren(),
        d = cc.ArrayGetIndexOfObject(c, a),
        e = a.getParent() == this,
        f = null;
        0 < d && d < cc.UINT_MAX && (f = c[d - 1]);
        if (e) return 0 == d ? 0 : this.highestAtlasIndexInChild(f) + 1;
        if (0 == d) return c = a.getParent(),
        0 > b ? c.getAtlasIndex() : c.getAtlasIndex() + 1;
        if (0 > f.getZOrder() && 0 > b || 0 <= f.getZOrder() && 0 <= b) return this.highestAtlasIndexInChild(f) + 1;
        c = a.getParent();
        return c.getAtlasIndex() + 1
    },
    getTexture: function() {
        return this._m_pobTextureAtlas.getTexture()
    },
    setTexture: function(a) {
        this._m_pobTextureAtlas.setTexture(a);
        for (var b = 0; b < this._m_pChildren.length; b++) this._m_pChildren[b].setTexture(a)
    },
    setBlendFunc: function(a) {
        this._m_blendFunc = a
    },
    getBlendFunc: function() {
        return this._m_blendFunc
    },
    visit: function(a) {
        if (cc.renderContextType == cc.kCanvas && (a = a || cc.renderContext, this._m_bIsVisible)) {
            a.save();
            this._m_pGrid && this._m_pGrid.isActive() && (this._m_pGrid.beforeDraw(), this.transformAncestors());
            this.transform();
            if (this._isUseCache) {
                if (this._isCacheDirty) {
                    this._renderTexture.clear();
                    this._renderTexture.context.translate(this._m_tAnchorPointInPixels.x, -this._m_tAnchorPointInPixels.y);
                    if (this._m_pChildren) for (var b = 0; b < this._m_pChildren.length; b++) {
                        var c = this._m_pChildren[b];
                        c && 0 > c._m_nZOrder && c.visit(this._renderTexture.context)
                    }
                    if (this._m_pChildren) for (b = 0; b < this._m_pChildren.length; b++)(c = this._m_pChildren[b]) && 0 <= c._m_nZOrder && c.visit(this._renderTexture.context);
                    this._isCacheDirty = !1
                }
                this.draw()
            } else {
                if (this._m_pChildren) for (b = 0; b < this._m_pChildren.length; b++)(c = this._m_pChildren[b]) && 0 > c._m_nZOrder && c.visit(a);
                if (this._m_pChildren) for (b = 0; b < this._m_pChildren.length; b++)(c = this._m_pChildren[b]) && 0 <= c._m_nZOrder && c.visit(a)
            }
            this._m_pGrid && this._m_pGrid.isActive() && this._m_pGrid.afterDraw(this);
            a.restore()
        }
    },
    addChild: function(a, b, c) {
        switch (arguments.length) {
        case 1:
            this._super(a);
            break;
        case 2:
            this._super(a, b);
            break;
        case 3:
            cc.Assert(null != a, "SpriteBatchNode.addChild():child should not be null");
            cc.renderContextType != cc.kCanvas && cc.Assert(a.getTexture().getName() == this._m_pobTextureAtlas.getTexture().getName(), "SpriteBatchNode.addChild():check CCSprite is using the same texture id");
            this._super(a, b, c);
            var d = this.atlasIndexForChild(a, b);
            this.insertChild(a, d);
            break;
        case 4:
            arguments[3] && this._super(a, b, c);
            break;
        default:
            throw "Argument must be non-nil ";
        }
        this.setNodeDirty()
    },
    reorderChild: function(a, b) {
        cc.Assert(null != a, "SpriteBatchNode.addChild():the child should not be null");
        cc.Assert( - 1 < this._m_pChildren.indexOf(a), "SpriteBatchNode.addChild():sprite batch node should contain the child");
        b != a.getZOrder() && (this.removeChild(a, !1), this.addChild(a, b), this.setNodeDirty())
    },
    removeChild: function(a, b) {
        null != a && (cc.Assert( - 1 < this._m_pChildren.indexOf(a), "SpriteBatchNode.addChild():sprite batch node should contain the child"), this.removeSpriteFromAtlas(a), this._super(a, b))
    },
    removeAllChildrenWithCleanup: function(a) {
        if (this._m_pChildren && 0 < this._m_pChildren.length) for (var b = 0; b < this._m_pChildren.length; b++) {
            var c = this._m_pChildren[b];
            c && this.removeSpriteFromAtlas(c)
        }
        this._super(a);
        this._m_pobDescendants = [];
        this._m_pobTextureAtlas.removeAllQuads()
    },
    draw: function(a) {
        this._super();
        if (cc.renderContextType == cc.kCanvas) {
            var a = a || cc.renderContext,
            b = new cc.Point(0 | -this._m_tAnchorPointInPixels.x, 0 | -this._m_tAnchorPointInPixels.y);
            this._renderTexture && a.drawImage(this._renderTexture.getCanvas(), b.x, -(b.y + this._renderTexture.getCanvas().height))
        } else if (0 != this._m_pobTextureAtlas.getTotalQuads()) {
            if (this._m_pobDescendants && 0 < this._m_pobDescendants.length) {
                b = null;
                for (a = 0; a < this._m_pobDescendants.length; a++) if (b = this._m_pobDescendants[a]) b.updateTransform(),
                b = b.boundingBox(),
                b = [cc.ccp(b.origin.x, b.origin.y), cc.ccp(b.origin.x + b.size.width, b.origin.y), cc.ccp(b.origin.x + b.size.width, b.origin.y + b.size.height), cc.ccp(b.origin.x, b.origin.y + b.size.height)],
                cc.drawingUtil.drawPoly(b, 4, !0)
            }
            this._m_pobTextureAtlas.drawQuads()
        }
    }
});
cc.SpriteBatchNode.batchNodeWithTexture = function(a, b) {
    b || (b = cc.defaultCapacity);
    var c = new cc.SpriteBatchNode;
    c.initWithTexture(a, b);
    return c
};
cc.SpriteBatchNode.batchNodeWithFile = function(a, b) {
    b || (b = cc.defaultCapacity);
    var c = new cc.SpriteBatchNode;
    c.initWithFile(a, b);
    return c
};
cc.share_pobTextureAtlas = function() {
    return (new cc.SpriteBatchNode)._m_pobTextureAtlas
};
cc = cc = cc || {};
cc.LabelAtlas = cc.AtlasNode.extend({
    initWithString: function(a, b, c, d, e) {
        cc.Assert(null != a, "");
        return this.initWithTileFile(b, c, d, a.length) ? (this._m_cMapStartChar = e, this.setString(a), !0) : !1
    },
    updateAtlasValues: function() {
        for (var a = this._m_sString.length,
        b = this._m_sString,
        c = this._m_pTextureAtlas.getTexture(), d = c.width, c = c.height, e = 0; e < a; e++) {
            var f = b.charCodeAt(e) - this._m_cMapStartChar.charCodeAt(0),
            g = parseInt(f % this._m_uItemsPerRow),
            h = parseInt(f / this._m_uItemsPerRow),
            g = g * this._m_uItemWidth / d,
            f = g + this._m_uItemWidth / d,
            h = h * this._m_uItemHeight / c,
            i = h + this._m_uItemHeight / c,
            j = new cc.V2F_C4B_T2F_QuadZero;
            j.tl.texCoords.u = g;
            j.tl.texCoords.v = h;
            j.tr.texCoords.u = f;
            j.tr.texCoords.v = h;
            j.bl.texCoords.u = g;
            j.bl.texCoords.v = i;
            j.br.texCoords.u = f;
            j.br.texCoords.v = i;
            j.bl.vertices.x = e * this._m_uItemWidth;
            j.bl.vertices.y = 0;
            j.bl.vertices.z = 0;
            j.br.vertices.x = e * this._m_uItemWidth + this._m_uItemWidth;
            j.br.vertices.y = 0;
            j.br.vertices.z = 0;
            j.tl.vertices.x = e * this._m_uItemWidth;
            j.tl.vertices.y = this._m_uItemHeight;
            j.tl.vertices.z = 0;
            j.tr.vertices.x = e * this._m_uItemWidth + this._m_uItemWidth;
            j.tr.vertices.y = this._m_uItemHeight;
            j.tr.vertices.z = 0;
            this._m_pTextureAtlas.updateQuad(j, e)
        }
    },
    setString: function(a) {
        var b = a.length;
        this._m_pTextureAtlas.resizeCapacity(b);
        this._m_sString = a;
        this.updateAtlasValues();
        a = new cc.Size;
        a.width = b * this._m_uItemWidth;
        a.height = this._m_uItemHeight;
        this.setContentSizeInPixels(a);
        this._m_uQuadsToDraw = b
    },
    getString: function() {
        return this._m_sString
    },
    draw: function() {
        this._super();
        if (cc.LABELATLAS_DEBUG_DRAW) {
            var a = this.getContentSize(),
            a = [cc.ccp(0, 0), cc.ccp(a.width, 0), cc.ccp(a.width, a.height), cc.ccp(0, a.height)];
            cc.drawingUtil.drawPoly(a, 4, !0)
        }
    },
    convertToLabelProtocol: function() {
        return this
    },
    _m_sString: null,
    _m_cMapStartChar: null
});
cc.LabelAtlas.labelWithString = function(a, b, c, d, e) {
    var f = new cc.LabelAtlas;
    return f && f.initWithString(a, b, c, d, e) ? f: null
};
cc = cc = cc || {};
cc.LabelTTF = cc.Sprite.extend({
    _m_tDimensions: null,
    _m_eAlignment: cc.TextAlignmentCenter,
    _m_pFontName: "Arial",
    _m_fFontSize: 0,
    _m_pString: null,
    ctor: function() {
        this._super();
        this._m_pString = "";
        this._m_sColor = cc.WHITE();
        this._m_bOpacityModifyRGB = !1
    },
    description: function() {
        return "<CCLabelTTF | FontName =" + this._m_pFontName + " FontSize = " + this._m_fFontSize.toFixed(1) + ">"
    },
    initWithString: function(a, b, c, d, e) {
        cc.Assert(null != a, "cc.LabelTTF.initWithString() label is null");
        if (3 < arguments.length) {
            if (this.init()) return this._m_tDimensions = cc.SizeMake(b.width * cc.CONTENT_SCALE_FACTOR(), b.height * cc.CONTENT_SCALE_FACTOR()),
            this._m_eAlignment = c,
            this._m_pFontName = d,
            this._m_fFontSize = e * cc.CONTENT_SCALE_FACTOR(),
            this.setString(a),
            !0
        } else if (d = arguments[1], e = arguments[2], this.init()) return this._m_tDimensions = cc.SizeZero(),
        this._m_pFontName = d,
        this._m_fFontSize = e * cc.CONTENT_SCALE_FACTOR(),
        this.setString(a),
        !0;
        return ! 1
    },
    setString: function(a) {
        this._m_pString = a;
        cc.renderContext.save();
        cc.renderContext.font = this._m_fFontSize + "px '" + this._m_pFontName + "'";
        a = cc.renderContext.measureText(this._m_pString);
        this.setContentSize(new cc.Size(a.width, this._m_fFontSize));
        cc.renderContext.restore();
        this.setNodeDirty()
    },
    draw: function(a) {
        if (cc.renderContextType == cc.kCanvas) {
            a = a || cc.renderContext;
            this._m_bFlipX && a.scale( - 1, 1);
            this._m_bFlipY && a.scale(1, -1);
            var b = this.getColor();
            a.fillStyle = "rgba(" + b.r + "," + b.g + "," + b.b + ", " + this.getOpacity() / 255 + ")";
            a.font = this._m_fFontSize + "px '" + this._m_pFontName + "'";
            b = 0;
            switch (this._m_eAlignment) {
            case cc.TextAlignmentLeft:
                b = -(this._m_tDimensions.width - this._m_tContentSize.width) / 2;
                break;
            case cc.TextAlignmentRight:
                b = (this._m_tDimensions.width - this._m_tContentSize.width) / 2
            }
            this._m_tContentSize.width > this._m_tDimensions.width && 0 !== this._m_tDimensions.width ? this._wrapText(a, this._m_pString, -this._m_tDimensions.width * this._m_tAnchorPoint.x, -this._m_tDimensions.height * this._m_tAnchorPoint.y, this._m_tDimensions.width, 1.2 * this._m_fFontSize, this._m_eAlignment) : a.fillText(this._m_pString, -this._m_tContentSize.width * this._m_tAnchorPoint.x + b, this._m_tContentSize.height * this._m_tAnchorPoint.y)
        }
    },
    _wrapText: function(a, b, c, d, e, f, g) {
        for (var b = b.split(" "), h = "", i = 0; i < b.length; i++) {
            var j = h + b[i] + " ",
            l = a.measureText(j).width - a.measureText(" ").width;
            if (l >= e) {
                var k = l - a.measureText(b[i]).width - 2 * a.measureText(" ").width;
                switch (g) {
                case cc.TextAlignmentLeft:
                    k = 0;
                    break;
                case cc.TextAlignmentRight:
                    k = e - k;
                    break;
                default:
                    k = (e - k) / 2
                }
                a.fillText(h, c + k, d);
                d += f;
                h = b[i] + " "
            } else h = j,
            i == b.length - 1 && a.fillText(h, c + k, d)
        }
    },
    getString: function() {
        return this._m_pString
    },
    convertToLabelProtocol: function() {
        return this
    }
});
cc.LabelTTF.labelWithString = function(a, b, c, d, e) {
    var f = new cc.LabelTTF;
    if (3 < arguments.length) return null != f && f.initWithString(a, b, c, d, e) ? f: null;
    d = arguments[1];
    e = arguments[2];
    return null != f && f.initWithString(a, d, e) ? f: null
};
cc = cc = cc || {};
function _KerningHashElement(a, b, c) {
    this.key = a;
    this.amount = b;
    this.hh = c
}
function _BMFontDef(a, b, c, d, e) {
    this.charID = a || 0;
    this.rect = b || new cc.RectMake(0, 0, 10, 10);
    this.xOffset = c || 0;
    this.yOffset = d || 0;
    this.xAdvance = e || 0
}
function _BMFontPadding(a, b, c, d) {
    this.left = a || 0;
    this.top = b || 0;
    this.right = c || 0;
    this.bottom = d || 0
}
cc.kCCBMFontMaxChars = 2048;
cc.BMFontConfiguration = cc.Class.extend({
    m_pBitmapFontArray: [],
    m_uCommonHeight: 0,
    m_tPadding: null,
    m_sAtlasName: null,
    m_pKerningDictionary: null,
    description: function() {
        return "<cc.BMFontConfiguration | Kernings:" + this.m_pKerningDictionary + " | Image = " + this.m_sAtlasName.toString() + ">"
    },
    initWithFNTfile: function(a) {
        cc.Assert(null != a && 0 != a.length, "");
        this.m_pKerningDictionary = null;
        this.parseConfigFile(a);
        return ! 0
    },
    parseConfigFile: function(a) {
        var b = cc.FileUtils.fullPathFromRelativePath(a),
        b = cc.FileData(b.toString(), "rb");
        b.getSize();
        b = b.getBuffer();
        cc.Assert(b, "cc.BMFontConfiguration.parseConfigFile | Open file error.");
        if (b) for (var c = b; 0 < c.length;) {
            var d = c.indexOf("\n");
            d ? (b = c.substr(0, d), c = c.substr(d + 1)) : (b = c, c = "");
            "info face" == b.substr(0, 9) ? this.parseInfoArguments(b) : "common lineHeight" == b.substr(0, 17) ? this.parseCommonArguments(b) : "page id" == b.substr(0, 7) ? this.parseImageFileName(b, a) : "chars c" != b.substr(0, 7) && ("char" == b.substr(0, 4) ? (d = new cc.BMFontDef, this.parseCharacterDefinition(b, d), this.m_pBitmapFontArray[d.charID] = d) : "kernings count" == b.substr(0, 14) ? this.parseKerningCapacity(b) : "kerning first" == b.substr(0, 13) && this.parseKerningEntry(b))
        }
    },
    parseCharacterDefinition: function(a, b) {
        var c = a.indexOf("id="),
        d = a.indexOf(" ", c),
        c = a.substr(c, d - c);
        b.charID = "id=" + c.toString();
        cc.Assert(b.charID < cc.kCCBMFontMaxChars, "BitmpaFontAtlas: CharID bigger than supported");
        c = a.indexOf("x=");
        d = a.indexOf(" ", c);
        c = a.substr(c, d - c);
        b.rect.origin.x = "x=%f" + c.toString();
        c = a.indexOf("y=");
        d = a.indexOf(" ", c);
        c = a.substr(c, d - c);
        b.rect.origin.y = "y=" + c.toString();
        c = a.indexOf("width=");
        d = a.indexOf(" ", c);
        c = a.substr(c, d - c);
        b.rect.size.width = "width=" + c.toString();
        c = a.indexOf("height=");
        d = a.indexOf(" ", c);
        c = a.substr(c, d - c);
        b.rect.size.height = "height=" + c.toString();
        c = a.indexOf("xoffset=");
        d = a.indexOf(" ", c);
        c = a.substr(c, d - c);
        b.xOffset = "xoffset=" + c.toString();
        c = a.indexOf("yoffset=");
        d = a.indexOf(" ", c);
        c = a.substr(c, d - c);
        b.yOffset = "yoffset=" + c.toString();
        c = a.indexOf("xadvance=");
        d = a.indexOf(" ", c);
        c = a.substr(c, d - c);
        b.xAdvance = "xadvance=" + c.toString()
    },
    parseInfoArguments: function(a) {
        var b = a.indexOf("padding="),
        c = a.indexOf(" ", b);
        a.substr(b, c - b);
        cc.LOG("cocos2d: padding: " + this.m_tPadding.left + "," + this.m_tPadding.top + "," + this.m_tPadding.right + "," + this.m_tPadding.bottom)
    },
    parseCommonArguments: function(a) {
        var b = a.indexOf("lineHeight="),
        c = a.indexOf(" ", b),
        b = a.substr(b, c - b);
        this.m_uCommonHeight = "lineHeight=" + b.toString();
        b = a.indexOf("scaleW=") + 7;
        c = a.indexOf(" ", b);
        a.substr(b, c - b);
        b = a.indexOf("scaleH=") + 7;
        c = a.indexOf(" ", b);
        a.substr(b, c - b);
        b = a.indexOf("pages=") + 6;
        c = a.indexOf(" ", b);
        b = a.substr(b, c - b);
        cc.Assert(1 == atoi(b.toString()), "cc.BitfontAtlas: only supports 1 page")
    },
    parseImageFileName: function(a, b) {
        var c = a.indexOf("=") + 1,
        d = a.indexOf(" ", c),
        c = a.substr(c, d - c);
        cc.Assert(0 == atoi(c.toString()), "LabelBMFont file could not be found");
        c = a.indexOf('"') + 1;
        d = a.indexOf('"', c);
        c = a.substr(c, d - c);
        this.m_sAtlasName = cc.FileUtils.fullPathFromRelativeFile(c.toString(), b)
    },
    parseKerningCapacity: function() {},
    parseKerningEntry: function(a) {
        var b, c = a.indexOf("first="),
        d = a.indexOf(" ", c),
        c = a.substr(c, d - c);
        b = "first=" + c.toString();
        var e, c = a.indexOf("second="),
        d = a.indexOf(" ", c),
        c = a.substr(c, d - c);
        e = "second=" + c.toString();
        c = a.indexOf("amount=");
        d = a.indexOf(" ", c);
        c = a.substr(c, d - c);
        a = "amount=" + c.toString();
        c = new tKerningHashElement;
        c.amount = a;
        c.key = b << 16 | e & 65535;
        HASH_ADD_INT(this.m_pKerningDictionary, key, c)
    },
    purgeKerningDictionary: function() {
        for (tKerningHashElement * current; this.m_pKerningDictionary;) current = this.m_pKerningDictionary,
        HASH_DEL(this.m_pKerningDictionary, current),
        free(current)
    }
});
cc.BMFontConfiguration.configurationWithFNTFile = function(a) {
    var b = new cc.BMFontConfiguration;
    return b.initWithFNTfile(a) ? b: null
};
cc.LabelBMFont = cc.SpriteBatchNode.extend({
    m_cOpacity: 0,
    m_tColor: null,
    m_bIsOpacityModifyRGB: !1,
    m_sString: "",
    m_pConfiguration: null,
    ctor: function() {
        if (cc.LABELBMFONT_DEBUG_DRAW) {
            void cc.LabelBMFont.draw();
            cc.SpriteBatchNode.draw();
            var a = this.getContentSize(),
            a = [cc.ccp(0, 0), cc.ccp(a.width, 0), cc.ccp(a.width, a.height), cc.ccp(0, a.height)];
            cc.drawPoly(a, 4, !0)
        }
    },
    getOpacity: function() {
        return this.m_cOpacity
    },
    setOpacity: function(a) {
        this.m_cOpacity = a;
        if (this._m_pChildren && 0 != this._m_pChildren.length) for (var a = 0,
        b = this._m_pChildren.length; a < b; a++) {
            var c = this._m_pChildren[a];
            c && (c = c instanceof cc.RGBAProtocol) && c.setOpacity(this.m_cOpacity)
        }
    },
    getColor: function() {
        return this.m_tColor
    },
    setColor: function(a) {
        this.m_tColor = a;
        if (this._m_pChildren && 0 != this._m_pChildren.length) for (var a = 0,
        b = this._m_pChildren.length; a < b; a++) {
            var c = this._m_pChildren[a];
            c && c.setColor(this.m_tColor)
        }
    },
    getIsOpacityModifyRGB: function() {
        return this.m_bIsOpacityModifyRGB
    },
    setIsOpacityModifyRGB: function(a) {
        this.m_bIsOpacityModifyRGB = a;
        if (this._m_pChildren && 0 != this._m_pChildren.length) for (var a = 0,
        b = this._m_pChildren.length; a < b; a++) {
            var c = this._m_pChildren[a];
            c && (c = c instanceof cc.RGBAProtocol) && c.setIsOpacityModifyRGB(this.m_bIsOpacityModifyRGB)
        }
    },
    initWithString: function(a, b) {
        cc.Assert(null != a, "");
        this.m_pConfiguration = cc.FNTConfigLoadFile(b);
        cc.Assert(this.m_pConfiguration, "Error creating config for LabelBMFont");
        return cc.SpriteBatchNode.initWithFile(this.m_pConfiguration.m_sAtlasName.toString(), a.length) ? (this.m_cOpacity = 255, this.m_tColor = cc.WHITE, this.m_tContentSize = cc.SizeZero(), this.m_bIsOpacityModifyRGB = this._m_pobTextureAtlas.getTexture().getHasPremultipliedAlpha(), this.setAnchorPoint(cc.ccp(0.5, 0.5)), this.setString(a), !0) : !1
    },
    createFontChars: function() {
        var a = 0,
        b = 0,
        c = -1,
        d = 0,
        e = cc.SizeZero(),
        f = 0,
        g = 0,
        b = 1,
        h = this.m_sString.length;
        if (0 != h) {
            for (var i = 0; i < h - 1; ++i) {
                var j = this.m_sString[i];
                "\n" == j && b++
            }
            g = this.m_pConfiguration.m_uCommonHeight * b;
            b = -(this.m_pConfiguration.m_uCommonHeight - this.m_pConfiguration.m_uCommonHeight * b);
            for (i = 0; i < h; i++) if (j = this.m_sString[i], cc.Assert(j < cc.kCCBMFontMaxChars, "LabelBMFont: character outside bounds"), "\n" == j) a = 0,
            b -= this.m_pConfiguration.m_uCommonHeight;
            else {
                var d = this.kerningAmountForFirst(c, j),
                c = this.m_pConfiguration.m_pBitmapFontArray[j],
                l = c.rect,
                k = this.getChildByTag(i);
                k ? (k.setTextureRectInPixels(l, !1, l.size), k.setIsVisible(!0), k.setOpacity(255)) : (k = new cc.Sprite, k.initWithBatchNodeRectInPixels(this, l), this.addChild(k, 0, i));
                k.setPositionInPixels(cc.ccp(a + c.xOffset + c.rect.size.width / 2 + d, b + (this.m_pConfiguration.m_uCommonHeight - c.yOffset) - l.size.height / 2));
                a += this.m_pConfiguration.m_pBitmapFontArray[j].xAdvance + d;
                c = j;
                k.setIsOpacityModifyRGB(this.m_bIsOpacityModifyRGB);
                k.setColor(this.m_tColor);
                255 != this.m_cOpacity && k.setOpacity(this.m_cOpacity);
                f < a && (f = a)
            }
            e.width = f;
            e.height = g;
            this.setContentSizeInPixels(e)
        }
    },
    setString: function() {
        return this.m_sString.toString()
    },
    getString: function() {
        this.m_sString.clear();
        this.m_sString = newString;
        if (this._m_pChildren && 0 != this._m_pChildren.length) for (var a = 0,
        b = this._m_pChildren.length; a < b; a++) {
            var c = this._m_pChildren[a];
            c && c.setIsVisible(!1)
        }
        this.createFontChars()
    },
    setCString: function(a) {
        this.setString(a)
    },
    setAnchorPoint: function(a) {
        cc.Point.CCPointEqualToPoint(a, this._m_tAnchorPoint) || (cc.SpriteBatchNode.setAnchorPoint(a), this.createFontChars())
    },
    atlasNameFromFntFile: function() {},
    kerningAmountForFirst: function() {
        var a = 0;
        if (this.m_pConfiguration.m_pKerningDictionary) {
            var b = new tKerningHashElement;
            b && (a = b.amount)
        }
        return a
    }
});
cc.LabelBMFont.labelWithString = function(a, b) {
    var c = new cc.LabelBMFont;
    return c && c.initWithString(a, b) ? c: null
};
cc.configurations = null;
cc.FNTConfigLoadFile = function(a) {
    var b = null;
    null == cc.configurations && (cc.configurations = {});
    b = cc.configurations[a];
    null == b && (b = cc.BMFontConfiguration.configurationWithFNTFile(a), cc.configurations[a] = b);
    return b
};
cc.purgeCachedData = function() {
    cc.FNTConfigRemoveCache()
};
cc.FNTConfigRemoveCache = function() {
    cc.configurations && (cc.configurations = {})
};
cc = cc = cc || {};
cc.kParticleShapeMode = 0;
cc.kParticleTextureMode = 1;
cc.kParticleStarShape = 0;
cc.kParticleBallShape = 1;
cc.kCCParticleDurationInfinity = -1;
cc.kCCParticleStartSizeEqualToEndSize = -1;
cc.kCCParticleStartRadiusEqualToEndRadius = -1;
cc.kParticleStartSizeEqualToEndSize = cc.kCCParticleStartSizeEqualToEndSize;
cc.kParticleDurationInfinity = cc.kCCParticleDurationInfinity;
cc.kCCParticleModeGravity = 0;
cc.kCCParticleModeRadius = 1;
cc.kCCPositionTypeFree = 0;
cc.kCCPositionTypeRelative = 1;
cc.kCCPositionTypeGrouped = 2;
cc.kPositionTypeFree = cc.kCCPositionTypeFree;
cc.kPositionTypeGrouped = cc.kCCPositionTypeGrouped;
cc.tCCParticle = function(a, b, c, d, e, f, g, h, i, j, l) {
    this.pos = a ? a: cc.PointZero();
    this.startPos = b ? b: cc.PointZero();
    this.color = c ? c: new cc.Color4F(0, 0, 0, 1);
    this.deltaColor = d ? d: new cc.Color4F(0, 0, 0, 1);
    this.size = e || 0;
    this.deltaSize = f || 0;
    this.rotation = g || 0;
    this.deltaRotation = h || 0;
    this.timeToLive = i || 0;
    this.modeA = j ? j: new cc.tCCParticle.tModeA;
    this.modeB = l ? l: new cc.tCCParticle.tModeB;
    this.isChangeColor = !1
};
cc.tCCParticle.tModeA = function(a, b, c) {
    this.dir = a ? a: cc.PointZero();
    this.radialAccel = b || 0;
    this.tangentialAccel = c || 0
};
cc.tCCParticle.tModeB = function(a, b, c, d) {
    this.angle = a || 0;
    this.degreesPerSecond = b || 0;
    this.radius = c || 0;
    this.deltaRadius = d || 0
};
cc.ParticleSystem = cc.Node.extend({
    _m_sPlistFile: "",
    _m_fElapsed: 0,
    modeA: null,
    modeB: null,
    _m_pParticles: null,
    _m_fEmitCounter: 0,
    _m_uParticleIdx: 0,
    _m_pProfilingTimer: null,
    _drawMode: cc.kParticleShapeMode,
    getDrawMode: function() {
        return this._drawMode
    },
    setDrawMode: function(a) {
        this._drawMode = a
    },
    _shapeType: cc.kParticleBallShape,
    getShapeType: function() {
        return this._shapeType
    },
    setShapeType: function(a) {
        this._shapeType = a
    },
    _m_bIsActive: !1,
    getIsActive: function() {
        return this._m_bIsActive
    },
    setIsActive: function(a) {
        this._m_bIsActive = a
    },
    _m_uParticleCount: 0,
    getParticleCount: function() {
        return this._m_uParticleCount
    },
    setParticleCount: function(a) {
        this._m_uParticleCount = a
    },
    _m_fDuration: 0,
    getDuration: function() {
        return this._m_fDuration
    },
    setDuration: function(a) {
        this._m_fDuration = a
    },
    _m_tSourcePosition: cc.PointZero(),
    getSourcePosition: function() {
        return this._m_tSourcePosition
    },
    setSourcePosition: function(a) {
        this._m_tSourcePosition = a
    },
    _m_tPosVar: cc.PointZero(),
    getPosVar: function() {
        return this._m_tPosVar
    },
    setPosVar: function(a) {
        this._m_tPosVar = a
    },
    _m_fLife: 0,
    getLife: function() {
        return this._m_fLife
    },
    setLife: function(a) {
        this._m_fLife = a
    },
    _m_fLifeVar: 0,
    getLifeVar: function() {
        return this._m_fLifeVar
    },
    setLifeVar: function(a) {
        this._m_fLifeVar = a
    },
    _m_fAngle: 0,
    getAngle: function() {
        return this._m_fAngle
    },
    setAngle: function(a) {
        this._m_fAngle = a
    },
    _m_fAngleVar: 0,
    getAngleVar: function() {
        return this._m_fAngleVar
    },
    setAngleVar: function(a) {
        this._m_fAngleVar = a
    },
    getGravity: function() {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        return this.modeA.gravity
    },
    setGravity: function(a) {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        this.modeA.gravity = a
    },
    getSpeed: function() {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        return this.modeA.speed
    },
    setSpeed: function(a) {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        this.modeA.speed = a
    },
    getSpeedVar: function() {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        return this.modeA.speedVar
    },
    setSpeedVar: function(a) {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        this.modeA.speedVar = a
    },
    getTangentialAccel: function() {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        return this.modeA.tangentialAccel
    },
    setTangentialAccel: function(a) {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        this.modeA.tangentialAccel = a
    },
    getTangentialAccelVar: function() {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        return this.modeA.tangentialAccelVar
    },
    setTangentialAccelVar: function(a) {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        this.modeA.tangentialAccelVar = a
    },
    getRadialAccel: function() {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        return this.modeA.radialAccel
    },
    setRadialAccel: function(a) {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        this.modeA.radialAccel = a
    },
    getRadialAccelVar: function() {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        return this.modeA.radialAccelVar
    },
    setRadialAccelVar: function(a) {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        this.modeA.radialAccelVar = a
    },
    getStartRadius: function() {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        return this.modeB.startRadius
    },
    setStartRadius: function(a) {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        this.modeB.startRadius = a
    },
    getStartRadiusVar: function() {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        return this.modeB.startRadiusVar
    },
    setStartRadiusVar: function(a) {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        this.modeB.startRadiusVar = a
    },
    getEndRadius: function() {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        return this.modeB.endRadius
    },
    setEndRadius: function(a) {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        this.modeB.endRadius = a
    },
    getEndRadiusVar: function() {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        return this.modeB.endRadiusVar
    },
    setEndRadiusVar: function(a) {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        this.modeB.endRadiusVar = a
    },
    getRotatePerSecond: function() {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        return this.modeB.rotatePerSecond
    },
    setRotatePerSecond: function(a) {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        this.modeB.rotatePerSecond = a
    },
    getRotatePerSecondVar: function() {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        return this.modeB.rotatePerSecondVar
    },
    setRotatePerSecondVar: function(a) {
        cc.Assert(this._m_nEmitterMode == cc.kCCParticleModeGravity, "Particle Mode should be Gravity");
        this.modeB.rotatePerSecondVar = a
    },
    _m_fStartSize: 0,
    getStartSize: function() {
        return this._m_fStartSize
    },
    setStartSize: function(a) {
        this._m_fStartSize = a
    },
    _m_fStartSizeVar: 0,
    getStartSizeVar: function() {
        return this._m_fStartSizeVar
    },
    setStartSizeVar: function(a) {
        this._m_fStartSizeVar = a
    },
    _m_fEndSize: 0,
    getEndSize: function() {
        return this._m_fEndSize
    },
    setEndSize: function(a) {
        this._m_fEndSize = a
    },
    _m_fEndSizeVar: 0,
    getEndSizeVar: function() {
        return this._m_fEndSizeVar
    },
    setEndSizeVar: function(a) {
        this._m_fEndSizeVar = a
    },
    _m_tStartColor: new cc.Color4F(0, 0, 0, 1),
    getStartColor: function() {
        return this._m_tStartColor
    },
    setStartColor: function(a) {
        this._m_tStartColor = a
    },
    _m_tStartColorVar: new cc.Color4F(0, 0, 0, 1),
    getStartColorVar: function() {
        return this._m_tStartColorVar
    },
    setStartColorVar: function(a) {
        this._m_tStartColorVar = a
    },
    _m_tEndColor: new cc.Color4F(0, 0, 0, 1),
    getEndColor: function() {
        return this._m_tEndColor
    },
    setEndColor: function(a) {
        this._m_tEndColor = a
    },
    _m_tEndColorVar: new cc.Color4F(0, 0, 0, 1),
    getEndColorVar: function() {
        return this._m_tEndColorVar
    },
    setEndColorVar: function(a) {
        this._m_tEndColorVar = a
    },
    _m_fStartSpin: 0,
    getStartSpin: function() {
        return this._m_fStartSpin
    },
    setStartSpin: function(a) {
        this._m_fStartSpin = a
    },
    _m_fStartSpinVar: 0,
    getStartSpinVar: function() {
        return this._m_fStartSpinVar
    },
    setStartSpinVar: function(a) {
        this._m_fStartSpinVar = a
    },
    _m_fEndSpin: 0,
    getEndSpin: function() {
        return this._m_fEndSpin
    },
    setEndSpin: function(a) {
        this._m_fEndSpin = a
    },
    _m_fEndSpinVar: 0,
    getEndSpinVar: function() {
        return this._m_fEndSpinVar
    },
    setEndSpinVar: function(a) {
        this._m_fEndSpinVar = a
    },
    _m_fEmissionRate: 0,
    getEmissionRate: function() {
        return this._m_fEmissionRate
    },
    setEmissionRate: function(a) {
        this._m_fEmissionRate = a
    },
    _m_uTotalParticles: 0,
    getTotalParticles: function() {
        return this._m_uTotalParticles
    },
    setTotalParticles: function(a) {
        this._m_uTotalParticles = a
    },
    _m_pTexture: null,
    getTexture: function() {
        return this._m_pTexture
    },
    setTexture: function(a) {
        this._m_pTexture = a;
        if (! (a instanceof HTMLImageElement || a instanceof HTMLCanvasElement) && this._m_pTexture && !this._m_pTexture.getHasPremultipliedAlpha() && this._m_tBlendFunc.src == cc.BLEND_SRC && this._m_tBlendFunc.dst == cc.BLEND_DST) this._m_tBlendFunc.src = GL_SRC_ALPHA,
        this._m_tBlendFunc.dst = GL_ONE_MINUS_SRC_ALPHA
    },
    _m_tBlendFunc: new cc.BlendFunc(0, 0),
    getBlendFunc: function() {
        return this._m_tBlendFunc
    },
    setBlendFunc: function(a) {
        this._m_tBlendFunc = a
    },
    _m_bIsBlendAdditive: !1,
    getIsBlendAdditive: function() {
        return this._m_bIsBlendAdditive
    },
    setIsBlendAdditive: function(a) {
        this._m_bIsBlendAdditive = a
    },
    _m_ePositionType: cc.kCCPositionTypeFree,
    getPositionType: function() {
        return this._m_ePositionType
    },
    setPositionType: function(a) {
        this._m_ePositionType = a
    },
    _m_bIsAutoRemoveOnFinish: !1,
    getIsAutoRemoveOnFinish: function() {
        return this._m_bIsAutoRemoveOnFinish
    },
    setIsAutoRemoveOnFinish: function(a) {
        this._m_bIsAutoRemoveOnFinish = a
    },
    _m_nEmitterMode: 0,
    getEmitterMode: function() {
        return this._m_nEmitterMode
    },
    setEmitterMode: function(a) {
        this._m_nEmitterMode = a
    },
    ctor: function() {
        this._super();
        this._m_nEmitterMode = cc.kCCParticleModeGravity;
        this.modeA = new cc.ParticleSystem.tModeA;
        this.modeB = new cc.ParticleSystem.tModeB;
        this._m_tBlendFunc = new cc.BlendFunc(cc.BLEND_SRC, cc.BLEND_DST)
    },
    initWithFile: function(a) {
        this._m_sPlistFile = a;
        a = cc.FileUtils.dictionaryWithContentsOfFileThreadSafe(this._m_sPlistFile);
        cc.Assert(null != a, "Particles: file not found");
        return this.initWithDictionary(a)
    },
    boundingBoxToWorld: function() {
        return new cc.Rect(0, 0, cc.canvas.width, cc.canvas.height)
    },
    initWithDictionary: function(a) {
        var b = !1;
        if (this.initWithTotalParticles(parseInt(this._valueForKey("maxParticles", a)))) {
            this._m_fAngle = parseFloat(this._valueForKey("angle", a));
            this._m_fAngleVar = parseFloat(this._valueForKey("angleVariance", a));
            this._m_fDuration = parseFloat(this._valueForKey("duration", a));
            this._m_tBlendFunc.src = parseInt(this._valueForKey("blendFuncSource", a));
            this._m_tBlendFunc.dst = parseInt(this._valueForKey("blendFuncDestination", a));
            this._m_tStartColor.r = parseFloat(this._valueForKey("startColorRed", a));
            this._m_tStartColor.g = parseFloat(this._valueForKey("startColorGreen", a));
            this._m_tStartColor.b = parseFloat(this._valueForKey("startColorBlue", a));
            this._m_tStartColor.a = parseFloat(this._valueForKey("startColorAlpha", a));
            this._m_tStartColorVar.r = parseFloat(this._valueForKey("startColorVarianceRed", a));
            this._m_tStartColorVar.g = parseFloat(this._valueForKey("startColorVarianceGreen", a));
            this._m_tStartColorVar.b = parseFloat(this._valueForKey("startColorVarianceBlue", a));
            this._m_tStartColorVar.a = parseFloat(this._valueForKey("startColorVarianceAlpha", a));
            this._m_tEndColor.r = parseFloat(this._valueForKey("finishColorRed", a));
            this._m_tEndColor.g = parseFloat(this._valueForKey("finishColorGreen", a));
            this._m_tEndColor.b = parseFloat(this._valueForKey("finishColorBlue", a));
            this._m_tEndColor.a = parseFloat(this._valueForKey("finishColorAlpha", a));
            this._m_tEndColorVar.r = parseFloat(this._valueForKey("finishColorVarianceRed", a));
            this._m_tEndColorVar.g = parseFloat(this._valueForKey("finishColorVarianceGreen", a));
            this._m_tEndColorVar.b = parseFloat(this._valueForKey("finishColorVarianceBlue", a));
            this._m_tEndColorVar.a = parseFloat(this._valueForKey("finishColorVarianceAlpha", a));
            this._m_fStartSize = parseFloat(this._valueForKey("startParticleSize", a));
            this._m_fStartSizeVar = parseFloat(this._valueForKey("startParticleSizeVariance", a));
            this._m_fEndSize = parseFloat(this._valueForKey("finishParticleSize", a));
            this._m_fEndSizeVar = parseFloat(this._valueForKey("finishParticleSizeVariance", a));
            var b = parseFloat(this._valueForKey("sourcePositionx", a)),
            c = parseFloat(this._valueForKey("sourcePositiony", a));
            this.setPosition(cc.ccp(b, c));
            this._m_tPosVar.x = parseFloat(this._valueForKey("sourcePositionVariancex", a));
            this._m_tPosVar.y = parseFloat(this._valueForKey("sourcePositionVariancey", a));
            this._m_fStartSpin = parseFloat(this._valueForKey("rotationStart", a));
            this._m_fStartSpinVar = parseFloat(this._valueForKey("rotationStartVariance", a));
            this._m_fEndSpin = parseFloat(this._valueForKey("rotationEnd", a));
            this._m_fEndSpinVar = parseFloat(this._valueForKey("rotationEndVariance", a));
            this._m_nEmitterMode = parseInt(this._valueForKey("emitterType", a));
            this._m_nEmitterMode == cc.kCCParticleModeGravity ? (this.modeA.gravity.x = parseFloat(this._valueForKey("gravityx", a)), this.modeA.gravity.y = parseFloat(this._valueForKey("gravityy", a)), this.modeA.speed = parseFloat(this._valueForKey("speed", a)), this.modeA.speedVar = parseFloat(this._valueForKey("speedVariance", a)), b = this._valueForKey("radialAcceleration", a), this.modeA.radialAccel = b ? parseFloat(b) : 0, b = this._valueForKey("radialAccelVariance", a), this.modeA.radialAccelVar = b ? parseFloat(b) : 0, b = this._valueForKey("tangentialAcceleration", a), this.modeA.tangentialAccel = b ? parseFloat(b) : 0, b = this._valueForKey("tangentialAccelVariance", a), this.modeA.tangentialAccelVar = b ? parseFloat(b) : 0) : this._m_nEmitterMode == cc.kCCParticleModeRadius ? (this.modeB.startRadius = parseFloat(this._valueForKey("maxRadius", a)), this.modeB.startRadiusVar = parseFloat(this._valueForKey("maxRadiusVariance", a)), this.modeB.endRadius = parseFloat(this._valueForKey("minRadius", a)), this.modeB.endRadiusVar = 0, this.modeB.rotatePerSecond = parseFloat(this._valueForKey("rotatePerSecond", a)), this.modeB.rotatePerSecondVar = parseFloat(this._valueForKey("rotatePerSecondVariance", a))) : (cc.Assert(!1, "Invalid emitterType in config file"), cc.BREAK_IF(!0));
            this._m_fLife = parseFloat(this._valueForKey("particleLifespan", a));
            this._m_fLifeVar = parseFloat(this._valueForKey("particleLifespanVariance", a));
            this._m_fEmissionRate = this._m_uTotalParticles / this._m_fLife;
            var d = this._valueForKey("textureFileName", a),
            b = cc.FileUtils.fullPathFromRelativeFile(d, this._m_sPlistFile),
            c = null;
            0 < d.length && (d = cc.FileUtils.getIsPopupNotify(), cc.FileUtils.setIsPopupNotify(!1), c = cc.TextureCache.sharedTextureCache().addImage(b), cc.FileUtils.setIsPopupNotify(d));
            if (c) this._m_pTexture = c;
            else if (a = this._valueForKey("textureImageData", a), cc.Assert(a, "cc.ParticleSystem.initWithDictory:textureImageData is null"), 0 != a.length) return cc.base64Decode(a, a.length, null),
            cc.Assert(!1, "CCParticleSystem: error decoding textureImageData"),
            !1;
            cc.Assert(null != this._m_pTexture, "CCParticleSystem: error loading the texture");
            if (!this._m_pTexture) return ! 1;
            b = !0
        }
        return b
    },
    initWithTotalParticles: function(a) {
        this._m_uTotalParticles = a;
        this._m_pParticles = [];
        if (!this._m_pParticles) return cc.Log("Particle system: not enough memory"),
        !1;
        this._m_bIsActive = !0;
        this._m_tBlendFunc.src = cc.BLEND_SRC;
        this._m_tBlendFunc.dst = cc.BLEND_DST;
        this._m_ePositionType = cc.kCCPositionTypeFree;
        this._m_nEmitterMode = cc.kCCParticleModeGravity;
        this._m_bIsAutoRemoveOnFinish = !1;
        this.scheduleUpdateWithPriority(1);
        return ! 0
    },
    addParticle: function() {
        if (this.isFull()) return ! 1;
        var a = new cc.tCCParticle;
        this.initParticle(a);
        this._m_pParticles.push(a); ++this._m_uParticleCount;
        return ! 0
    },
    initParticle: function(a) {
        a.timeToLive = this._m_fLife + this._m_fLifeVar * cc.RANDOM_MINUS1_1();
        a.timeToLive = Math.max(0, a.timeToLive);
        a.pos.x = this._m_tSourcePosition.x + this._m_tPosVar.x * cc.RANDOM_MINUS1_1();
        a.pos.x *= cc.CONTENT_SCALE_FACTOR();
        a.pos.y = this._m_tSourcePosition.y + this._m_tPosVar.y * cc.RANDOM_MINUS1_1();
        a.pos.y *= cc.CONTENT_SCALE_FACTOR();
        var b = new cc.Color4F(cc.clampf(this._m_tStartColor.r + this._m_tStartColorVar.r * cc.RANDOM_MINUS1_1(), 0, 1), cc.clampf(this._m_tStartColor.g + this._m_tStartColorVar.g * cc.RANDOM_MINUS1_1(), 0, 1), cc.clampf(this._m_tStartColor.b + this._m_tStartColorVar.b * cc.RANDOM_MINUS1_1(), 0, 1), cc.clampf(this._m_tStartColor.a + this._m_tStartColorVar.a * cc.RANDOM_MINUS1_1(), 0, 1)),
        c = new cc.Color4F(cc.clampf(this._m_tEndColor.r + this._m_tEndColorVar.r * cc.RANDOM_MINUS1_1(), 0, 1), cc.clampf(this._m_tEndColor.g + this._m_tEndColorVar.g * cc.RANDOM_MINUS1_1(), 0, 1), cc.clampf(this._m_tEndColor.b + this._m_tEndColorVar.b * cc.RANDOM_MINUS1_1(), 0, 1), cc.clampf(this._m_tEndColor.a + this._m_tEndColorVar.a * cc.RANDOM_MINUS1_1(), 0, 1));
        a.color = b;
        a.deltaColor.r = (c.r - b.r) / a.timeToLive;
        a.deltaColor.g = (c.g - b.g) / a.timeToLive;
        a.deltaColor.b = (c.b - b.b) / a.timeToLive;
        a.deltaColor.a = (c.a - b.a) / a.timeToLive;
        b = this._m_fStartSize + this._m_fStartSizeVar * cc.RANDOM_MINUS1_1();
        b = Math.max(0, b);
        b *= cc.CONTENT_SCALE_FACTOR();
        a.size = b;
        this._m_fEndSize == cc.kCCParticleStartSizeEqualToEndSize ? a.deltaSize = 0 : (c = this._m_fEndSize + this._m_fEndSizeVar * cc.RANDOM_MINUS1_1(), c = Math.max(0, c), c *= cc.CONTENT_SCALE_FACTOR(), a.deltaSize = (c - b) / a.timeToLive);
        b = this._m_fStartSpin + this._m_fStartSpinVar * cc.RANDOM_MINUS1_1();
        c = this._m_fEndSpin + this._m_fEndSpinVar * cc.RANDOM_MINUS1_1();
        a.rotation = b;
        a.deltaRotation = (c - b) / a.timeToLive;
        this._m_ePositionType == cc.kCCPositionTypeFree ? (b = this.convertToWorldSpace(cc.PointZero()), a.startPos = cc.ccpMult(b, cc.CONTENT_SCALE_FACTOR())) : this._m_ePositionType == cc.kCCPositionTypeRelative && (a.startPos = cc.ccpMult(this._m_tPosition, cc.CONTENT_SCALE_FACTOR()));
        b = cc.DEGREES_TO_RADIANS(this._m_fAngle + this._m_fAngleVar * cc.RANDOM_MINUS1_1());
        if (this._m_nEmitterMode == cc.kCCParticleModeGravity) b = cc.ccp(Math.cos(b), Math.sin(b)),
        c = this.modeA.speed + this.modeA.speedVar * cc.RANDOM_MINUS1_1(),
        c *= cc.CONTENT_SCALE_FACTOR(),
        a.modeA.dir = cc.ccpMult(b, c),
        a.modeA.radialAccel = this.modeA.radialAccel + this.modeA.radialAccelVar * cc.RANDOM_MINUS1_1(),
        a.modeA.radialAccel *= cc.CONTENT_SCALE_FACTOR(),
        a.modeA.tangentialAccel = this.modeA.tangentialAccel + this.modeA.tangentialAccelVar * cc.RANDOM_MINUS1_1(),
        a.modeA.tangentialAccel *= cc.CONTENT_SCALE_FACTOR();
        else {
            var c = this.modeB.startRadius + this.modeB.startRadiusVar * cc.RANDOM_MINUS1_1(),
            d = this.modeB.endRadius + this.modeB.endRadiusVar * cc.RANDOM_MINUS1_1(),
            c = c * cc.CONTENT_SCALE_FACTOR(),
            d = d * cc.CONTENT_SCALE_FACTOR();
            a.modeB.radius = c;
            a.modeB.deltaRadius = this.modeB.endRadius == cc.kCCParticleStartRadiusEqualToEndRadius ? 0 : (d - c) / a.timeToLive;
            a.modeB.angle = b;
            a.modeB.degreesPerSecond = cc.DEGREES_TO_RADIANS(this.modeB.rotatePerSecond + this.modeB.rotatePerSecondVar * cc.RANDOM_MINUS1_1())
        }
    },
    stopSystem: function() {
        this._m_bIsActive = !1;
        this._m_fElapsed = this._m_fDuration;
        this._m_fEmitCounter = 0
    },
    resetSystem: function() {
        this._m_bIsActive = !0;
        for (this._m_uParticleIdx = this._m_fElapsed = 0; this._m_uParticleIdx < this._m_uParticleCount; ++this._m_uParticleIdx) this._m_pParticles[this._m_uParticleIdx].timeToLive = 0
    },
    isFull: function() {
        return this._m_uParticleCount >= this._m_uTotalParticles
    },
    updateQuadWithParticle: function() {},
    postStep: function() {},
    update: function(a) {
        if (this._m_bIsActive && this._m_fEmissionRate) {
            var b = 1 / this._m_fEmissionRate;
            for (this._m_fEmitCounter += a; this._m_uParticleCount < this._m_uTotalParticles && this._m_fEmitCounter > b;) this.addParticle(),
            this._m_fEmitCounter -= b;
            this._m_fElapsed += a; - 1 != this._m_fDuration && this._m_fDuration < this._m_fElapsed && this.stopSystem()
        }
        this._m_uParticleIdx = 0;
        b = cc.PointZero();
        this._m_ePositionType == cc.kCCPositionTypeFree ? (b = this.convertToWorldSpace(cc.PointZero()), b.x *= cc.CONTENT_SCALE_FACTOR(), b.y *= cc.CONTENT_SCALE_FACTOR()) : this._m_ePositionType == cc.kCCPositionTypeRelative && (b = cc.ccp(this._m_tPosition.x, this._m_tPosition.y), b.x *= cc.CONTENT_SCALE_FACTOR(), b.y *= cc.CONTENT_SCALE_FACTOR());
        for (; this._m_uParticleIdx < this._m_uParticleCount;) {
            var c = this._m_pParticles[this._m_uParticleIdx];
            c.timeToLive -= a;
            if (0 < c.timeToLive) {
                if (this._m_nEmitterMode == cc.kCCParticleModeGravity) {
                    var d, e;
                    d = cc.PointZero();
                    if (c.pos.x || c.pos.y) d = cc.ccpNormalize(c.pos);
                    e = d;
                    d = cc.ccpMult(d, c.modeA.radialAccel);
                    var f = e.x;
                    e.x = -e.y;
                    e.y = f;
                    e = cc.ccpMult(e, c.modeA.tangentialAccel);
                    d = cc.ccpAdd(cc.ccpAdd(d, e), this.modeA.gravity);
                    d = cc.ccpMult(d, a);
                    c.modeA.dir = cc.ccpAdd(c.modeA.dir, d);
                    d = cc.ccpMult(c.modeA.dir, a);
                    c.pos = cc.ccpAdd(c.pos, d)
                } else c.modeB.angle += c.modeB.degreesPerSecond * a,
                c.modeB.radius += c.modeB.deltaRadius * a,
                c.pos.x = -Math.cos(c.modeB.angle) * c.modeB.radius,
                c.pos.y = -Math.sin(c.modeB.angle) * c.modeB.radius;
                c.color.r += c.deltaColor.r * a;
                c.color.g += c.deltaColor.g * a;
                c.color.b += c.deltaColor.b * a;
                c.color.a += c.deltaColor.a * a;
                c.isChangeColor = !0;
                c.size += c.deltaSize * a;
                c.size = Math.max(0, c.size);
                c.rotation += c.deltaRotation * a;
                cc._m_ePositionType == cc.kCCPositionTypeFree || this._m_ePositionType == cc.kCCPositionTypeRelative ? (d = cc.ccpSub(b, c.startPos), d = cc.ccpSub(c.pos, d)) : d = c.pos;
                this.updateQuadWithParticle(c, d); ++this._m_uParticleIdx
            } else if (cc.ArrayRemoveObject(this._m_pParticles, c), --this._m_uParticleCount, 0 == this._m_uParticleCount && this._m_bIsAutoRemoveOnFinish) {
                this.unscheduleUpdate();
                this._m_pParent.removeChild(this, !0);
                return
            }
        }
        cc.USES_VBO && this.postStep()
    },
    _valueForKey: function(a, b) {
        if (b) {
            var c = b[a];
            return c ? c: ""
        }
        return ""
    }
});
cc.ParticleSystem.particleWithFile = function(a) {
    var b = new cc.ParticleSystem;
    return b && b.initWithFile(a) ? b: null
};
cc.ParticleSystem.tModeA = function(a, b, c, d, e, f, g) {
    this.gravity = a ? a: cc.PointZero();
    this.speed = b || 0;
    this.speedVar = c || 0;
    this.tangentialAccel = d || 0;
    this.tangentialAccelVar = e || 0;
    this.radialAccel = f || 0;
    this.radialAccelVar = g || 0
};
cc.ParticleSystem.tModeB = function(a, b, c, d, e, f) {
    this.startRadius = a || 0;
    this.startRadiusVar = b || 0;
    this.endRadius = c || 0;
    this.endRadiusVar = d || 0;
    this.rotatePerSecond = e || 0;
    this.rotatePerSecondVar = f || 0
};
cc = cc = cc || {};
cc.ParticleSystemQuad = cc.ParticleSystem.extend({
    _m_pQuads: null,
    _m_pIndices: null,
    _m_uQuadsID: 0,
    ctor: function() {
        this._super()
    },
    initIndices: function() {
        for (var a = 0; a < this._m_uTotalParticles; ++a) {
            var b = 6 * a,
            c = 4 * a;
            this._m_pIndices[b + 0] = c + 0;
            this._m_pIndices[b + 1] = c + 1;
            this._m_pIndices[b + 2] = c + 2;
            this._m_pIndices[b + 5] = c + 1;
            this._m_pIndices[b + 4] = c + 2;
            this._m_pIndices[b + 3] = c + 3
        }
    },
    initTexCoordsWithRect: function(a) {
        var b = cc.RectMake(a.origin.x * cc.CONTENT_SCALE_FACTOR(), a.origin.y * cc.CONTENT_SCALE_FACTOR(), a.size.width * cc.CONTENT_SCALE_FACTOR(), a.size.height * cc.CONTENT_SCALE_FACTOR()),
        c = a.size.width,
        d = a.size.height;
        this._m_pTexture && (this._m_pTexture instanceof HTMLImageElement || this._m_pTexture instanceof HTMLCanvasElement ? (c = this._m_pTexture.width, d = this._m_pTexture.height) : (c = this._m_pTexture.getPixelsWide(), d = this._m_pTexture.getPixelsHigh()));
        var e;
        cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (a = (2 * b.origin.x + 1) / (2 * c), e = (2 * b.origin.y + 1) / (2 * d), c = a + (2 * b.size.width - 2) / (2 * c), b = e + (2 * b.size.height - 2) / (2 * d)) : (a = b.origin.x / c, e = b.origin.y / d, c = a + b.size.width / c, b = e + b.size.height / d);
        d = b;
        b = e;
        e = d;
        this._m_pQuads = [];
        for (d = 0; d < this._m_uTotalParticles; d++) this._m_pQuads[d] = cc.V3F_C4B_T2F_QuadZero();
        for (d = 0; d < this._m_uTotalParticles; d++) this._m_pQuads[d].bl.texCoords.u = a,
        this._m_pQuads[d].bl.texCoords.v = e,
        this._m_pQuads[d].br.texCoords.u = c,
        this._m_pQuads[d].br.texCoords.v = e,
        this._m_pQuads[d].tl.texCoords.u = a,
        this._m_pQuads[d].tl.texCoords.v = b,
        this._m_pQuads[d].tr.texCoords.u = c,
        this._m_pQuads[d].tr.texCoords.v = b
    },
    setDisplayFrame: function(a) {
        cc.Assert(cc.Point.CCPointEqualToPoint(a.getOffsetInPixels(), cc.PointZero()), "QuadParticle only supports SpriteFrames with no offsets"); (!this._m_pTexture || a.getTexture().getName() != this._m_pTexture.getName()) && this.setTexture(a.getTexture())
    },
    setTextureWithRect: function(a, b) { (!this._m_pTexture || a.getName() != this._m_pTexture.getName()) && this.setTexture(a, !0);
        this.initTexCoordsWithRect(b)
    },
    initWithTotalParticles: function(a) {
        if (this._super(a)) {
            this._m_pQuads = [];
            for (a = 0; a < this._m_uTotalParticles; a++) this._m_pQuads[a] = cc.V3F_C4B_T2F_QuadZero();
            this._m_pIndices = [];
            for (a = 0; a < 6 * this._m_uTotalParticles; a++) this._m_pIndices[a] = 0;
            if (!this._m_pQuads || !this._m_pIndices) return cc.Log("cocos2d: Particle system: not enough memory"),
            this._m_pQuads && (this._m_pQuads = null),
            this._m_pIndices && (this._m_pIndices = null),
            null;
            this._m_pTexture ? this.initTexCoordsWithRect(cc.RectMake(0, 0, this._m_pTexture.getPixelsWide(), this._m_pTexture.getPixelsHigh())) : this.initTexCoordsWithRect(cc.RectMake(0, 0, 1, 1));
            this.initIndices();
            return ! 0
        }
        return ! 1
    },
    setTexture: function(a, b) {
        if (b && !0 == b) this._super(a);
        else {
            var c = null,
            c = a instanceof HTMLImageElement || a instanceof HTMLCanvasElement ? cc.SizeMake(a.width, a.height) : a.getContentSize();
            this.setTextureWithRect(a, cc.RectMake(0, 0, c.width, c.height))
        }
    },
    updateQuadWithParticle: function(a, b) {
        var c = this._m_pQuads[this._m_uParticleIdx],
        d = new cc.Color4B(255 * a.color.r, 255 * a.color.g, 255 * a.color.b, 255 * a.color.a);
        c.bl.colors = d;
        c.br.colors = d;
        c.tl.colors = d;
        c.tr.colors = d;
        d = a.size / 2;
        if (a.rotation) {
            var e = -d,
            f = -d,
            g = b.x,
            h = b.y,
            i = -cc.DEGREES_TO_RADIANS(a.rotation),
            j = Math.cos(i),
            i = Math.sin(i);
            c.bl.vertices.x = e * j - f * i + g;
            c.bl.vertices.y = e * i + f * j + h;
            c.br.vertices.x = d * j - f * i + g;
            c.br.vertices.y = d * i + f * j + h;
            c.tl.vertices.x = e * j - d * i + g;
            c.tl.vertices.y = e * i + d * j + h;
            c.tr.vertices.x = d * j - d * i + g;
            c.tr.vertices.y = d * i + d * j + h
        } else c.bl.vertices.x = b.x - d,
        c.bl.vertices.y = b.y - d,
        c.br.vertices.x = b.x + d,
        c.br.vertices.y = b.y - d,
        c.tl.vertices.x = b.x - d,
        c.tl.vertices.y = b.y + d,
        c.tr.vertices.x = b.x + d,
        c.tr.vertices.y = b.y + d
    },
    postStep: function() {
        cc.renderContextType != cc.kCanvas && cc.USES_VBO && (glBindBuffer(GL_ARRAY_BUFFER, m_uQuadsID), glBufferSubData(GL_ARRAY_BUFFER, 0, sizeof(m_pQuads[0]) * m_uParticleCount, m_pQuads), glBindBuffer(GL_ARRAY_BUFFER, 0))
    },
    draw: function(a) {
        this._super();
        if (cc.renderContextType == cc.kCanvas) {
            a = a || cc.renderContext;
            a.save();
            a.globalCompositeOperation = this._m_bIsBlendAdditive ? "lighter": "source-over";
            for (var b = 0; b < this._m_uParticleCount; b++) {
                var c = this._m_pParticles[b],
                d = 0 | 0.5 * c.size;
                if (this._drawMode == cc.kParticleTextureMode) {
                    var e = this.getTexture();
                    if (c.isChangeColor) {
                        var f = cc.TextureCache.sharedTextureCache().getTextureColors(this.getTexture());
                        f && (e = cc.generateTintImage(this.getTexture(), f, c.color))
                    }
                    a.save();
                    a.globalAlpha = c.color.a;
                    a.translate(0 | c.pos.x, -(0 | c.pos.y));
                    a.drawImage(e, d, -(d + c.size), c.size, c.size)
                } else a.save(),
                a.globalAlpha = c.color.a,
                a.translate(0 | c.pos.x, -(0 | c.pos.y)),
                this._shapeType == cc.kParticleStarShape ? cc.drawingUtil.drawStar(a, new cc.Point(0, 0), d, c.color) : cc.drawingUtil.drawColorBall(a, new cc.Point(0, 0), d, c.color);
                a.restore()
            }
            a.restore()
        } else glBindTexture(GL_TEXTURE_2D, this._m_pTexture.getName()),
        a = sizeof(this._m_pQuads[0].bl),
        cc.USES_VBO ? (glBindBuffer(GL_ARRAY_BUFFER, this._m_uQuadsID), cc.ENABLE_CACHE_TEXTTURE_DATA && glBufferData(GL_ARRAY_BUFFER, sizeof(this._m_pQuads[0]) * this._m_uTotalParticles, this._m_pQuads, GL_DYNAMIC_DRAW), glVertexPointer(2, GL_FLOAT, a, 0), glColorPointer(4, GL_UNSIGNED_BYTE, a, offsetof(ccV2F_C4B_T2F, colors)), glTexCoordPointer(2, GL_FLOAT, a, offsetof(ccV2F_C4B_T2F, texCoords))) : (b = this._m_pQuads, c = offsetof(cc.V2F_C4B_T2F, vertices), glVertexPointer(2, GL_FLOAT, a, b + c), c = offsetof(cc.V2F_C4B_T2F, colors), glColorPointer(4, GL_UNSIGNED_BYTE, a, b + c), c = offsetof(cc.V2F_C4B_T2F, texCoords), glTexCoordPointer(2, GL_FLOAT, a, b + c)),
        (a = this._m_tBlendFunc.src != cc.BLEND_SRC || this._m_tBlendFunc.dst != cc.BLEND_DST ? !0 : !1) && glBlendFunc(this._m_tBlendFunc.src, this._m_tBlendFunc.dst),
        cc.Assert(this._m_uParticleIdx == this._m_uParticleCount, "Abnormal error in particle quad"),
        glDrawElements(GL_TRIANGLES, 6 * this._m_uParticleIdx, GL_UNSIGNED_SHORT, this._m_pIndices),
        a && glBlendFunc(cc.BLEND_SRC, cc.BLEND_DST),
        cc.USES_VBO && glBindBuffer(GL_ARRAY_BUFFER, 0)
    }
});
cc.ParticleSystemQuad.particleWithFile = function(a) {
    var b = new cc.ParticleSystemQuad;
    return b && b.initWithFile(a) ? b: null
};
cc.ARCH_OPTIMAL_PARTICLE_SYSTEM = cc.ParticleSystemQuad;
cc = cc = cc || {};
cc.MAX_PARTICLE_SIZE = 64;
cc.ParticleSystemPoint = cc.ParticleSystem.extend({
    _m_pVertices: null,
    _m_uVerticesID: 0,
    initWithTotalParticles: function(a) {
        if (this._super(a)) {
            this._m_pVertices = [];
            for (a = 0; a < this._m_uTotalParticles; a++) this._m_pVertices[a] = new cc.PointSprite(new cc.Vertex2F(0, 0), new cc.Color4B(0, 0, 0, 255), 0);
            if (!this._m_pVertices) return cc.Log("cocos2d: Particle system: not enough memory"),
            !1;
            cc.USES_VBO && (glGenBuffers(1, this._m_uVerticesID), glBindBuffer(GL_ARRAY_BUFFER, this._m_uVerticesID), glBufferData(GL_ARRAY_BUFFER, sizeof(cc.PointSprite) * this._m_uTotalParticles, this._m_pVertices, GL_DYNAMIC_DRAW), glBindBuffer(GL_ARRAY_BUFFER, 0));
            return ! 0
        }
        return ! 1
    },
    updateQuadWithParticle: function(a, b) {
        this._m_pVertices[this._m_uParticleIdx].pos = new cc.Vertex2(b.x, b.y);
        this._m_pVertices[this._m_uParticleIdx].size = a.size;
        this._m_pVertices[this._m_uParticleIdx].color = new cc.Color4B(255 * a.color.r, 255 * a.color.g, 255 * a.color.b, 255 * a.color.a)
    },
    postStep: function() {
        cc.USES_VBO && (glBindBuffer(GL_ARRAY_BUFFER, this._m_uVerticesID), glBufferSubData(GL_ARRAY_BUFFER, 0, sizeof(cc.PointSprite) * this._m_uParticleCount, this._m_pVertices), glBindBuffer(GL_ARRAY_BUFFER, 0))
    },
    draw: function() {
        this._super();
        if (0 != this._m_uParticleIdx) {
            glDisableClientState(GL_TEXTURE_COORD_ARRAY);
            glBindTexture(GL_TEXTURE_2D, this._m_pTexture.getName());
            glEnable(GL_POINT_SPRITE_OES);
            glTexEnvi(GL_POINT_SPRITE_OES, GL_COORD_REPLACE_OES, GL_TRUE);
            var a = sizeof(this._m_pVertices[0]);
            if (cc.USES_VBO) glBindBuffer(GL_ARRAY_BUFFER, m_uVerticesID),
            cc.ENABLE_CACHE_TEXTTURE_DATA && glBufferData(GL_ARRAY_BUFFER, sizeof(cc.PointSprite) * this._m_uTotalParticles, this._m_pVertices, GL_DYNAMIC_DRAW),
            glVertexPointer(2, GL_FLOAT, a, 0),
            glColorPointer(4, GL_UNSIGNED_BYTE, a, offsetof(cc.PointSprite, color)),
            glEnableClientState(GL_POINT_SIZE_ARRAY_OES),
            glPointSizePointerOES(GL_FLOAT, a, offsetof(cc.PointSprite, size));
            else {
                var b = this._m_pVertices.length;
                glVertexPointer(2, GL_FLOAT, a, b);
                var c = offsetof(cc.PointSprite, color);
                glColorPointer(4, GL_UNSIGNED_BYTE, a, b + c);
                glEnableClientState(GL_POINT_SIZE_ARRAY_OES);
                c = offsetof(cc.PointSprite, size);
                glPointSizePointerOES(GL_FLOAT, a, b + c)
            } (a = this._m_tBlendFunc.src != cc.BLEND_SRC || this._m_tBlendFunc.dst != cc.BLEND_DST ? !0 : !1) && glBlendFunc(this._m_tBlendFunc.src, this._m_tBlendFunc.dst);
            glDrawArrays(GL_POINTS, 0, this._m_uParticleIdx);
            a && glBlendFunc(cc.BLEND_SRC, cc.BLEND_DST);
            cc.USES_VBO && glBindBuffer(GL_ARRAY_BUFFER, 0);
            glDisableClientState(GL_POINT_SIZE_ARRAY_OES);
            glDisable(GL_POINT_SPRITE_OES);
            glEnableClientState(GL_TEXTURE_COORD_ARRAY)
        }
    },
    setStartSpin: function(a) {
        cc.Assert(0 == a, "PointParticleSystem doesn't support spinning");
        this._super(a)
    },
    setStartSpinVar: function(a) {
        cc.Assert(0 == a, "PointParticleSystem doesn't support spinning");
        this._super(a)
    },
    setEndSpin: function(a) {
        cc.Assert(0 == a, "PointParticleSystem doesn't support spinning");
        this._super(a)
    },
    setEndSpinVar: function(a) {
        cc.Assert(0 == a, "PointParticleSystem doesn't support spinning");
        this._super(a)
    },
    setStartSize: function(a) {
        cc.Assert(0 <= a && a <= cc.MAX_PARTICLE_SIZE, "PointParticleSystem only supports 0 <= size <= 64");
        this._super(a)
    },
    setEndSize: function(a) {
        cc.Assert(a == cc.kCCParticleStartSizeEqualToEndSize || 0 <= a && a <= cc.MAX_PARTICLE_SIZE, "PointParticleSystem only supports 0 <= size <= 64");
        this._super(a)
    }
});
cc.ParticleSystemPoint.particleWithFile = function(a) {
    var b = new cc.ParticleSystemPoint;
    return b && b.initWithFile(a) ? b: null
};
cc = cc = cc || {};
cc.ParticleFire = cc.ARCH_OPTIMAL_PARTICLE_SYSTEM.extend({
    init: function() {
        return this.initWithTotalParticles(150)
    },
    initWithTotalParticles: function(a) {
        return this._super(a) ? (this._m_fDuration = cc.kCCParticleDurationInfinity, this._m_nEmitterMode = cc.kCCParticleModeGravity, this.modeA.gravity = cc.ccp(0, 0), this.modeA.radialAccel = 0, this.modeA.radialAccelVar = 0, this.modeA.speed = 60, this.modeA.speedVar = 20, this._m_fAngle = 90, this._m_fAngleVar = 10, a = cc.Director.sharedDirector().getWinSize(), this.setPosition(cc.ccp(a.width / 2, 60)), this._m_tPosVar = cc.ccp(40, 20), this._m_fLife = 3, this._m_fLifeVar = 0.25, this._m_fStartSize = 54, this._m_fStartSizeVar = 10, this._m_fEndSize = cc.kCCParticleStartSizeEqualToEndSize, this._m_fEmissionRate = this._m_uTotalParticles / this._m_fLife, this._m_tStartColor.r = 0.76, this._m_tStartColor.g = 0.25, this._m_tStartColor.b = 0.12, this._m_tStartColor.a = 1, this._m_tStartColorVar.r = 0, this._m_tStartColorVar.g = 0, this._m_tStartColorVar.b = 0, this._m_tStartColorVar.a = 0, this._m_tEndColor.r = 0, this._m_tEndColor.g = 0, this._m_tEndColor.b = 0, this._m_tEndColor.a = 1, this._m_tEndColorVar.r = 0, this._m_tEndColorVar.g = 0, this._m_tEndColorVar.b = 0, this._m_tEndColorVar.a = 0, this.setIsBlendAdditive(!0), !0) : !1
    }
});
cc.ParticleFire.node = function() {
    var a = new cc.ParticleFire;
    return a.init() ? a: null
};
cc.ParticleFireworks = cc.ARCH_OPTIMAL_PARTICLE_SYSTEM.extend({
    init: function() {
        return this.initWithTotalParticles(150)
    },
    initWithTotalParticles: function(a) {
        return this._super(a) ? (this._m_fDuration = cc.kCCParticleDurationInfinity, this._m_nEmitterMode = cc.kCCParticleModeGravity, this.modeA.gravity = cc.ccp(0, -90), this.modeA.radialAccel = 0, this.modeA.radialAccelVar = 0, this.modeA.speed = 180, this.modeA.speedVar = 50, a = cc.Director.sharedDirector().getWinSize(), this.setPosition(cc.ccp(a.width / 2, a.height / 2)), this._m_fAngle = 90, this._m_fAngleVar = 20, this._m_fLife = 3.5, this._m_fLifeVar = 1, this._m_fEmissionRate = this._m_uTotalParticles / this._m_fLife, this._m_tStartColor.r = 0.5, this._m_tStartColor.g = 0.5, this._m_tStartColor.b = 0.5, this._m_tStartColor.a = 1, this._m_tStartColorVar.r = 0.5, this._m_tStartColorVar.g = 0.5, this._m_tStartColorVar.b = 0.5, this._m_tStartColorVar.a = 0.1, this._m_tEndColor.r = 0.1, this._m_tEndColor.g = 0.1, this._m_tEndColor.b = 0.1, this._m_tEndColor.a = 0.2, this._m_tEndColorVar.r = 0.1, this._m_tEndColorVar.g = 0.1, this._m_tEndColorVar.b = 0.1, this._m_tEndColorVar.a = 0.2, this._m_fStartSize = 8, this._m_fStartSizeVar = 2, this._m_fEndSize = cc.kCCParticleStartSizeEqualToEndSize, this.setIsBlendAdditive(!1), !0) : !1
    }
});
cc.ParticleFireworks.node = function() {
    var a = new cc.ParticleFireworks;
    return a.init() ? a: null
};
cc.ParticleSun = cc.ARCH_OPTIMAL_PARTICLE_SYSTEM.extend({
    init: function() {
        return this.initWithTotalParticles(150)
    },
    initWithTotalParticles: function(a) {
        return this._super(a) ? (this.setIsBlendAdditive(!0), this._m_fDuration = cc.kCCParticleDurationInfinity, this._m_nEmitterMode = cc.kCCParticleModeGravity, this.modeA.gravity = cc.ccp(0, 0), this.modeA.radialAccel = 0, this.modeA.radialAccelVar = 0, this.modeA.speed = 20, this.modeA.speedVar = 5, this._m_fAngle = 90, this._m_fAngleVar = 360, a = cc.Director.sharedDirector().getWinSize(), this.setPosition(cc.ccp(a.width / 2, a.height / 2)), this._m_tPosVar = cc.PointZero(), this._m_fLife = 1, this._m_fLifeVar = 0.5, this._m_fStartSize = 30, this._m_fStartSizeVar = 10, this._m_fEndSize = cc.kCCParticleStartSizeEqualToEndSize, this._m_fEmissionRate = this._m_uTotalParticles / this._m_fLife, this._m_tStartColor.r = 0.76, this._m_tStartColor.g = 0.25, this._m_tStartColor.b = 0.12, this._m_tStartColor.a = 1, this._m_tStartColorVar.r = 0, this._m_tStartColorVar.g = 0, this._m_tStartColorVar.b = 0, this._m_tStartColorVar.a = 0, this._m_tEndColor.r = 0, this._m_tEndColor.g = 0, this._m_tEndColor.b = 0, this._m_tEndColor.a = 1, this._m_tEndColorVar.r = 0, this._m_tEndColorVar.g = 0, this._m_tEndColorVar.b = 0, this._m_tEndColorVar.a = 0, !0) : !1
    }
});
cc.ParticleSun.node = function() {
    var a = new cc.ParticleSun;
    return a.init() ? a: null
};
cc.ParticleGalaxy = cc.ARCH_OPTIMAL_PARTICLE_SYSTEM.extend({
    init: function() {
        return this.initWithTotalParticles(100)
    },
    initWithTotalParticles: function(a) {
        return this._super(a) ? (this._m_fDuration = cc.kCCParticleDurationInfinity, this._m_nEmitterMode = cc.kCCParticleModeGravity, this.modeA.gravity = cc.ccp(0, 0), this.modeA.speed = 60, this.modeA.speedVar = 10, this.modeA.radialAccel = -80, this.modeA.radialAccelVar = 0, this.modeA.tangentialAccel = 80, this.modeA.tangentialAccelVar = 0, this._m_fAngle = 90, this._m_fAngleVar = 360, a = cc.Director.sharedDirector().getWinSize(), this.setPosition(cc.ccp(a.width / 2, a.height / 2)), this._m_tPosVar = cc.PointZero(), this._m_fLife = 4, this._m_fLifeVar = 1, this._m_fStartSize = 37, this._m_fStartSizeVar = 10, this._m_fEndSize = cc.kCCParticleStartSizeEqualToEndSize, this._m_fEmissionRate = this._m_uTotalParticles / this._m_fLife, this._m_tStartColor.r = 0.12, this._m_tStartColor.g = 0.25, this._m_tStartColor.b = 0.76, this._m_tStartColor.a = 1, this._m_tStartColorVar.r = 0, this._m_tStartColorVar.g = 0, this._m_tStartColorVar.b = 0, this._m_tStartColorVar.a = 0, this._m_tEndColor.r = 0, this._m_tEndColor.g = 0, this._m_tEndColor.b = 0, this._m_tEndColor.a = 1, this._m_tEndColorVar.r = 0, this._m_tEndColorVar.g = 0, this._m_tEndColorVar.b = 0, this._m_tEndColorVar.a = 0, this.setIsBlendAdditive(!0), !0) : !1
    }
});
cc.ParticleGalaxy.node = function() {
    var a = new cc.ParticleGalaxy;
    return a.init() ? a: null
};
cc.ParticleFlower = cc.ARCH_OPTIMAL_PARTICLE_SYSTEM.extend({
    init: function() {
        return this.initWithTotalParticles(100)
    },
    initWithTotalParticles: function(a) {
        return this._super(a) ? (this._m_fDuration = cc.kCCParticleDurationInfinity, this._m_nEmitterMode = cc.kCCParticleModeGravity, this.modeA.gravity = cc.ccp(0, 0), this.modeA.speed = 80, this.modeA.speedVar = 10, this.modeA.radialAccel = -60, this.modeA.radialAccelVar = 0, this.modeA.tangentialAccel = 15, this.modeA.tangentialAccelVar = 0, this._m_fAngle = 90, this._m_fAngleVar = 360, a = cc.Director.sharedDirector().getWinSize(), this.setPosition(cc.ccp(a.width / 2, a.height / 2)), this._m_tPosVar = cc.PointZero(), this._m_fLife = 4, this._m_fLifeVar = 1, this._m_fStartSize = 30, this._m_fStartSizeVar = 10, this._m_fEndSize = cc.kCCParticleStartSizeEqualToEndSize, this._m_fEmissionRate = this._m_uTotalParticles / this._m_fLife, this._m_tStartColor.r = 0.5, this._m_tStartColor.g = 0.5, this._m_tStartColor.b = 0.5, this._m_tStartColor.a = 1, this._m_tStartColorVar.r = 0.5, this._m_tStartColorVar.g = 0.5, this._m_tStartColorVar.b = 0.5, this._m_tStartColorVar.a = 0.5, this._m_tEndColor.r = 0, this._m_tEndColor.g = 0, this._m_tEndColor.b = 0, this._m_tEndColor.a = 1, this._m_tEndColorVar.r = 0, this._m_tEndColorVar.g = 0, this._m_tEndColorVar.b = 0, this._m_tEndColorVar.a = 0, this.setIsBlendAdditive(!0), !0) : !1
    }
});
cc.ParticleFlower.node = function() {
    var a = new cc.ParticleFlower;
    return a.init() ? a: null
};
cc.ParticleMeteor = cc.ARCH_OPTIMAL_PARTICLE_SYSTEM.extend({
    init: function() {
        return this.initWithTotalParticles(100)
    },
    initWithTotalParticles: function(a) {
        return this._super(a) ? (this._m_fDuration = cc.kCCParticleDurationInfinity, this._m_nEmitterMode = cc.kCCParticleModeGravity, this.modeA.gravity = cc.ccp( - 200, 200), this.modeA.speed = 15, this.modeA.speedVar = 5, this.modeA.radialAccel = 0, this.modeA.radialAccelVar = 0, this.modeA.tangentialAccel = 0, this.modeA.tangentialAccelVar = 0, this._m_fAngle = 90, this._m_fAngleVar = 360, a = cc.Director.sharedDirector().getWinSize(), this.setPosition(cc.ccp(a.width / 2, a.height / 2)), this._m_tPosVar = cc.PointZero(), this._m_fLife = 2, this._m_fLifeVar = 1, this._m_fStartSize = 60, this._m_fStartSizeVar = 10, this._m_fEndSize = cc.kCCParticleStartSizeEqualToEndSize, this._m_fEmissionRate = this._m_uTotalParticles / this._m_fLife, this._m_tStartColor.r = 0.2, this._m_tStartColor.g = 0.4, this._m_tStartColor.b = 0.7, this._m_tStartColor.a = 1, this._m_tStartColorVar.r = 0, this._m_tStartColorVar.g = 0, this._m_tStartColorVar.b = 0.2, this._m_tStartColorVar.a = 0.1, this._m_tEndColor.r = 0, this._m_tEndColor.g = 0, this._m_tEndColor.b = 0, this._m_tEndColor.a = 1, this._m_tEndColorVar.r = 0, this._m_tEndColorVar.g = 0, this._m_tEndColorVar.b = 0, this._m_tEndColorVar.a = 0, this.setIsBlendAdditive(!0), !0) : !1
    }
});
cc.ParticleMeteor.node = function() {
    var a = new cc.ParticleMeteor;
    return a.init() ? a: null
};
cc.ParticleSpiral = cc.ARCH_OPTIMAL_PARTICLE_SYSTEM.extend({
    init: function() {
        return this.initWithTotalParticles(100)
    },
    initWithTotalParticles: function(a) {
        return this._super(a) ? (this._m_fDuration = cc.kCCParticleDurationInfinity, this._m_nEmitterMode = cc.kCCParticleModeGravity, this.modeA.gravity = cc.ccp(0, 0), this.modeA.speed = 150, this.modeA.speedVar = 0, this.modeA.radialAccel = -380, this.modeA.radialAccelVar = 0, this.modeA.tangentialAccel = 45, this.modeA.tangentialAccelVar = 0, this._m_fAngle = 90, this._m_fAngleVar = 0, a = cc.Director.sharedDirector().getWinSize(), this.setPosition(cc.ccp(a.width / 2, a.height / 2)), this._m_tPosVar = cc.PointZero(), this._m_fLife = 12, this._m_fLifeVar = 0, this._m_fStartSize = 20, this._m_fStartSizeVar = 0, this._m_fEndSize = cc.kCCParticleStartSizeEqualToEndSize, this._m_fEmissionRate = this._m_uTotalParticles / this._m_fLife, this._m_tStartColor.r = 0.5, this._m_tStartColor.g = 0.5, this._m_tStartColor.b = 0.5, this._m_tStartColor.a = 1, this._m_tStartColorVar.r = 0.5, this._m_tStartColorVar.g = 0.5, this._m_tStartColorVar.b = 0.5, this._m_tStartColorVar.a = 0, this._m_tEndColor.r = 0.5, this._m_tEndColor.g = 0.5, this._m_tEndColor.b = 0.5, this._m_tEndColor.a = 1, this._m_tEndColorVar.r = 0.5, this._m_tEndColorVar.g = 0.5, this._m_tEndColorVar.b = 0.5, this._m_tEndColorVar.a = 0, this.setIsBlendAdditive(!1), !0) : !1
    }
});
cc.ParticleSpiral.node = function() {
    var a = new cc.ParticleSpiral;
    return a.init() ? a: null
};
cc.ParticleExplosion = cc.ARCH_OPTIMAL_PARTICLE_SYSTEM.extend({
    init: function() {
        return this.initWithTotalParticles(300)
    },
    initWithTotalParticles: function(a) {
        return this._super(a) ? (this._m_fDuration = 0.1, this._m_nEmitterMode = cc.kCCParticleModeGravity, this.modeA.gravity = cc.ccp(0, 0), this.modeA.speed = 70, this.modeA.speedVar = 40, this.modeA.radialAccel = 0, this.modeA.radialAccelVar = 0, this.modeA.tangentialAccel = 0, this.modeA.tangentialAccelVar = 0, this._m_fAngle = 90, this._m_fAngleVar = 360, a = cc.Director.sharedDirector().getWinSize(), this.setPosition(cc.ccp(a.width / 2, a.height / 2)), this._m_tPosVar = cc.PointZero(), this._m_fLife = 5, this._m_fLifeVar = 2, this._m_fStartSize = 15, this._m_fStartSizeVar = 10, this._m_fEndSize = cc.kCCParticleStartSizeEqualToEndSize, this._m_fEmissionRate = this._m_uTotalParticles / this._m_fDuration, this._m_tStartColor.r = 0.7, this._m_tStartColor.g = 0.1, this._m_tStartColor.b = 0.2, this._m_tStartColor.a = 1, this._m_tStartColorVar.r = 0.5, this._m_tStartColorVar.g = 0.5, this._m_tStartColorVar.b = 0.5, this._m_tStartColorVar.a = 0, this._m_tEndColor.r = 0.5, this._m_tEndColor.g = 0.5, this._m_tEndColor.b = 0.5, this._m_tEndColor.a = 0, this._m_tEndColorVar.r = 0.5, this._m_tEndColorVar.g = 0.5, this._m_tEndColorVar.b = 0.5, this._m_tEndColorVar.a = 0, this.setIsBlendAdditive(!1), !0) : !1
    }
});
cc.ParticleExplosion.node = function() {
    var a = new cc.ParticleExplosion;
    return a.init() ? a: null
};
cc.ParticleSmoke = cc.ARCH_OPTIMAL_PARTICLE_SYSTEM.extend({
    init: function() {
        return this.initWithTotalParticles(100)
    },
    initWithTotalParticles: function(a) {
        return this._super(a) ? (this._m_fDuration = cc.kCCParticleDurationInfinity, this._m_nEmitterMode = cc.kCCParticleModeGravity, this.modeA.gravity = cc.ccp(0, 0), this.modeA.radialAccel = 0, this.modeA.radialAccelVar = 0, this.modeA.speed = 25, this.modeA.speedVar = 10, this._m_fAngle = 90, this._m_fAngleVar = 5, a = cc.Director.sharedDirector().getWinSize(), this.setPosition(cc.ccp(a.width / 2, 0)), this._m_tPosVar = cc.ccp(20, 0), this._m_fLife = 4, this._m_fLifeVar = 1, this._m_fStartSize = 60, this._m_fStartSizeVar = 10, this._m_fEndSize = cc.kCCParticleStartSizeEqualToEndSize, this._m_fEmissionRate = this._m_uTotalParticles / this._m_fLife, this._m_tStartColor.r = 0.8, this._m_tStartColor.g = 0.8, this._m_tStartColor.b = 0.8, this._m_tStartColor.a = 1, this._m_tStartColorVar.r = 0.02, this._m_tStartColorVar.g = 0.02, this._m_tStartColorVar.b = 0.02, this._m_tStartColorVar.a = 0, this._m_tEndColor.r = 0, this._m_tEndColor.g = 0, this._m_tEndColor.b = 0, this._m_tEndColor.a = 1, this._m_tEndColorVar.r = 0, this._m_tEndColorVar.g = 0, this._m_tEndColorVar.b = 0, this._m_tEndColorVar.a = 0, this.setIsBlendAdditive(!1), !0) : !1
    }
});
cc.ParticleSmoke.node = function() {
    var a = new cc.ParticleSmoke;
    return a.init() ? a: null
};
cc.ParticleSnow = cc.ARCH_OPTIMAL_PARTICLE_SYSTEM.extend({
    init: function() {
        return this.initWithTotalParticles(250)
    },
    initWithTotalParticles: function(a) {
        return this._super(a) ? (this._m_fDuration = cc.kCCParticleDurationInfinity, this._m_nEmitterMode = cc.kCCParticleModeGravity, this.modeA.gravity = cc.ccp(0, -1), this.modeA.speed = 5, this.modeA.speedVar = 1, this.modeA.radialAccel = 0, this.modeA.radialAccelVar = 1, this.modeA.tangentialAccel = 0, this.modeA.tangentialAccelVar = 1, a = cc.Director.sharedDirector().getWinSize(), this.setPosition(cc.ccp(a.width / 2, a.height + 10)), this._m_tPosVar = cc.ccp(a.width / 2, 0), this._m_fAngle = -90, this._m_fAngleVar = 5, this._m_fLife = 45, this._m_fLifeVar = 15, this._m_fStartSize = 10, this._m_fStartSizeVar = 5, this._m_fEndSize = cc.kCCParticleStartSizeEqualToEndSize, this._m_fEmissionRate = 10, this._m_tStartColor.r = 1, this._m_tStartColor.g = 1, this._m_tStartColor.b = 1, this._m_tStartColor.a = 1, this._m_tStartColorVar.r = 0, this._m_tStartColorVar.g = 0, this._m_tStartColorVar.b = 0, this._m_tStartColorVar.a = 0, this._m_tEndColor.r = 1, this._m_tEndColor.g = 1, this._m_tEndColor.b = 1, this._m_tEndColor.a = 0, this._m_tEndColorVar.r = 0, this._m_tEndColorVar.g = 0, this._m_tEndColorVar.b = 0, this._m_tEndColorVar.a = 0, this.setIsBlendAdditive(!1), !0) : !1
    }
});
cc.ParticleSnow.node = function() {
    var a = new cc.ParticleSnow;
    return a.init() ? a: null
};
cc.ParticleRain = cc.ARCH_OPTIMAL_PARTICLE_SYSTEM.extend({
    init: function() {
        return this.initWithTotalParticles(300)
    },
    initWithTotalParticles: function(a) {
        return this._super(a) ? (this._m_fDuration = cc.kCCParticleDurationInfinity, this._m_nEmitterMode = cc.kCCParticleModeGravity, this.modeA.gravity = cc.ccp(10, -10), this.modeA.radialAccel = 0, this.modeA.radialAccelVar = 1, this.modeA.tangentialAccel = 0, this.modeA.tangentialAccelVar = 1, this.modeA.speed = 130, this.modeA.speedVar = 30, this._m_fAngle = -90, this._m_fAngleVar = 5, a = cc.Director.sharedDirector().getWinSize(), this.setPosition(cc.ccp(a.width / 2, a.height)), this._m_tPosVar = cc.ccp(a.width / 2, 0), this._m_fLife = 4.5, this._m_fLifeVar = 0, this._m_fStartSize = 4, this._m_fStartSizeVar = 2, this._m_fEndSize = cc.kCCParticleStartSizeEqualToEndSize, this._m_fEmissionRate = 20, this._m_tStartColor.r = 0.7, this._m_tStartColor.g = 0.8, this._m_tStartColor.b = 1, this._m_tStartColor.a = 1, this._m_tStartColorVar.r = 0, this._m_tStartColorVar.g = 0, this._m_tStartColorVar.b = 0, this._m_tStartColorVar.a = 0, this._m_tEndColor.r = 0.7, this._m_tEndColor.g = 0.8, this._m_tEndColor.b = 1, this._m_tEndColor.a = 0.5, this._m_tEndColorVar.r = 0, this._m_tEndColorVar.g = 0, this._m_tEndColorVar.b = 0, this._m_tEndColorVar.a = 0, this.setIsBlendAdditive(!1), !0) : !1
    }
});
cc.ParticleRain.node = function() {
    var a = new cc.ParticleRain;
    return a.init() ? a: null
};
cc = cc = cc || {};
cc.Touch = cc.Class.extend({
    _m_nViewId: 0,
    _m_point: null,
    _m_prevPoint: cc.PointZero(),
    _m_iId: 0,
    ctor: function(a, b, c) {
        this._m_nViewId = a;
        this._m_point = new cc.Point(b || 0, c || 0)
    },
    locationInView: function() {
        return this._m_point
    },
    previousLocationInView: function() {
        return this._m_prevPoint
    },
    view: function() {
        return this._m_nViewId
    },
    id: function() {
        return this._m_iId
    },
    setTouchInfo: function(a, b, c, d) {
        this._m_nViewId = a;
        this._m_prevPoint = this._m_point;
        this._m_point = new cc.Point(b || 0, c || 0);
        this._m_iId = d || 0
    },
    _setPrevPoint: function(a, b) {
        this._m_prevPoint = new cc.Point(a || 0, b || 0)
    }
});
cc.TouchDelegate = cc.Class.extend({
    _m_pEventTypeFuncMap: null,
    ccTouchBegan: function() {
        return ! 1
    },
    ccTouchMoved: function() {},
    ccTouchEnded: function() {},
    ccTouchCancelled: function() {},
    ccTouchesBegan: function() {},
    ccTouchesMoved: function() {},
    ccTouchesEnded: function() {},
    ccTouchesCancelled: function() {},
    touchDelegateRetain: function() {},
    touchDelegateRelease: function() {}
});
cc.TargetedTouchDelegate = cc.TouchDelegate.extend({
    ccTouchBegan: function() {
        return ! 1
    },
    ccTouchMoved: function() {},
    ccTouchEnded: function() {},
    ccTouchCancelled: function() {}
});
cc.StandardTouchDelegate = cc.TouchDelegate.extend({
    ccTouchesBegan: function() {},
    ccTouchesMoved: function() {},
    ccTouchesEnded: function() {},
    ccTouchesCancelled: function() {}
});
cc = cc = cc || {};
cc.TouchHandler = cc.Class.extend({
    _m_pDelegate: null,
    _m_nPriority: 0,
    _m_nEnabledSelectors: 0,
    getDelegate: function() {
        return this._m_pDelegate
    },
    setDelegate: function(a) {
        this._m_pDelegate = a
    },
    getPriority: function() {
        return this._m_nPriority
    },
    setPriority: function(a) {
        this._m_nPriority = a
    },
    getEnabledSelectors: function() {
        return this._m_nEnabledSelectors
    },
    setEnalbedSelectors: function(a) {
        this._m_nEnabledSelectors = a
    },
    initWithDelegate: function(a, b) {
        cc.Assert(null != a, "TouchHandler.initWithDelegate():touch delegate should not be null");
        this._m_pDelegate = a;
        this._m_nPriority = b;
        this._m_nEnabledSelectors = 0;
        return ! 0
    }
});
cc.TouchHandler.handlerWithDelegate = function(a, b) {
    var c = new cc.TouchHandler;
    c && c.initWithDelegate(a, b);
    return c
};
cc.StandardTouchHandler = cc.TouchHandler.extend({
    initWithDelegate: function(a, b) {
        return this._super(a, b) ? !0 : !1
    }
});
cc.StandardTouchHandler.handlerWithDelegate = function(a, b) {
    var c = new cc.StandardTouchHandler;
    c && c.initWithDelegate(a, b);
    return c
};
cc.TargetedTouchHandler = cc.TouchHandler.extend({
    _m_bSwallowsTouches: !1,
    _m_pClaimedTouches: null,
    isSwallowsTouches: function() {
        return this._m_bSwallowsTouches
    },
    setSwallowsTouches: function(a) {
        this._m_bSwallowsTouches = a
    },
    getClaimedTouches: function() {
        return this._m_pClaimedTouches
    },
    initWithDelegate: function(a, b, c) {
        return this._super(a, b) ? (this._m_pClaimedTouches = [], this._m_bSwallowsTouches = c, !0) : !1
    }
});
cc.TargetedTouchHandler.handlerWithDelegate = function(a, b, c) {
    var d = new cc.TargetedTouchHandler;
    d && d.initWithDelegate(a, b, c);
    return d
};
cc = cc = cc || {};
cc.TouchSelectorBeganBit = 1;
cc.TouchSelectorMovedBit = 2;
cc.TouchSelectorEndedBit = 4;
cc.TouchSelectorCancelledBit = 8;
cc.TouchSelectorAllBits = cc.TouchSelectorBeganBit | cc.TouchSelectorMovedBit | cc.TouchSelectorEndedBit | cc.TouchSelectorCancelledBit;
cc.TOUCHBEGAN = 0;
cc.TOUCHMOVED = 1;
cc.TOUCHENDED = 2;
cc.TOUCHCANCELLED = 3;
cc.TouchMax = 4;
cc.less = function(a, b) {
    return a.getPriority() > b.getPriority()
};
cc.TouchHandlerHelperData = function(a) {
    this.m_type = a
};
cc.TouchDispatcher = cc.Class.extend({
    _m_pTargetedHandlers: null,
    _m_pStandardHandlers: null,
    _m_bLocked: !1,
    _m_bToAdd: !1,
    _m_bToRemove: !1,
    _m_pHandlersToAdd: null,
    _m_pHandlersToRemove: null,
    _m_bToQuit: !1,
    _m_bDispatchEvents: !1,
    _m_sHandlerHelperData: [new cc.TouchHandlerHelperData(cc.TOUCHBEGAN), new cc.TouchHandlerHelperData(cc.TOUCHMOVED), new cc.TouchHandlerHelperData(cc.TOUCHENDED), new cc.TouchHandlerHelperData(cc.TOUCHCANCELLED)],
    init: function() {
        this._m_bDispatchEvents = !0;
        this._m_pTargetedHandlers = [];
        this._m_pStandardHandlers = [];
        this._m_pHandlersToAdd = [];
        this._m_pHandlersToRemove = [];
        this._m_bLocked = this._m_bToQuit = this._m_bToAdd = this._m_bToRemove = !1;
        return ! 0
    },
    isDispatchEvents: function() {
        return this._m_bDispatchEvents
    },
    setDispatchEvents: function(a) {
        this._m_bDispatchEvents = a
    },
    addStandardDelegate: function(a, b) {
        var c = cc.StandardTouchHandler.handlerWithDelegate(a, b);
        this._m_bLocked ? -1 != this._m_pHandlersToRemove.indexOf(a) ? cc.ArrayRemoveObject(this._m_pHandlersToRemove, a) : (this._m_pHandlersToAdd.push(c), this._m_bToAdd = !0) : this._m_pStandardHandlers = this.forceAddHandler(c, this._m_pStandardHandlers)
    },
    addTargetedDelegate: function(a, b, c) {
        b = cc.TargetedTouchHandler.handlerWithDelegate(a, b, c);
        this._m_bLocked ? -1 != this._m_pHandlersToRemove.indexOf(a) ? cc.ArrayRemoveObject(this._m_pHandlersToRemove, a) : (this._m_pHandlersToAdd.push(b), this._m_bToAdd = !0) : this._m_pTargetedHandlers = this.forceAddHandler(b, this._m_pTargetedHandlers)
    },
    forceAddHandler: function(a, b) {
        for (var c = 0,
        d = 0; d < b.length; d++) {
            var e = b[d];
            if (e && (e.getPriority() < a.getPriority() && ++c, e.getDelegate() == a.getDelegate())) return cc.Assert(0, "TouchDispatcher.forceAddHandler()"),
            b
        }
        return cc.ArrayAppendObjectToIndex(b, a, c)
    },
    forceRemoveAllDelegates: function() {
        this._m_pStandardHandlers.length = 0;
        this._m_pTargetedHandlers.length = 0
    },
    removeDelegate: function(a) {
        if (null != a) if (this._m_bLocked) {
            var b = this.findHandler(this._m_pHandlersToAdd, a);
            b ? cc.ArrayRemoveObject(this._m_pHandlersToAdd, b) : (this._m_pHandlersToRemove.push(a), this._m_bToRemove = !0)
        } else this.forceRemoveDelegate(a)
    },
    removeAllDelegates: function() {
        this._m_bLocked ? this._m_bToQuit = !0 : this.forceRemoveAllDelegates()
    },
    setPriority: function(a, b) {
        cc.Assert(null != b, "TouchDispatcher.setPriority():Arguments is null");
        var c = this.findHandler(b);
        cc.Assert(null != c, "TouchDispatcher.setPriority():Cant find TouchHandler");
        c.setPriority(a);
        this.rearrangeHandlers(this._m_pTargetedHandlers);
        this.rearrangeHandlers(this._m_pStandardHandlers)
    },
    touches: function(a, b, c) {
        cc.Assert(0 <= c && 4 > c, "TouchDispatcher.touches()");
        this._m_bLocked = !0;
        var d = this._m_pTargetedHandlers.length,
        e = this._m_pStandardHandlers.length,
        f = d && e,
        g = f ? a.slice() : a,
        h = this._m_sHandlerHelperData[c];
        if (0 < d) for (var i = 0; i < a.length; i++) for (var d = a[i], j, l = 0; l < this._m_pTargetedHandlers.length; l++) {
            j = this._m_pTargetedHandlers[l];
            if (!j) break;
            var k = !1;
            if (c == cc.TOUCHBEGAN)(k = j.getDelegate().ccTouchBegan(d, b)) && j.getClaimedTouches().push(d);
            else if (0 < j.getClaimedTouches().length) switch (k = !0, h.m_type) {
            case cc.TOUCHMOVED:
                j.getDelegate().ccTouchMoved(d, b);
                break;
            case cc.TOUCHENDED:
                j.getDelegate().ccTouchEnded(d, b);
                j.getClaimedTouches().length = 0;
                break;
            case cc.TOUCHCANCELLED:
                j.getDelegate().ccTouchCancelled(d, b),
                j.getClaimedTouches().length = 0
            }
            if (k && j.isSwallowsTouches()) {
                f && cc.ArrayRemoveObject(g, d);
                break
            }
        }
        if (0 < e) for (i = 0; i < this._m_pStandardHandlers.length; i++) {
            j = this._m_pStandardHandlers[i];
            if (!j) break;
            switch (h.m_type) {
            case cc.TOUCHBEGAN:
                0 < g.length && j.getDelegate().ccTouchesBegan(g, b);
                break;
            case cc.TOUCHMOVED:
                0 < g.length && j.getDelegate().ccTouchesMoved(g, b);
                break;
            case cc.TOUCHENDED:
                j.getDelegate().ccTouchesEnded(g, b);
                break;
            case cc.TOUCHCANCELLED:
                j.getDelegate().ccTouchesCancelled(g, b)
            }
        }
        this._m_bLocked = !1;
        if (this._m_bToRemove) {
            this._m_bToRemove = !1;
            for (i = 0; i < this._m_pHandlersToRemove.length; i++) this.forceRemoveDelegate(this._m_pHandlersToRemove[i]);
            this._m_pHandlersToRemove.length = 0
        }
        if (this._m_bToAdd) {
            this._m_bToAdd = !1;
            for (i = 0; i < this._m_pHandlersToAdd.length; i++) {
                j = this._m_pHandlersToAdd[i];
                if (!j) break;
                j instanceof cc.TargetedTouchHandler ? this._m_pTargetedHandlers = this.forceAddHandler(j, this._m_pTargetedHandlers) : this._m_pStandardHandlers = this.forceAddHandler(j, this._m_pStandardHandlers)
            }
            this._m_pHandlersToAdd.length = 0
        }
        this._m_bToQuit && (this._m_bToQuit = !1, this.forceRemoveAllDelegates())
    },
    touchesBegan: function(a, b) {
        this._m_bDispatchEvents && this.touches(a, b, cc.TOUCHBEGAN)
    },
    touchesMoved: function(a, b) {
        this._m_bDispatchEvents && this.touches(a, b, cc.TOUCHMOVED)
    },
    touchesEnded: function(a, b) {
        this._m_bDispatchEvents && this.touches(a, b, cc.TOUCHENDED)
    },
    touchesCancelled: function(a, b) {
        this._m_bDispatchEvents && this.touches(a, b, cc.TOUCHCANCELLED)
    },
    findHandler: function(a, b) {
        switch (arguments.length) {
        case 1:
            for (var b = arguments[0], c = 0; c < this._m_pTargetedHandlers.length; c++) if (this._m_pTargetedHandlers[c].getDelegate() == b) return this._m_pTargetedHandlers[c];
            for (c = 0; c < this._m_pStandardHandlers.length; c++) if (this._m_pStandardHandlers[c].getDelegate() == b) return this._m_pStandardHandlers[c];
            return null;
        case 2:
            cc.Assert(null != a && null != b, "TouchDispatcher.findHandler():Arguments is null");
            for (c = 0; c < a.length; c++) if (a[c].getDelegate() == b) return a[c];
            return null;
        default:
            throw "Argument must be non-nil ";
        }
    },
    forceRemoveDelegate: function(a) {
        for (var b, c = 0; c < this._m_pStandardHandlers.length; c++) if ((b = this._m_pStandardHandlers[c]) && b.getDelegate() == a) {
            cc.ArrayRemoveObject(this._m_pStandardHandlers, b);
            break
        }
        for (c = 0; c < this._m_pTargetedHandlers.length; c++) if ((b = this._m_pTargetedHandlers[c]) && b.getDelegate() == a) {
            cc.ArrayRemoveObject(this._m_pTargetedHandlers, b);
            break
        }
    },
    rearrangeHandlers: function(a) {
        a.sort(cc.less)
    }
});
cc.TouchDispatcher.preTouchPoint = new cc.Point(0, 0);
cc.TouchDispatcher.registerHtmlElementEvent = function(a) {
    a.addEventListener("mousedown",
    function(b) {
        for (var c = a,
        d = null,
        d = a instanceof HTMLCanvasElement ? {
            left: 0,
            top: 0,
            height: c.height
        }: {
            left: 0,
            top: 0,
            height: parseInt(c.style.height)
        }; null != c;) d.left += c.offsetLeft,
        d.top += c.offsetTop,
        c = c.offsetParent;
        c = b.pageY;
        b = (b.pageX - d.left) / cc.Director.sharedDirector().getContentScaleFactor();
        c = (d.height - (c - d.top)) / cc.Director.sharedDirector().getContentScaleFactor();
        d = new cc.Touch(0, b, c);
        d._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y);
        cc.TouchDispatcher.preTouchPoint.x = b;
        cc.TouchDispatcher.preTouchPoint.y = c;
        b = [];
        b.push(d);
        cc.TouchDispatcher.sharedDispatcher().touchesBegan(b, null)
    });
    a.addEventListener("mouseup",
    function(b) {
        for (var c = a,
        d = null,
        d = a instanceof HTMLCanvasElement ? {
            left: 0,
            top: 0,
            height: c.height
        }: {
            left: 0,
            top: 0,
            height: parseInt(c.style.height)
        }; null != c;) d.left += c.offsetLeft,
        d.top += c.offsetTop,
        c = c.offsetParent;
        c = b.pageY;
        b = (b.pageX - d.left) / cc.Director.sharedDirector().getContentScaleFactor();
        c = (d.height - (c - d.top)) / cc.Director.sharedDirector().getContentScaleFactor();
        d = new cc.Touch(0, b, c);
        d._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y);
        cc.TouchDispatcher.preTouchPoint.x = b;
        cc.TouchDispatcher.preTouchPoint.y = c;
        b = [];
        b.push(d);
        cc.TouchDispatcher.sharedDispatcher().touchesEnded(b, null)
    });
    a.addEventListener("mousemove",
    function(b) {
        for (var c = a,
        d = null,
        d = a instanceof HTMLCanvasElement ? {
            left: 0,
            top: 0,
            height: c.height
        }: {
            left: 0,
            top: 0,
            height: parseInt(c.style.height)
        }; null != c;) d.left += c.offsetLeft,
        d.top += c.offsetTop,
        c = c.offsetParent;
        c = b.pageY;
        b = (b.pageX - d.left) / cc.Director.sharedDirector().getContentScaleFactor();
        c = (d.height - (c - d.top)) / cc.Director.sharedDirector().getContentScaleFactor();
        d = new cc.Touch(0, b, c);
        d._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y);
        cc.TouchDispatcher.preTouchPoint.x = b;
        cc.TouchDispatcher.preTouchPoint.y = c;
        b = [];
        b.push(d);
        cc.TouchDispatcher.sharedDispatcher().touchesMoved(b, null)
    });
    a.addEventListener("touchstart",
    function(b) {
        if (b.touches) {
            for (var c = [], d = a, e = null, e = a instanceof HTMLCanvasElement ? {
                left: 0,
                top: 0,
                height: d.height
            }: {
                left: 0,
                top: 0,
                height: parseInt(d.style.height)
            }; null != d;) e.left += d.offsetLeft,
            e.top += d.offsetTop,
            d = d.offsetParent;
            e.left -= document.body.scrollLeft;
            e.top -= document.body.scrollTop;
            for (d = 0; d < b.touches.length; d++) {
                var f = b.touches[d].pageX,
                g = b.touches[d].pageY;
                b.touches[d] && (f = b.touches[d].clientX, g = b.touches[d].clientY);
                var f = (f - e.left) / cc.Director.sharedDirector().getContentScaleFactor(),
                g = (e.height - (g - e.top)) / cc.Director.sharedDirector().getContentScaleFactor(),
                h = new cc.Touch(0, f, g);
                h._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y);
                cc.TouchDispatcher.preTouchPoint.x = f;
                cc.TouchDispatcher.preTouchPoint.y = g;
                c.push(h)
            }
            cc.TouchDispatcher.sharedDispatcher().touchesBegan(c, null);
            b.stopPropagation();
            b.preventDefault()
        }
    },
    !1);
    a.addEventListener("touchmove",
    function(b) {
        if (b.touches) {
            for (var c = [], d = a, e = null, e = a instanceof HTMLCanvasElement ? {
                left: 0,
                top: 0,
                height: d.height
            }: {
                left: 0,
                top: 0,
                height: parseInt(d.style.height)
            }; null != d;) e.left += d.offsetLeft,
            e.top += d.offsetTop,
            d = d.offsetParent;
            e.left -= document.body.scrollLeft;
            e.top -= document.body.scrollTop;
            for (d = 0; d < b.touches.length; d++) {
                var f = b.touches[d].pageX,
                g = b.touches[d].pageY;
                b.touches[d] && (f = b.touches[d].clientX, g = b.touches[d].clientY);
                var f = (f - e.left) / cc.Director.sharedDirector().getContentScaleFactor(),
                g = (e.height - (g - e.top)) / cc.Director.sharedDirector().getContentScaleFactor(),
                h = new cc.Touch(0, f, g);
                h._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y);
                cc.TouchDispatcher.preTouchPoint.x = f;
                cc.TouchDispatcher.preTouchPoint.y = g;
                c.push(h)
            }
            cc.TouchDispatcher.sharedDispatcher().touchesMoved(c, null);
            b.stopPropagation();
            b.preventDefault()
        }
    },
    !1);
    a.addEventListener("touchend",
    function(b) {
        if (b.touches) {
            for (var c = [], d = a, e = null, e = a instanceof HTMLCanvasElement ? {
                left: 0,
                top: 0,
                height: d.height
            }: {
                left: 0,
                top: 0,
                height: parseInt(d.style.height)
            }; null != d;) e.left += d.offsetLeft,
            e.top += d.offsetTop,
            d = d.offsetParent;
            e.left -= document.body.scrollLeft;
            e.top -= document.body.scrollTop;
            d = b.touches;
            if (!d || 0 == d.length) d = b.changedTouches;
            for (var f = 0; f < d.length; f++) {
                var g = d[f].pageX,
                h = d[f].pageY;
                d[f] && (g = d[f].clientX, h = d[f].clientY);
                var g = (g - e.left) / cc.Director.sharedDirector().getContentScaleFactor(),
                h = (e.height - (h - e.top)) / cc.Director.sharedDirector().getContentScaleFactor(),
                i = new cc.Touch(0, g, h);
                i._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y);
                cc.TouchDispatcher.preTouchPoint.x = g;
                cc.TouchDispatcher.preTouchPoint.y = h;
                c.push(i)
            }
            cc.TouchDispatcher.sharedDispatcher().touchesEnded(c, null);
            b.stopPropagation();
            b.preventDefault()
        }
    },
    !1);
    a.addEventListener("touchcancel",
    function(b) {
        if (b.touches) {
            for (var c = [], d = a, e = null, e = a instanceof HTMLCanvasElement ? {
                left: 0,
                top: 0,
                height: d.height
            }: {
                left: 0,
                top: 0,
                height: parseInt(d.style.height)
            }; null != d;) e.left += d.offsetLeft,
            e.top += d.offsetTop,
            d = d.offsetParent;
            e.left -= document.body.scrollLeft;
            e.top -= document.body.scrollTop;
            for (d = 0; d < b.touches.length; d++) {
                var f = b.touches[d].pageX,
                g = b.touches[d].pageY;
                b.touches[d] && (f = b.touches[d].clientX, g = b.touches[d].clientY);
                var f = (f - e.left) / cc.Director.sharedDirector().getContentScaleFactor(),
                g = (e.height - (g - e.top)) / cc.Director.sharedDirector().getContentScaleFactor(),
                h = new cc.Touch(0, f, g);
                h._setPrevPoint(cc.TouchDispatcher.preTouchPoint.x, cc.TouchDispatcher.preTouchPoint.y);
                cc.TouchDispatcher.preTouchPoint.x = f;
                cc.TouchDispatcher.preTouchPoint.y = g;
                c.push(h)
            }
            cc.TouchDispatcher.sharedDispatcher().touchesCancelled(c, null);
            b.stopPropagation();
            b.preventDefault()
        }
    },
    !1)
};
cc._pSharedDispatcher = null;
cc.TouchDispatcher.sharedDispatcher = function() {
    null == cc._pSharedDispatcher && (cc._pSharedDispatcher = new cc.TouchDispatcher, cc._pSharedDispatcher.init(), cc.TouchDispatcher.registerHtmlElementEvent(cc.canvas));
    return cc._pSharedDispatcher
};
cc = cc = cc || {};
cc.KeypadDelegate = cc.Class.extend({
    keyDown: function() {},
    keyUp: function() {}
});
cc.KeypadHandler = cc.Class.extend({
    getDelegate: function() {
        return this._m_pDelegate
    },
    setDelegate: function(a) {
        this._m_pDelegate = a
    },
    initWithDelegate: function(a) {
        cc.Assert(null != a, "It's a wrong delegate!");
        this._m_pDelegate = a;
        return ! 0
    },
    _m_pDelegate: null
});
cc.KeypadHandler.handlerWithDelegate = function(a) {
    var b = new cc.KeypadHandler;
    b.initWithDelegate(a);
    return b
};
cc = cc = cc || {};
cc.kTypeBackClicked = 1;
cc.kTypeMenuClicked = 2;
cc.key = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pause: 19,
    capslock: 20,
    escape: 27,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    Delete: 46,
    "0": 48,
    1 : 49,
    2 : 50,
    3 : 51,
    4 : 52,
    5 : 53,
    6 : 54,
    7 : 55,
    8 : 56,
    9 : 57,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    num0: 96,
    num1: 97,
    num2: 98,
    num3: 99,
    num4: 100,
    num5: 101,
    num6: 102,
    num7: 103,
    num8: 104,
    num9: 105,
    "*": 106,
    "+": 107,
    "-": 109,
    numdel: 110,
    "/": 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrolllock: 145,
    semicolon: 186,
    ",": 186,
    equal: 187,
    "=": 187,
    ";": 188,
    comma: 188,
    dash: 189,
    ".": 190,
    period: 190,
    forwardslash: 191,
    grave: 192,
    "[": 219,
    openbracket: 219,
    "]": 221,
    closebracket: 221,
    backslash: 220,
    quote: 222,
    space: 32
};
cc.s_KeypadDispatcher = null;
cc.KeypadDispatcher = cc.Class.extend({
    addDelegate: function(a) {
        a && (this._m_bLocked ? (this._m_pHandlersToAdd.push(a), this._m_bToAdd = !0) : this.forceAddDelegate(a))
    },
    removeDelegate: function(a) {
        a && (this._m_bLocked ? (this._m_pHandlersToRemove.push(a), this._m_bToRemove = !0) : this.forceRemoveDelegate(a))
    },
    forceAddDelegate: function(a) {
        if (a = cc.KeypadHandler.handlerWithDelegate(a)) {
            for (var b = 0; b < this._m_pDelegates; b++) this._m_pDelegates[b].getDelegate(),
            a.getDelegate();
            this._m_pDelegates.push(a)
        }
    },
    forceRemoveDelegate: function(a) { - 1 != this._m_pDelegates.indexOf(a) && this._m_pDelegates.splice(this._m_pDelegates.indexOf(a), 1)
    },
    dispatchKeypadMSG: function(a, b) {
        this._m_bLocked = !0;
        a.stopPropagation();
        a.preventDefault();
        if (b && a) for (var c = 0; c < this._m_pDelegates.length; c++) this._m_pDelegates[c].getDelegate().keyDown(a.keyCode);
        else if (!b && a) for (c = 0; c < this._m_pDelegates.length; c++) this._m_pDelegates[c].getDelegate().keyUp(a.keyCode);
        this._m_bLocked = !1;
        if (this._m_bToRemove) {
            this._m_bToRemove = !1;
            for (c = 0; c < this._m_pHandlersToRemove.length; ++c) this.forceRemoveDelegate(this._m_pHandlersToRemove[c]);
            delete this._m_pHandlersToRemove;
            this._m_pHandlersToRemove = []
        }
        if (this._m_bToAdd) {
            this._m_bToAdd = !1;
            for (c = 0; c < this._m_pHandlersToAdd.length; ++c) this.forceAddDelegate(this._m_pHandlersToAdd[c]);
            this._m_pHandlersToAdd = []
        }
        return ! 0
    },
    _m_pDelegates: [],
    _m_bLocked: !1,
    _m_bToAdd: !1,
    _m_bToRemove: !1,
    _m_pHandlersToAdd: [],
    _m_pHandlersToRemove: []
});
cc.KeypadDispatcher.sharedDispatcher = function() {
    cc.s_KeypadDispatcher || (cc.s_KeypadDispatcher = new cc.KeypadDispatcher, document.addEventListener("keydown",
    function(a) {
        cc.s_KeypadDispatcher.dispatchKeypadMSG(a, !0);
        cc.IMEDispatcher.sharedDispatcher().processKeycode(a.keyCode)
    }), document.addEventListener("keyup",
    function(a) {
        cc.s_KeypadDispatcher.dispatchKeypadMSG(a, !1)
    }));
    return cc.s_KeypadDispatcher
};
cc.KeypadDispatcher.purgeSharedDispatcher = function() {
    cc.s_KeypadDispatcher && (delete cc.s_KeypadDispatcher, cc.s_KeypadDispatcher = null)
};
cc = cc = cc || {};
cc.IMEKeyboardNotificationInfo = function(a, b, c) {
    this.begin = a || cc.RectZero();
    this.end = b || cc.RectZero();
    this.duration = c || 0
};
cc.IMEDelegate = cc.Class.extend({
    ctor: function() {
        cc.IMEDispatcher.sharedDispatcher().addDelegate(this)
    },
    removeDelegate: function() {
        cc.IMEDispatcher.sharedDispatcher().removeDelegate(this)
    },
    attachWithIME: function() {
        return cc.IMEDispatcher.sharedDispatcher().attachDelegateWithIME(this)
    },
    detachWithIME: function() {
        return cc.IMEDispatcher.sharedDispatcher().detachDelegateWithIME(this)
    },
    canAttachWithIME: function() {
        return ! 1
    },
    didAttachWithIME: function() {},
    canDetachWithIME: function() {
        return ! 1
    },
    didDetachWithIME: function() {},
    insertText: function() {},
    deleteBackward: function() {},
    getContentText: function() {
        return ""
    },
    keyboardWillShow: function() {},
    keyboardDidShow: function() {},
    keyboardWillHide: function() {},
    keyboardDidHide: function() {}
});
cc.IMEDispatcher = cc.Class.extend({
    _pImpl: null,
    ctor: function() {
        this._pImpl = new cc.IMEDispatcher.Impl
    },
    dispatchInsertText: function(a, b) {
        this._pImpl && a && !(0 >= b) && this._pImpl._delegateWithIme && this._pImpl._delegateWithIme.insertText(a, b)
    },
    dispatchDeleteBackward: function() {
        this._pImpl && this._pImpl._delegateWithIme && this._pImpl._delegateWithIme.deleteBackward()
    },
    getContentText: function() {
        if (this._pImpl && this._pImpl._delegateWithIme) {
            var a = this._pImpl._delegateWithIme.getContentText();
            return a ? a: ""
        }
        return ""
    },
    dispatchKeyboardWillShow: function(a) {
        if (this._pImpl) for (var b = 0; b < this._pImpl._delegateList.length; b++) {
            var c = this._pImpl._delegateList[b];
            c && c.keyboardWillShow(a)
        }
    },
    dispatchKeyboardDidShow: function(a) {
        if (this._pImpl) for (var b = 0; b < this._pImpl._delegateList.length; b++) {
            var c = this._pImpl._delegateList[b];
            c && c.keyboardDidShow(a)
        }
    },
    dispatchKeyboardWillHide: function(a) {
        if (this._pImpl) for (var b = 0; b < this._pImpl._delegateList.length; b++) {
            var c = this._pImpl._delegateList[b];
            c && c.keyboardWillHide(a)
        }
    },
    dispatchKeyboardDidHide: function(a) {
        if (this._pImpl) for (var b = 0; b < this._pImpl._delegateList.length; b++) {
            var c = this._pImpl._delegateList[b];
            c && c.keyboardDidHide(a)
        }
    },
    addDelegate: function(a) {
        a && this._pImpl && !( - 1 < this._pImpl._delegateList.indexOf(a)) && (this._pImpl._delegateList = cc.ArrayAppendObjectToIndex(this._pImpl._delegateList, a, 0))
    },
    attachDelegateWithIME: function(a) {
        if (!this._pImpl || !a || -1 == this._pImpl._delegateList.indexOf(a)) return ! 1;
        if (this._pImpl._delegateWithIme) {
            if (!this._pImpl._delegateWithIme.canDetachWithIME() || !a.canAttachWithIME()) return ! 1;
            var b = this._pImpl._delegateWithIme;
            this._pImpl._delegateWithIme = null;
            b.didDetachWithIME();
            this._pImpl._delegateWithIme = a;
            a.didAttachWithIME();
            return ! 0
        }
        if (!a.canAttachWithIME()) return ! 1;
        this._pImpl._delegateWithIme = a;
        a.didAttachWithIME();
        return ! 0
    },
    detachDelegateWithIME: function(a) {
        if (!this._pImpl || !a || this._pImpl._delegateWithIme != a || !a.canDetachWithIME()) return ! 1;
        this._pImpl._delegateWithIme = 0;
        a.didDetachWithIME();
        return ! 0
    },
    removeDelegate: function(a) {
        this._pImpl && a && -1 != this._pImpl._delegateList.indexOf(a) && (this._pImpl._delegateWithIme && a == this._pImpl._delegateWithIme && (this._pImpl._delegateWithIme = null), cc.ArrayRemoveObject(this._pImpl._delegateList, a))
    },
    processKeycode: function(a) {
        32 > a ? a == cc.key.backspace ? this.dispatchDeleteBackward() : a == cc.key.enter && this.dispatchInsertText("\n", 1) : 255 > a && this.dispatchInsertText(String.fromCharCode(a), 1)
    }
});
cc.IMEDispatcher.Impl = cc.Class.extend({
    _delegateWithIme: null,
    _delegateList: null,
    ctor: function() {
        this._delegateList = []
    },
    findDelegate: function(a) {
        for (var b = 0; b < this._delegateList.length; b++) if (this._delegateList[b] == a) return b;
        return null
    }
});
cc.IMEDispatcher.sharedDispatcher = function() {
    cc.IMEDispatcher.s_instance || (cc.IMEDispatcher.s_instance = new cc.IMEDispatcher, cc.KeypadDispatcher.sharedDispatcher());
    return cc.IMEDispatcher.s_instance
};
cc.IMEDispatcher.s_instance = null;
cc = cc = cc || {};
cc.TextFieldDelegate = cc.Class.extend({
    onTextFieldAttachWithIME: function() {
        return ! 1
    },
    onTextFieldDetachWithIME: function() {
        return ! 1
    },
    onTextFieldInsertText: function() {
        return ! 1
    },
    onTextFieldDeleteBackward: function() {
        return ! 1
    },
    onDraw: function() {
        return ! 1
    }
});
cc.TextFieldTTF = cc.LabelTTF.extend({
    _pLens: null,
    _pInputText: "",
    _pPlaceHolder: "",
    _pDelegate: null,
    getDelegate: function() {
        return this._pDelegate
    },
    setDelegate: function(a) {
        this._pDelegate = a
    },
    _nCharCount: 0,
    getCharCount: function() {
        return this._nCharCount
    },
    _ColorSpaceHolder: null,
    getColorSpaceHolder: function() {
        return this._ColorSpaceHolder
    },
    setColorSpaceHolder: function(a) {
        this._ColorSpaceHolder = a
    },
    ctor: function() {
        this._ColorSpaceHolder = new cc.Color3B(127, 127, 127);
        cc.IMEDispatcher.sharedDispatcher().addDelegate(this);
        this._super()
    },
    initWithPlaceHolder: function(a, b, c, d, e) {
        switch (arguments.length) {
        case 5:
            return a && (this._pPlaceHolder = a),
            this.initWithString(this._pPlaceHolder, b, c, d, e);
        case 3:
            return a && (this._pPlaceHolder = a),
            d = arguments[1],
            e = arguments[2],
            this.initWithString(this._pPlaceHolder, d, e);
        default:
            throw "Argument must be non-nil ";
        }
    },
    setString: function(a, b) {
        b && !0 == b ? this._super(a) : (this._pInputText = a ? a: "", this._pInputText.length ? this._super(this._pInputText) : this._super(this._pPlaceHolder), this._nCharCount = this._pInputText.length)
    },
    getString: function() {
        return this._pInputText
    },
    setPlaceHolder: function(a) {
        this._pPlaceHolder = a || "";
        this._pInputText.length || this.setString(this._pPlaceHolder, !0)
    },
    getPlaceHolder: function() {
        return this._pPlaceHolder
    },
    draw: function(a) {
        a = a || cc.renderContext;
        if (!this._pDelegate || !this._pDelegate.onDraw(this)) if (this._pInputText) this._super(a);
        else {
            var b = this.getColor();
            this.setColor(this._ColorSpaceHolder);
            this._super(a);
            this.setColor(b)
        }
    },
    attachWithIME: function() {
        return cc.IMEDispatcher.sharedDispatcher().attachDelegateWithIME(this)
    },
    detachWithIME: function() {
        return cc.IMEDispatcher.sharedDispatcher().detachDelegateWithIME(this)
    },
    canAttachWithIME: function() {
        return this._pDelegate ? !this._pDelegate.onTextFieldAttachWithIME(this) : !0
    },
    didAttachWithIME: function() {},
    canDetachWithIME: function() {
        return this._pDelegate ? !this._pDelegate.onTextFieldDetachWithIME(this) : !0
    },
    didDetachWithIME: function() {},
    deleteBackward: function() {
        var a = this._pInputText.length;
        if (0 != a && (!this._pDelegate || !this._pDelegate.onTextFieldDeleteBackward(this, this._pInputText[a - 1], 1))) 1 >= a ? (this._pInputText = "", this._nCharCount = 0, this.setString(this._pPlaceHolder, !0)) : this.setString(this._pInputText.substring(0, a - 1))
    },
    removeDelegate: function() {
        cc.IMEDispatcher.sharedDispatcher().removeDelegate(this)
    },
    insertText: function(a) {
        var b = a,
        a = b.indexOf("\n"); - 1 < a && (b = b.substring(0, a));
        if (0 < b.length) {
            if (this._pDelegate && this._pDelegate.onTextFieldInsertText(this, b, b.length)) return;
            b = this._pInputText + b;
            this._nCharCount = b.length;
            this.setString(b)
        } - 1 != a && (!this._pDelegate || !this._pDelegate.onTextFieldInsertText(this, "\n", 1)) && this.detachWithIME()
    },
    getContentText: function() {
        return this._pInputText
    },
    keyboardWillShow: function() {},
    keyboardDidShow: function() {},
    keyboardWillHide: function() {},
    keyboardDidHide: function() {}
});
cc.TextFieldTTF.textFieldWithPlaceHolder = function(a, b, c, d, e) {
    switch (arguments.length) {
    case 5:
        var f = new cc.TextFieldTTF;
        return f && f.initWithPlaceHolder("", b, c, d, e) ? (a && f.setPlaceHolder(a), f) : null;
    case 3:
        return f = new cc.TextFieldTTF,
        d = arguments[1],
        e = arguments[2],
        f && f.initWithString("", d, e) ? (a && f.setPlaceHolder(a), f) : null;
    default:
        throw "Argument must be non-nil ";
    }
};
cc = cc = cc || {};
cc.kCCDirectorProjection2D = 0;
cc.kCCDirectorProjection3D = 1;
cc.kCCDirectorProjectionCustom = 3;
cc.kCCDirectorProjectionDefault = cc.kCCDirectorProjection3D;
cc.DirectorProjection2D = cc.kCCDirectorProjection2D;
cc.DirectorProjection3D = cc.kCCDirectorProjection3D;
cc.DirectorProjectionCustom = cc.kCCDirectorProjectionCustom;
cc.kCCDirectorTypeNSTimer = 0;
cc.kCCDirectorTypeMainLoop = 1;
cc.kCCDirectorTypeThreadMainLoop = 2;
cc.kCCDirectorTypeDisplayLink = 3;
cc.kCCDirectorTypeDefault = cc.kCCDirectorTypeNSTimer;
cc.DirectorTypeNSTimer = cc.kCCDirectorTypeNSTimer;
cc.DirectorTypeMainLoop = cc.kCCDirectorTypeMainLoop;
cc.DirectorTypeThreadMainLoop = cc.kCCDirectorTypeThreadMainLoop;
cc.DirectorTypeDisplayLink = cc.kCCDirectorTypeDisplayLink;
cc.DirectorTypeDefault = cc.kCCDirectorTypeDefault;
cc.kCCDeviceOrientationPortrait = 0;
cc.kCCDeviceOrientationLandscapeLeft = 1;
cc.kCCDeviceOrientationPortraitUpsideDown = 2;
cc.kCCDeviceOrientationLandscapeRight = 3;
cc.DeviceMaxOrientations = 2;
cc.DeviceOrientationPortrait = cc.kCCDeviceOrientationPortrait;
cc.DeviceOrientationPortraitUpsideDown = cc.kCCDeviceOrientationPortraitUpsideDown;
cc.DeviceOrientationLandscapeLeft = cc.kCCDeviceOrientationLandscapeLeft;
cc.DeviceOrientationLandscapeRight = cc.kCCDeviceOrientationLandscapeRight;
cc.Director = cc.Class.extend({
    _m_bDisplayFPS: !1,
    _m_bIsContentScaleSupported: !1,
    _m_bLandscape: !1,
    _m_bNextDeltaTimeZero: !1,
    _m_bPaused: !1,
    _m_bPurgeDirecotorInNextLoop: !1,
    _m_bRetinaDisplay: !1,
    _m_bSendCleanupToScene: !1,
    _m_dAnimationInterval: 0,
    _m_dOldAnimationInterval: 0,
    _m_eDeviceOrientation: 0,
    _m_eProjection: 0,
    _m_fAccumDt: 0,
    _m_fAccumDtForProfiler: 0,
    _m_fContentScaleFactor: 1,
    _m_fDeltaTime: 0,
    _m_fFrameRate: 0,
    _m_obWinSizeInPixels: null,
    _m_obWinSizeInPoints: null,
    _m_pFPSLabel: null,
    _m_pLastUpdate: null,
    _m_pNextScene: null,
    _m_pNotificationNode: null,
    _m_pobOpenGLView: null,
    _m_pobScenesStack: null,
    _m_pProjectionDelegate: null,
    _m_pRunningScene: null,
    _m_pszFPS: "",
    _m_uFrames: 0,
    _m_uTotalFrames: 0,
    _dirtyRegion: null,
    init: function() {
        this._m_pFPSLabel || (this._m_pFPSLabel = cc.LabelTTF.labelWithString("00.0", "Arial", 24));
        this._m_pFPSLabel.setPosition(cc.ccp(0, 0));
        this._m_pFPSLabel.setAnchorPoint(cc.ccp(0, 0));
        this._m_pNotificationNode = this._m_pNextScene = this._m_pRunningScene = null;
        this._m_dOldAnimationInterval = this._m_dAnimationInterval = 1 / cc.kDefaultFPS;
        this._m_pobScenesStack = [];
        this._m_eProjection = cc.kCCDirectorProjectionDefault;
        this._m_pProjectionDelegate = null;
        this._m_bDisplayFPS = !1;
        this._m_uTotalFrames = this._m_uFrames = 0;
        this._m_pszFPS = "";
        this._m_pLastUpdate = new cc.timeval;
        this._m_bPurgeDirecotorInNextLoop = this._m_bPaused = !1;
        this._m_obWinSizeInPixels = this._m_obWinSizeInPoints = cc.SizeMake(cc.canvas.width, cc.canvas.height);
        this._m_eDeviceOrientation = cc.DeviceOrientationPortrait;
        this._m_pobOpenGLView = null;
        this._m_bRetinaDisplay = !1;
        this._m_fContentScaleFactor = 1;
        this._m_bIsContentScaleSupported = !1;
        return ! 0
    },
    applyOrientation: function() {},
    calculateDeltaTime: function() {
        var a = new cc.timeval; (a = cc.Time.gettimeofdayCocos2d()) ? (this._m_bNextDeltaTimeZero ? (this._m_fDeltaTime = 0, this._m_bNextDeltaTimeZero = !1) : (this._m_fDeltaTime = a.tv_sec - this._m_pLastUpdate.tv_sec + (a.tv_usec - this._m_pLastUpdate.tv_usec) / 1E6, this._m_fDeltaTime = Math.max(0, this._m_fDeltaTime)), cc.DEBUG && 0.2 < this._m_fDeltaTime && (this._m_fDeltaTime = 1 / 60), this._m_pLastUpdate = a) : (cc.LOG("error in gettimeofday"), this._m_fDeltaTime = 0)
    },
    convertToGL: function(a) {
        var b = this._m_obWinSizeInPoints,
        c = b.height - a.y,
        b = b.width - a.x,
        d = cc.PointZero();
        switch (this._m_eDeviceOrientation) {
        case cc.DeviceOrientationPortrait:
            d = cc.ccp(a.x, c);
            break;
        case cc.DeviceOrientationPortraitUpsideDown:
            d = cc.ccp(b, a.y);
            break;
        case cc.DeviceOrientationLandscapeLeft:
            d.x = a.y;
            d.y = a.x;
            break;
        case cc.DeviceOrientationLandscapeRight:
            d.x = c,
            d.y = b
        }
        return d
    },
    convertToUI: function(a) {
        var b = this._m_obWinSizeInPoints,
        c = b.width - a.x,
        d = b.height - a.y,
        e = cc.PointZero();
        switch (this._m_eDeviceOrientation) {
        case cc.DeviceOrientationPortrait:
            e = cc.ccp(a.x, d);
            break;
        case cc.DeviceOrientationPortraitUpsideDown:
            e = cc.ccp(c, a.y);
            break;
        case cc.DeviceOrientationLandscapeLeft:
            e = cc.ccp(a.y, a.x);
            break;
        case cc.DeviceOrientationLandscapeRight:
            e = cc.ccp(b.width - a.y, b.height - a.x)
        }
        return e
    },
    drawScene: function() {
        this.calculateDeltaTime();
        this._m_bPaused || cc.Scheduler.sharedScheduler().tick(this._m_fDeltaTime);
        cc.renderContext.clearRect(0, 0, cc.canvas.width, -cc.canvas.height);
        this._m_pNextScene && this.setNextScene();
        this.applyOrientation();
        cc.ENABLE_DEFAULT_GL_STATES();
        this._m_pRunningScene && this._m_pRunningScene.visit();
        this._m_pNotificationNode && this._m_pNotificationNode.visit();
        this._m_bDisplayFPS && this.showFPS();
        cc.ENABLE_PROFILERS && this.showProfilers();
        cc.DISABLE_DEFAULT_GL_STATES();
        this._m_uTotalFrames++;
        this._m_pobOpenGLView && this._m_pobOpenGLView.swapBuffers()
    },
    addRegionToDirtyRegion: function(a) {
        a && (this._dirtyRegion = this._dirtyRegion ? cc.Rect.CCRectUnion(this._dirtyRegion, new cc.Rect(a.origin.x, a.origin.y, a.size.width, a.size.height)) : new cc.Rect(a.origin.x, a.origin.y, a.size.width, a.size.height))
    },
    rectIsInDirtyRegion: function(a) {
        return ! a || !this._fullRect ? !1 : cc.Rect.CCRectIntersectsRect(this._fullRect, a)
    },
    enableRetinaDisplay: function(a) {
        if (a && 2 == this._m_fContentScaleFactor) return ! 0;
        if (!a && 1 == this._m_fContentScaleFactor || !this._m_pobOpenGLView.canSetContentScaleFactor()) return ! 1;
        this.setContentScaleFactor(a ? 2 : 1);
        cc.TextureCache.purgeSharedTextureCache();
        cc.DIRECTOR_FAST_FPS && !this._m_pFPSLabel && (this._m_pFPSLabel = cc.LabelTTF.labelWithString("00.0", "Arial", 24), this._m_pFPSLabel.setPosition(cc.ccp(0, 0)), this._m_pFPSLabel.setAnchorPoint(cc.ccp(0, 0)));
        this._m_bRetinaDisplay = 2 == this._m_fContentScaleFactor;
        return ! 0
    },
    end: function() {
        this._m_bPurgeDirecotorInNextLoop = !0
    },
    getContentScaleFactor: function() {
        return this._m_fContentScaleFactor
    },
    getDeviceOrientation: function() {
        return this._m_eDeviceOrientation
    },
    getDisplaySizeInPixels: function() {
        return this._m_obWinSizeInPixels
    },
    getNotificationNode: function() {
        return this._m_pNotificationNode
    },
    getWinSize: function() {
        var a = this._m_obWinSizeInPoints;
        if (this._m_eDeviceOrientation == cc.DeviceOrientationLandscapeLeft || this._m_eDeviceOrientation == cc.DeviceOrientationLandscapeRight) {
            var b = new cc.SizeZero;
            b.width = a.height;
            b.height = a.width;
            return b
        }
        return a
    },
    getWinSizeInPixels: function() {
        var a = this.getWinSize();
        a.width *= cc.CONTENT_SCALE_FACTOR();
        a.height *= cc.CONTENT_SCALE_FACTOR();
        return a
    },
    getZEye: function() {
        return this._m_obWinSizeInPixels.height / 1.1566
    },
    pause: function() {
        this._m_bPaused || (this._m_dOldAnimationInterval = this._m_dAnimationInterval, this.setAnimationInterval(0.25), this._m_bPaused = !0)
    },
    popScene: function() {
        cc.Assert(null != this._m_pRunningScene, "running scene should not null");
        this._m_pobScenesStack.pop();
        var a = this._m_pobScenesStack.length;
        0 == a ? this.end() : (this._m_bSendCleanupToScene = !0, this._m_pNextScene = this._m_pobScenesStack[a - 1])
    },
    purgeCachedData: function() {
        cc.LabelBMFont.purgeCachedData();
        cc.TextureCache.sharedTextureCache().removeUnusedTextures()
    },
    purgeDirector: function() {
        cc.TouchDispatcher.sharedDispatcher().removeAllDelegates();
        this._m_pRunningScene && (this._m_pRunningScene.onExit(), this._m_pRunningScene.cleanup());
        this._m_pNextScene = this._m_pRunningScene = null;
        this._m_pobScenesStack = [];
        this.stopAnimation();
        cc.AnimationCache.purgeSharedAnimationCache();
        cc.SpriteFrameCache.purgeSharedSpriteFrameCache();
        cc.ActionManager.sharedManager().purgeSharedManager();
        cc.Scheduler.purgeSharedScheduler();
        cc.TextureCache.purgeSharedTextureCache();
        cc.TARGET_PLATFORM != cc.PLATFORM_MARMALADE && cc.UserDefault.purgeSharedUserDefault();
        this._m_pobOpenGLView = null
    },
    pushScene: function(a) {
        cc.Assert(a, "the scene should not null");
        this._m_bSendCleanupToScene = !1;
        this._m_pobScenesStack.push(a);
        this._m_pNextScene = a
    },
    replaceScene: function(a) {
        cc.Assert(null != a, "the scene should not be null");
        var b = this._m_pobScenesStack.length;
        this._m_bSendCleanupToScene = !0;
        this._m_pNextScene = this._m_pobScenesStack[b - 1] = a
    },
    resetDirector: function() {
        cc.TouchDispatcher.sharedDispatcher().removeAllDelegates();
        this._m_pRunningScene && (this._m_pRunningScene.onExit(), this._m_pRunningScene.cleanup(), this._m_pRunningScene.release());
        this._m_pNextScene = this._m_pRunningScene = null;
        this._m_pobScenesStack.removeAllObjects();
        this.stopAnimation();
        cc.SAFE_RELEASE_NULL(this._m_pProjectionDelegate);
        cc.LabelBMFont.purgeCachedData();
        cc.AnimationCache.purgeSharedAnimationCache();
        cc.SpriteFrameCache.purgeSharedSpriteFrameCache();
        cc.ActionManager.sharedManager().purgeSharedManager();
        cc.Scheduler.purgeSharedScheduler();
        cc.TextureCache.purgeSharedTextureCache()
    },
    reshapeProjection: function(a) {
        cc.UNUSED_PARAM(a);
        this._m_obWinSizeInPoints = this._m_pobOpenGLView.getSize();
        this._m_obWinSizeInPixels = cc.SizeMake(this._m_obWinSizeInPoints.width * this._m_fContentScaleFactor, this._m_obWinSizeInPoints.height * this._m_fContentScaleFactor);
        this.setProjection(this._m_eProjection)
    },
    resume: function() {
        this._m_bPaused && (this.setAnimationInterval(this._m_dOldAnimationInterval), (this._m_pLastUpdate = cc.Time.gettimeofdayCocos2d()) || cc.LOG("cocos2d: Director: Error in gettimeofday"), this._m_bPaused = !1, this._m_fDeltaTime = 0)
    },
    runWithScene: function(a) {
        cc.Assert(null != a, "running scene should not be null");
        cc.Assert(null == this._m_pRunningScene, "_m_pRunningScene should be null");
        this.pushScene(a);
        this.startAnimation()
    },
    setAlphaBlending: function() {},
    setContentScaleFactor: function(a) {
        a != this._m_fContentScaleFactor && (this._m_fContentScaleFactor = a, this._m_obWinSizeInPixels = cc.SizeMake(this._m_obWinSizeInPoints.width * a, this._m_obWinSizeInPoints.height * a), this._m_pobOpenGLView && this.updateContentScaleFactor(), this.setProjection(this._m_eProjection))
    },
    setDepthTest: function() {},
    setDeviceOrientation: function(a) {
        a = cc.Application.sharedApplication().setOrientation(a);
        if (this._m_eDeviceOrientation % cc.DeviceMaxOrientations != a % cc.DeviceMaxOrientations && (this._m_eDeviceOrientation = a, cc.renderContextType == cc.kCanvas && (a = cc.canvas.height, cc.canvas.height = cc.canvas.width, cc.canvas.width = a, cc.renderContext.translate(0, cc.canvas.height), cc.domNode && (a = cc.$("#Cocos2dGameContainer"))))) a.style.width = cc.canvas.width + "px",
        a.style.height = cc.canvas.height + "px"
    },
    setDirectorType: function() {
        cc.Director.sharedDirector();
        return ! 0
    },
    setGLDefaultValues: function() {
        cc.Assert(this._m_pobOpenGLView, "opengl view should not be null");
        this.setAlphaBlending(!0);
        this.setDepthTest(!0);
        this.setProjection(this._m_eProjection);
        cc.DIRECTOR_FAST_FPS && !this._m_pFPSLabel && (this._m_pFPSLabel = cc.LabelTTF.labelWithString("00.0", "Arial", 24), this._m_pFPSLabel.setPosition(cc.ccp(0, 0)), this._m_pFPSLabel.setAnchorPoint(cc.ccp(0, 0)))
    },
    setNextDeltaTimeZero: function(a) {
        this._m_bNextDeltaTimeZero = a
    },
    setNextScene: function() {
        var a = this._m_pRunningScene ? this._m_pRunningScene instanceof cc.TransitionScene: !1;
        if (! (this._m_pNextScene && this._m_pNextScene instanceof cc.TransitionScene)) {
            if (this._m_pRunningScene) this._m_pRunningScene.onExit();
            this._m_bSendCleanupToScene && this._m_pRunningScene && this._m_pRunningScene.cleanup()
        }
        this._m_pRunningScene = this._m_pNextScene;
        this._m_pNextScene = null; ! a && null != this._m_pRunningScene && (this._m_pRunningScene.onEnter(), this._m_pRunningScene.onEnterTransitionDidFinish())
    },
    setNotificationNode: function(a) {
        cc.SAFE_RELEASE(this_m_pNotificationNode);
        this._m_pNotificationNode = a;
        cc.SAFE_RETAIN(this._m_pNotificationNode)
    },
    setOpenGLView: function(a) {
        cc.Assert(a, "opengl view should not be null");
        this._m_pobOpenGLView != a && (delete this._m_pobOpenGLView, this._m_pobOpenGLView = a, this._m_obWinSizeInPoints = this._m_pobOpenGLView.getSize(), this._m_obWinSizeInPixels = cc.SizeMake(this._m_obWinSizeInPoints.width * this._m_fContentScaleFactor, this._m_obWinSizeInPoints.height * this._m_fContentScaleFactor), this.setGLDefaultValues(), 1 != this._m_fContentScaleFactor && this.updateContentScaleFactor(), a = cc.TouchDispatcher.sharedDispatcher(), this._m_pobOpenGLView.setTouchDelegate(a), a.setDispatchEvents(!0))
    },
    setProjection: function(a) {
        var b = this._m_obWinSizeInPixels;
        this.getZEye();
        switch (a) {
        case cc.kCCDirectorProjection2D:
            this._m_pobOpenGLView && this._m_pobOpenGLView.setViewPortInPoints(0, 0, b.width, b.height);
            break;
        case cc.kCCDirectorProjection3D:
            this._m_pobOpenGLView && this._m_pobOpenGLView.setViewPortInPoints(0, 0, b.width, b.height);
            break;
        case cc.kCCDirectorProjectionCustom:
            this._m_pProjectionDelegate && this._m_pProjectionDelegate.updateProjection();
            break;
        default:
            cc.LOG("cocos2d: Director: unrecognized projecgtion")
        }
        this._m_eProjection = a
    },
    showFPS: function() {
        this._m_uFrames++;
        this._m_fAccumDt += this._m_fDeltaTime;
        this._m_fAccumDt > cc.DIRECTOR_FPS_INTERVAL && (this._m_fFrameRate = this._m_uFrames / this._m_fAccumDt, this._m_fAccumDt = this._m_uFrames = 0, this._m_pszFPS = "" + this._m_fFrameRate.toFixed(1), this._m_pFPSLabel.setString(this._m_pszFPS));
        this._m_pFPSLabel.draw()
    },
    showProfilers: function() {
        cc.ENABLE_PROFILERS && (this._m_fAccumDtForProfiler += this._m_fDeltaTime, 1 < this._m_fAccumDtForProfiler && (this._m_fAccumDtForProfiler = 0, cc.Profiler.sharedProfiler().displayTimers()))
    },
    updateContentScaleFactor: function() {
        this._m_pobOpenGLView.canSetContentScaleFactor() ? (this._m_pobOpenGLView.setContentScaleFactor(this._m_fContentScaleFactor), this._m_bIsContentScaleSupported = !0) : cc.LOG("cocos2d: setContentScaleFactor:'is not supported on this device")
    },
    isRetinaDisplay: function() {
        return this._m_bRetinaDisplay
    },
    isSendCleanupToScene: function() {
        return this._m_bSendCleanupToScene
    },
    getRunningScene: function() {
        return this._m_pRunningScene
    },
    getAnimationInterval: function() {
        return this._m_dAnimationInterval
    },
    isDisplayFPS: function() {
        return this._m_bDisplayFPS
    },
    setDisplayFPS: function(a) {
        this._m_bDisplayFPS = a
    },
    getOpenGLView: function() {
        return this._m_pobOpenGLView
    },
    isNextDeltaTimeZero: function() {
        return this._m_bNextDeltaTimeZero
    },
    isPaused: function() {
        return this._m_bPaused
    },
    getFrames: function() {
        return this._m_uFrames
    },
    getProjection: function() {
        return this._m_eProjection
    }
});
cc.Director.sharedDirector = function() {
    cc.s_bFirstRun && (cc.s_sharedDirector.init(), cc.s_bFirstRun = !1);
    return cc.s_sharedDirector
};
cc.DisplayLinkDirector = cc.Director.extend({
    m_bInvalid: !1,
    startAnimation: function() {
        this._m_pLastUpdate = cc.Time.gettimeofdayCocos2d();
        this.m_bInvalid = !1;
        cc.Application.sharedApplication().setAnimationInterval(this._m_dAnimationInterval)
    },
    mainLoop: function() {
        this._m_bPurgeDirecotorInNextLoop ? (this.purgeDirector(), this._m_bPurgeDirecotorInNextLoop = !1) : this.m_bInvalid || this.drawScene()
    },
    stopAnimation: function() {
        this.m_bInvalid = !0
    },
    setAnimationInterval: function(a) {
        this._m_dAnimationInterval = a;
        this.m_bInvalid || (this.stopAnimation(), this.startAnimation())
    }
});
cc.s_sharedDirector = new cc.DisplayLinkDirector;
cc.s_bFirstRun = !0;
cc.kDefaultFPS = 60;
cc = cc = cc || {};
cc.Camera = cc.Class.extend({
    _m_fEyeX: null,
    _m_fEyeY: null,
    _m_fEyeZ: null,
    _m_fCenterX: null,
    _m_fCenterY: null,
    _m_fCenterZ: null,
    _m_fUpX: null,
    _m_fUpY: null,
    _m_fUpZ: null,
    _m_bDirty: null,
    ctor: function() {
        this.restore()
    },
    description: function() {
        return "<CCCamera | center =(" + this._m_fCenterX + "," + this._m_fCenterY + "," + this._m_fCenterZ + ")>"
    },
    setDirty: function(a) {
        this._m_bDirty = a
    },
    getDirty: function() {
        return this._m_bDirty
    },
    restore: function() {
        this._m_fEyeX = this._m_fEyeY = 0;
        this._m_fEyeZ = cc.Camera.getZEye();
        this._m_fUpX = this._m_fCenterX = this._m_fCenterY = this._m_fCenterZ = 0;
        this._m_fUpY = 1;
        this._m_fUpZ = 0;
        this._m_bDirty = !1
    },
    locate: function() {},
    setEyeXYZ: function(a, b, c) {
        this._m_fEyeX = a * cc.CONTENT_SCALE_FACTOR;
        this._m_fEyeY = b * cc.CONTENT_SCALE_FACTOR;
        this._m_fEyeZ = c * cc.CONTENT_SCALE_FACTOR;
        this._m_bDirty = !0
    },
    setCenterXYZ: function(a, b, c) {
        this._m_fCenterX = a * cc.CONTENT_SCALE_FACTOR;
        this._m_fCenterY = b * cc.CONTENT_SCALE_FACTOR;
        this._m_fCenterZ = c * cc.CONTENT_SCALE_FACTOR;
        this._m_bDirty = !0
    },
    setUpXYZ: function(a, b, c) {
        this._m_fUpX = a;
        this._m_fUpY = b;
        this._m_fUpZ = c;
        this._m_bDirty = !0
    },
    getEyeXYZ: function() {},
    getCenterXYZ: function() {},
    getUpXYZ: function() {},
    _DISALLOW_COPY_AND_ASSIGN: function() {}
});
cc.Camera.getZEye = function() {
    return cc.FLT_EPSILON
};
cc = cc = cc || {};
cc.DL_APPEND = function(a, b) {
    null != a ? (b.prev = a.prev, a.prev.next = b, a.prev = b, b.next = null) : (a = b, a.prev = a, a.next = null)
};
cc.DL_PREPEND = function(a, b) {
    b.next = a;
    null != a ? (b.prev = a.prev, a.prev = b) : b.prev = b
};
cc.DL_DELETE = function(a, b) {
    b.prev != b && (b == a ? b.next.prev = b.prev: (b.prev.next = b.next, null != b.next ? b.next.prev = b.prev: a.prev = b.prev))
};
cc.ArrayRemoveObjectAtIndex = function(a, b) {
    a.splice(b, 1)
};
cc.ArrayFastRemoveObjectAtIndex = function(a, b) {
    a.splice(b, 1)
};
cc.ArrayFastRemoveObject = function(a, b) {
    cc.ArrayRemoveObject(a, b)
};
cc.ArrayRemoveObject = function(a, b) {
    for (var c = 0; c < a.length; c++) a[c] == b && a.splice(c, 1)
};
cc.ArrayRemoveArray = function(a, b) {
    for (var c = 0; c < b.length; c++) cc.ArrayRemoveObject(a, b[c])
};
cc.CArrayGetIndexOfValue = function(a, b) {
    for (var c = 0; c < a.length; c++) if (a[c] == b) return c;
    return - 1
};
cc.ArrayAppendObject = function(a, b) {
    a.push(b)
};
cc.ArrayAppendObjectToIndex = function(a, b, c) {
    var d = a.slice(0, c),
    a = a.slice(c);
    d.push(b);
    return a = d.concat(a)
};
cc.ArrayGetIndexOfObject = function(a, b) {
    for (var c = 0; c < a.length; c++) if (a[c] == b) return c;
    return - 1
};
cc.ArrayContainsObject = function(a, b) {
    return - 1 != cc.ArrayGetIndexOfObject(a, b)
};
cc.HASH_FIND_INT = function(a, b) {
    if (null == a) return null;
    for (var c = 0; c < a.length; c++) if (a[c].target == b) return a[c];
    return null
};
cc.HASH_ADD_INT = function() {
    cc.Log("HASH_ADD_INT no implemetion!")
};
cc.HASH_DEL = function() {
    cc.Log("HASH_DEL no implemetion!")
};
cc.tListEntry = function(a, b, c, d, e, f) {
    this.prev = a;
    this.next = b;
    this.target = c;
    this.priority = d;
    this.paused = e;
    this.makedForDeletion = f
};
cc.tHashUpdateEntry = function(a, b, c, d) {
    this.list = a;
    this.entry = b;
    this.target = c;
    this.hh = d
};
cc.tHashSelectorEntry = function(a, b, c, d, e, f, g) {
    this.timers = a;
    this.target = b;
    this.timerIndex = c;
    this.currentTimer = d;
    this.currentTimerSalvaged = e;
    this.paused = f;
    this.hh = g
};
cc.Timer = cc.Class.extend({
    _m_fInterval: 0,
    _m_pfnSelector: "",
    _m_pTarget: null,
    _m_fElapsed: 0,
    ctor: function() {},
    getInterval: function() {
        return this._m_fInterval
    },
    initWithTarget: function(a, b, c) {
        try {
            return this._m_pTarget = a,
            this._m_pfnSelector = b,
            this._m_fElapsed = -1,
            this._m_fInterval = c || 0,
            !0
        } catch(d) {
            return ! 1
        }
    },
    update: function(a) {
        this._m_fElapsed = -1 == this._m_fElapsed ? 0 : this._m_fElapsed + a;
        if (this._m_fElapsed >= this._m_fInterval && this._m_pfnSelector) {
            if ("string" == typeof this._m_pfnSelector) this._m_pTarget[this._m_pfnSelector](this._m_fElapsed);
            else "function" == typeof this._m_pfnSelector && this._m_pfnSelector.call(this._m_pTarget, this._m_fElapsed);
            this._m_fElapsed = 0
        }
    }
});
cc.Timer.timerWithTarget = function(a, b, c) {
    if (2 > arguments) throw Error("timerWithTarget'argument can't is null");
    var d = new cc.Timer;
    2 == arguments.length ? d.initWithTarget(a, b, 0) : d.initWithTarget(a, b, c);
    return d
};
cc._pSharedScheduler = null;
cc.Scheduler = cc.Class.extend({
    _m_fTimeScale: 0,
    _m_pUpdatesNegList: [],
    _m_pUpdates0List: [],
    _m_pUpdatesPosList: [],
    _m_pHashForUpdates: [],
    _m_pHashForSelectors: [],
    _m_pCurrentTarget: null,
    _m_bCurrentTargetSalvaged: !1,
    _m_bUpdateHashLocked: !1,
    ctor: function() {},
    _removeHashElement: function(a) {
        a.Timer = null;
        a.target = null;
        cc.ArrayRemoveObject(this._m_pHashForSelectors, a)
    },
    _findElementFromArray: function(a, b) {
        for (var c = 0; c < a.length; c++) if (a[c].target == b) return a[c];
        return null
    },
    _removeUpdateFromHash: function(a) {
        if (a = this._findElementFromArray(this._m_pHashForUpdates, a.target)) cc.ArrayRemoveObject(a.list, a.entry),
        a.entry = null,
        a.target = null,
        cc.ArrayRemoveObject(this._m_pHashForUpdates, a)
    },
    _init: function() {
        this._m_fTimeScale = 1;
        this._m_pUpdatesNegList = [];
        this._m_pUpdates0List = [];
        this._m_pUpdatesPosList = [];
        this._m_pHashForUpdates = [];
        this._m_pHashForSelectors = [];
        this._m_pCurrentTarget = null;
        this._m_bUpdateHashLocked = this._m_bCurrentTargetSalvaged = !1;
        return ! 0
    },
    _priorityIn: function(a, b, c, d) {
        d = new cc.tListEntry(null, null, b, c, d, !1);
        if (a) {
            for (var e = !1,
            f = 0; f < a.length; f++) if (c < a[f].priority) {
                a = cc.ArrayAppendObjectToIndex(a, d, f);
                e = !0;
                break
            }
            e || a.push(d)
        } else a = [],
        a.push(d);
        this._m_pHashForUpdates.push(new cc.tHashUpdateEntry(a, d, b, null))
    },
    _appendIn: function(a, b, c) {
        c = new cc.tListEntry(null, null, b, 0, c, !1);
        a.push(c);
        this._m_pHashForUpdates.push(new cc.tHashUpdateEntry(a, c, b, null))
    },
    setTimeScale: function(a) {
        this._m_fTimeScale = a
    },
    getTimeScale: function() {
        return this._m_fTimeScale
    },
    tick: function(a) {
        this._m_bUpdateHashLocked = !0;
        1 != this._m_fTimeScale && (a *= this._m_fTimeScale);
        for (var b, c = 0,
        c = 0; c < this._m_pUpdatesNegList.length; c++) b = this._m_pUpdatesNegList[c],
        !b.paused && !b.makedForDeletion && b.target.update(a);
        for (c = 0; c < this._m_pUpdates0List.length; c++) b = this._m_pUpdates0List[c],
        !b.paused && !b.makedForDeletion && b.target.update(a);
        for (c = 0; c < this._m_pUpdatesPosList.length; c++) b = this._m_pUpdatesPosList[c],
        !b.paused && !b.makedForDeletion && b.target.update(a);
        for (var d, c = 0; c < this._m_pHashForSelectors.length; c++) {
            d = this._m_pCurrentTarget = this._m_pHashForSelectors[c];
            this._m_bCurrentTargetSalvaged = !1;
            if (!this._m_pCurrentTarget.paused) for (d.timerIndex = 0; d.timerIndex < d.timers.length; d.timerIndex++) d.currentTimer = d.timers[d.timerIndex],
            d.currentTimerSalvaged = !1,
            d.currentTimer.update(a),
            d.currentTimer = null;
            this._m_bCurrentTargetSalvaged && 0 == this._m_pCurrentTarget.timers.length && this._removeHashElement(this._m_pCurrentTarget)
        }
        for (c = 0; c < this._m_pUpdatesNegList.length; c++) this._m_pUpdatesNegList[c].makedForDeletion && this._removeUpdateFromHash(b);
        for (c = 0; c < this._m_pUpdates0List.length; c++) this._m_pUpdates0List[c].makedForDeletion && this._removeUpdateFromHash(b);
        for (c = 0; c < this._m_pUpdatesPosList.length; c++) this._m_pUpdatesPosList[c].makedForDeletion && this._removeUpdateFromHash(b);
        this._m_bUpdateHashLocked = !1;
        this._m_pCurrentTarget = null
    },
    scheduleSelector: function(a, b, c, d) {
        cc.Assert(a, "scheduler.scheduleSelector()");
        cc.Assert(b, "");
        var e = cc.HASH_FIND_INT(this._m_pHashForSelectors, b);
        e ? cc.Assert(e.paused == d, "Sheduler.scheduleSelector()") : (e = new cc.tHashSelectorEntry(null, b, 0, null, null, d, null), this._m_pHashForSelectors.push(e));
        if (null == e.timers) e.timers = [];
        else for (d = 0; d < e.timers.length; d++) {
            var f = e.timers[d];
            if (a == f._m_pfnSelector) {
                cc.LOG("CCSheduler#scheduleSelector. Selector already scheduled.");
                f._m_fInterval = c;
                return
            }
        }
        d = new cc.Timer;
        d.initWithTarget(b, a, c);
        e.timers.push(d)
    },
    scheduleUpdateForTarget: function(a, b, c) {
        var d = cc.HASH_FIND_INT(this._m_pHashForUpdates, a);
        d ? (1 <= cc.COCOS2D_DEBUG && cc.Assert(d.entry.markedForDeletion, ""), d.entry.markedForDeletion = !1) : 0 == b ? this._appendIn(this._m_pUpdates0List, a, c) : 0 > b ? this._priorityIn(this._m_pUpdatesNegList, a, b, c) : this._priorityIn(this._m_pUpdatesPosList, a, b, c)
    },
    unscheduleSelector: function(a, b) {
        if (! (null == b || null == a)) {
            var c = cc.HASH_FIND_INT(this._m_pHashForSelectors, b);
            if (null != c) for (var d = 0; d < c.timers.length; d++) {
                var e = c.timers[d];
                if (a == e._m_pfnSelector) {
                    e == c.currentTimer && !c.currentTimerSalvaged && (c.currentTimerSalvaged = !0);
                    cc.ArrayRemoveObjectAtIndex(c.timers, d);
                    c.timerIndex >= d && c.timerIndex--;
                    0 == c.timers.length && (this._m_pCurrentTarget == c ? this._m_bCurrentTargetSalvaged = !0 : this._removeHashElement(c));
                    break
                }
            }
        }
    },
    unscheduleUpdateForTarget: function(a) {
        null != a && (a = cc.HASH_FIND_INT(this._m_pHashForUpdates, a), null != a && (this._m_bUpdateHashLocked ? a.entry.markedForDeletion = !0 : this._removeUpdateFromHash(a.entry)))
    },
    unscheduleAllSelectorsForTarget: function(a) {
        if (null != a) {
            var b = cc.HASH_FIND_INT(this._m_pHashForSelectors, a);
            b && (!b.currentTimerSalvaged && cc.ArrayContainsObject(b.timers, b.currentTimer) && (b.currentTimerSalvaged = !0), b.timers.length = 0, this._m_pCurrentTarget == b ? this._m_bCurrentTargetSalvaged = !0 : this._removeHashElement(b));
            this.unscheduleUpdateForTarget(a)
        }
    },
    unscheduleAllSelectors: function() {
        for (var a = 0,
        a = 0; a < this._m_pHashForSelectors.length; a++) this.unscheduleAllSelectorsForTarget(this._m_pHashForSelectors[a].target);
        for (a = 0; a < this._m_pUpdates0List.length; a++) this.unscheduleUpdateForTarget(this._m_pUpdates0List[a].target);
        for (a = 0; a < this._m_pUpdatesNegList.length; a++) this.unscheduleUpdateForTarget(this._m_pUpdatesNegList[a].target);
        for (a = 0; a < this._m_pUpdatesPosList.length; a++) this.unscheduleUpdateForTarget(this._m_pUpdatesPosList[a].target)
    },
    pauseTarget: function(a) {
        cc.Assert(null != a, "Scheduler.pauseTarget():entry must be non nil");
        var b = cc.HASH_FIND_INT(this._m_pHashForSelectors, a);
        b && (b.paused = !0);
        if (a = cc.HASH_FIND_INT(this._m_pHashForUpdates, a)) cc.Assert(null != a.entry, "Scheduler.pauseTarget():entry must be non nil"),
        a.entry.paused = !0
    },
    resumeTarget: function(a) {
        cc.Assert(null != a, "");
        var b = cc.HASH_FIND_INT(this._m_pHashForSelectors, a);
        b && (b.paused = !1);
        if (a = cc.HASH_FIND_INT(this._m_pHashForUpdates, a)) cc.Assert(null != a.entry, "Scheduler.resumeTarget():entry must be non nil"),
        a.entry.paused = !1
    },
    isTargetPaused: function(a) {
        cc.Assert(null != a, "Scheduler.isTargetPaused():target must be non nil");
        return (a = cc.HASH_FIND_INT(this._m_pHashForSelectors, a)) ? a.paused: !1
    }
});
cc.Scheduler.sharedScheduler = function() {
    cc._pSharedScheduler || (cc._pSharedScheduler = new cc.Scheduler, cc._pSharedScheduler._init());
    return cc._pSharedScheduler
};
cc.Scheduler.purgeSharedScheduler = function() {
    cc._pSharedScheduler = null
};
cc.Loader = cc.Class.extend({
    m_sResourceCount: 0,
    m_sLoadedResourceCount: 0,
    m_pImgList: [],
    m_Timer: 0,
    isLoadedComplete: function() {
        var a = cc.Loader.shareLoader();
        a.m_sLoadedResourceCount == a.m_sResourceCount ? (cc.LOG("cocos2d:Load Complete!"), a.onload ? a.m_Timer = setTimeout(a.onload, 16) : cc.Assert("cocos2d:no load callback defined")) : (a.onloading ? a.m_Timer = setTimeout(a.onloading, 16) : cc.LoaderScene.shareLoaderScene().draw(), a.m_Timer = setTimeout(a.isLoadedComplete, 16))
    },
    onResLoadingErr: function(a) {
        cc.LOG("cocos2d:Failed loading resource: " + a)
    },
    onResLoaded: function() {
        this.m_sLoadedResourceCount++
    },
    getProgressBar: function() {
        var a = this.m_sLoadedResourceCount / this.m_sResourceCount;
        return a = parseInt(100 * a)
    },
    onload: void 0,
    onerror: void 0,
    onloading: void 0,
    preload: function(a) {
        for (var b = cc.TextureCache.sharedTextureCache(), c = cc.AudioManager.sharedEngine(), d = cc.SAXParser.shareParser(), e = 0; e < a.length; e++) switch (a[e].type) {
        case "image":
            b.addImage(a[e].src);
            this.m_sResourceCount += 1;
            break;
        case "bgm":
            c.preloadBackgroundMusic(a[e].src);
            this.m_sResourceCount += 1;
            break;
        case "effect":
            c.preloadEffect(a[e].src);
            this.m_sResourceCount += 1;
            break;
        case "plist":
        case "tmx":
        case "fnt":
            d.preloadPlist(a[e].src);
            this.m_sResourceCount += 1;
            break;
        case "tga":
            break;
        default:
            throw "cocos2d:unknow type : " + a[e].type;
        }
        this.isLoadedComplete()
    },
    loadAD: function() {},
    getLevel: function() {}
});
cc.Loader.shareLoader = function() {
    cc.s_ShareLoader || (cc.s_ShareLoader = new cc.Loader);
    return cc.s_ShareLoader
};
cc.LoaderScene = cc.Class.extend({
    logo: new Image,
    ctor: function() {
        this.logo.src = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABBAAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU2RTk0OEM5OERCNDExRTE5NEUyRkE3M0M3QkE1NTlEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU2RTk0OEM4OERCNDExRTE5NEUyRkE3M0M3QkE1NTlEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjU1RUQ3MTcwQjQ4REUxMTE4RkUxODUzMUE4ODZGQ0I4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU1RUQ3MTcwQjQ4REUxMTE4RkUxODUzMUE4ODZGQ0I4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABQQEBAQEBQQEBQcFBAUHCQYFBQYJCggICQgICg0KCwsLCwoNDAwMDQwMDA8PEREPDxcWFhYXGRkZGRkZGRkZGQEGBgYKCQoTDQ0TFhEOERYZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZ/8AAEQgAyACgAwERAAIRAQMRAf/EAMQAAAEEAwEBAAAAAAAAAAAAAAcABAUGAQMIAgkBAQACAwEBAAAAAAAAAAAAAAABAwIEBgUHEAABAwICBAcKCQkFBQkAAAABAgMEAAURBiExEgdBUXEiMrITYXIzc5MUNBU2CIGRodFCUpLSVLFigqIjQ3QWF/DBUyRWwqOzNSbhY0SEpCV1RhgRAAIBAwAGBgYJBAIDAAAAAAABAhEDBCExQXESBVFhMnIzFZGhUhMUNLHB0eEiQmIjBoFTYxbwonMkJf/aAAwDAQACEQMRAD8A5loBUAqAVAKgM4UAsKAyE40BtDaRhtEJ2jspx0YnioRU9qjKTwUFTSpBHBQk8YUAqAVALCgFhQCoDFAKgFQCoDNALCgM4UAsKAzhQHoJoDY2nE0IY5nwlP2qTsjFbaO1Thxo0/kqaGFdJAW2/uR9lqWkvxtQP7xI7h4eQ0qZNFl7GPMYEmIsOsq4U6weIjgNTQxqMXGFIOkViZ1NJSRQkxhQCwoBYUAsKAxhQCwoDGFAIUB7CcaA9homgPYYVxUIqZDCuKgqZ7BXFQVPQYVxUFRyxFUVDRUpGLkTDsmBaIK5FyVstLSpCGhpW4SMNlIrPUVvS9BK+7pZcu50v993f5iiofi3y3KkW9a9DjMuEvaSptY5yVdktYOGusC4jc/7sMzbqri/Ohlcywoc7J14jFTRJ0NyUjQMfouDQe4dFTuMK7GREKTDvccvRuY+gft456STxjjT3aayNKND0RSDqqDNMblhQ4KgmouwVxUFTHYK4qCpgsKoDBZUKCp4KMKCp4IoSYTQDuO12hAFEYtm9c6zxHCxKlJQ6npJAUrA8R2QayRjpNgvGXPxo+w592mgijPQvOW/xo8m592mgUZn11lv8aPJufdpoFJGRe8tg+mjybn3aaB+I9O5my9EjrejvedSEj9mwlC07Su6VAADjqaox4Wy1bsN0F53mibnzN7jtvyDaGnZMiQOYuUmMkrUxFx6KBs4Lc4ODFWrFstSoT+53dhm6yHK+/GCwU2ZN5KJFobSoyEWd9Xm65SccStCNtWI17I2tIqDI7C3gZbanw3Lm0yh5SGy1PjrSFoejK0ELSdCtnh7lFoMZRTVGcO70N1MvJzqs55LCzYUK2psMYrcgFR4eFcZR0Ano6lcdZ00VRUpaeGRVI2Z7DMiodmO+aS9TrJStQx40lIOg0qmTwtGDest4+nDybn3aaCaMXrrLn40fYc+7UaBRmPXOXPxo8m592mgUYject4emj7Dn3aaBSRpXd8vnQmYCT+Ysf7NNAoxPsoKUuNELbWNpKknEEHhFQzJDBYw0VBkjwnXQkmbYgKWnlqUVyB9JxMl8nSe0Xif0jQyJS15WzJe2FSbRaJc2Mk7JeYaUpG0NY2tWNWQsznpSbNe7l2bTpOSi94//p5nn/Ttw8iay+Gu+y/QVeZY39yPpF/TzPP+nLh5E0+Gu+y/QPMsb+5H0jG6ZUzLZIwl3i0yoEVSw2l6QjYSVkYhIJ4dFYzszjrVC2zl2brpCSk+oLXu+7i5O9K6+ur2hcfI9tdCZTgxQqY8nT5u0fq/4ixqGgaToqZsnc+c8qetckuZGsTSbfbrgli1OebANojW4qSJGwkYAfsEqQnukUJLVb4EO1wYtst7KY8CGyiNFjoGCUNNJCUpA4gBQDgpSpJSoApIwKTqIOgigAtmW0Gw3Z6MlCVwZCVKabcAUhbDmhTawdCk/RI4qlNp1RhO2pqjOPd8+6lOUJAzNl1pRyjcHdhTIxUYElWnsVH/AA1fu1HvTp15uK1rUVW7jrwy7S9YNrVlXMl8jql2e1SZ8ZC+zW7HRtpSsDHA4ajhSFqctSqRey7Vp0nJRfWP/wCnmef9OXDyJrP4a77L9BT5ljf3I+kX9PM8/wCnLh5E0+Gu+y/QPMsb+5H0nh3IOdmW1vO5duCW0AqWrsFHADWcBiafDXV+V+glcxxpOiuR9JWyCCQdBGgg1UbZe7KjasEZR06XAOQLNSY10jZ0YE1gWI0p10JJ+0eETyiskVSBxJ9If8YvrGoZmjsrIrTbGS8vNMoDbfq9hWykYDaWgKUeUqOJrp8VUtRp0HzDmsnLKuN+0WHE1sHn0MKWltCnHFhDaAVLWo4BKUjEkniApWhKi26LWwAsQLx7we82Nly0uOMZZglSlyQMUsQkKAdkqGrtHTzUA9wcdc1mZLuz/StR9K5Ry1YllJ9uWmX2f0PoHl2yWjKllg5esUZES1W5pLEZlPAka1KP0lKPOUTrNah6xK9tyUBUd5uZG8s7vc031xewYdskFlSTsntnEFtoAjhLik0AOPd+3lZmvNubyTvEiPws5QYLVwt78xJQ5cbW4AEP6ek43iErPDoJ07VAE7O1uTc7Ot9tIMqDi+3hrKB00/Fp+ChDBA83b58SVa7rHTLtFwaMedFXqW2rhHEpJ5yTwGsoSpuKb1vjVV2lqOZFNXLcTvDct0pxcrKlyCVtvjU/CWr9m8ODtWDoUOXjFbdi87Fz9LPMz8SOdYpquR1dT+8vEfPzTu9peX25CXbRIgNxI60KxbMoDzgKB/OCtivSjlVyeGv4dRzc+VNcu941S4pVe7UFDE16JzlDOJGo4UFDjreQy0xnzMTTKEttiashCRgAVAKOA7pNcxlKl2W8+ocrk5YttvXwkrYx/wBORu+c65qnYbm0ZP8ASNYFiNKNdCSes/hE8orJFUwcSvSJHjF9Y1DM0djZKd/6Ry+OK3Rv+GK6rGX7Udx8q5lKmVc7z+ksgUDqq01VKoKN9+blWaxN5ehObNwvIPblPSREScFeVVzeTGvN5lf4Y8C1s6X+N4PvLruy7MNW/wC4Pfu97u2t3ORmHJrQRma/hE+7KUOe2gjFiP3OzQcVD6xNeCd2Fl26RGHo8d6Q23IlqUiK0tQC3VISVqCE61bKRicNQoSbvOhx0BC5jsdszVFiW+8gv2yNMZnvQtHZyFxiVNId+s2lzBZT9IgY6KA33O2W67TbZcpKNm52d8ybdNbwDre2kodbx4WnkEpWjUdesCgJMyUEEK0pIwIPCDwUAEb1G9WXWXC/dtOEtHjbVzk/IamhBTt4OUW94WT5NnbQDmC1hc6wunpFaR+0j4/VdSNHdwq6H4o8O1ajSuv3U1P8r1nHUJy4W2Q1d46FtuW+S2Q6QRsPoO2lCuI8w6KrUmnXoNqcFOLi9Ukdq2i5sXq1QbvGOLE9hEhHc2xiR+icRXVW5qcU1tR8qybDs3ZQf5XQe1mUHH2872/zH/GHqprmcvxpbz6byr5S33SSsXs5F75zrmqNhu7Rk/0jWDLUaE66Ek/Z/CJ5RWSKpA4lekSPGL6xqGZo6syvMWzk21qQcFt2ttSDxKSziPlFdXYdLCf6T5VnxUs6aep3PrHeRs4R822Ji5JKW5bf7K4s4+DeSNJ71Q5wrHFyFdhXo1mXNeXTw77guzLsv/m0HWRbeN7W/Dz+Yntsv2hwzXEK0oMWEoJYbPjXdnHlNc5k3feXGz6NyzFWPjxhtpV7ztty4IbS4++4G2m0qcdcVoSlCRtKUe4AMa1zfOW7Rm3Nmad9mUt4NwivRsiz5kyx5WU5oQWgwtO3s8Cn1c7aw52odGpB1L52eOoAvO+7SoNbVzYfLyWHkOlhwsPhCgrYdSAVIVhqUARooDZ533aAoGfUhMuJNH75stLP5zZxHyGpBU408xZDUlCtlTSgva7g1/JWUZcLTK7ttTg49IJ7tlmNfsn50ukaImO9fJ0i/wBuYSnZKWoqipoYcBdbDiv0qmvFJlUY+7hGuwdbibybhlB62OKxdtMlSEA6+xfHaJ+JW1XuctuVt06GcX/JsfgyFP2160FavROcOPt53t/mP+MPVTXM5fjS3n03lXylvuknYvZyL3zvXNUbDe2jJ/pGsCxGhGuhJPWjwieUVkiuQOJXpEjxi+sahmSOmrA4U5Ngf/FJ/wCDXVWH+wu6fMc23/70n/k+s57y7me55aVNNuXgi4RXIkhsk4YLSQlY/OQTiK5qzflbrw7UfQ8vCt5CjxrsSUkdP+67Y0W3KV0zE4nCReJfm7Kzr83hjD5XFq+KqTdDHmmI9fbK9Ym3FNMXRSIs95s4KTDUcZGyeBS2wWx31AO5EC1yIMW2qitogwVsOQGWxshhcQgslvDolGGjuUBIGVjicaAY3i+s2W03C8vkdjbor0tYPCGUFeHwkYUABtwGYcxwrncbdmxl1gZyC8z2WS9jsyHCopkbB4yjZVs68E46qA6H85oCr5xfblWZqQ0oLS2+kpUOJQKT8tAD1TgWkoUAUqBSoHUQdBFAOIK2jJjsuAebrUllaODs18wjDi2TWUO0im+q23uAxuc27BvAzHlZw4DZfZCTwrhPkD9UmvS5bLhuuJzv8igrmLC50P6ToGvcOHOPt53t/mP+MPVTXM5fjS3n03lXylvuknYvZuL3zvXNUbDd2jJ/pGsC1GhGuhJP2jwieUVkiuQN5XpEjxi+sahmSOkLC7jlGC3wm2JSPhZrqLPgLunz3LS+Ll3/AKwc7sckR895fzdbEBKL3Dbiy7Q8rRg6kuBTZP1XRzT3cDXLH0NHSu6N2LG3d2KFGxQ7CbcjT2VDZW3MQ6rt0LSdIUlZ+KoJLyJXBUgiZObsvwnSxJusZt4HBSC4CQe7s44UBIx7pGmNB+I+3IZVqcaUFp+MUBA54juXnKlzszRIVcwzCURrDbz7aXD9jaoCZXHt6mokcx0Fm3qQqAMBiyWk7CCgjSkhOjRwaKAdedHHRQA0v2abbbHrxZpk5ptLj6X2EFeJSoqClDAY4Yg0BCx7jGlt9rFfQ+3wqbUFAcuGqgN6JOytKhrCgR8BonpMZqqYNV4Wz3jpSUc1uZMcJA4RLi9of1jXoY74cldZz+dHj5bLqX0MPZroDganH2872/zH/GHqprmcvxpbz6byr5S33STsXs3G753rmqNhvbRk/wBI1gWI0I10JJ+0dNPKKyRXMG8n0h/xi+sahmSOhMtOA2C1tnUYbSfjQBXVY6raW4+fZypkzf6vrIj3epPmWasw29RwU5ExA7rD+H+1XKzVGfQYOsUw/RoTMK6TLjEV2SbkEruEcdBchsbKXxxLUjmr+tgDrFQZFYzvmKUP/ZoDpa2k7U11BwVgrU2CNWjSqgBfLl2m1kJnzGIqjpCHFAKP6IxNQCVy5fm2ZHneXri06tPhW2VhSVJ4lo4vgoAzWq9N3WGiSgbC+i80dOwsaxycVSB95yeOgKTmzM8o9pbbc6WW0AiXJScD3UJV9EDhNQwAq73OyC4LSmfHUohO0UrCudw4qGI+WgNsGQ9CdRNgO4HWFIOKFjiOGgipARodwRMjNSUYgODSniUNBHwGo2kPUVDMRx94WApOsvwtrl81SDXoWvmI/wBDwLjry6b6pfSH010KPn5x9vO9v8x/xh6qa5nL8aW8+m8q+Ut90k7F7Nxu+c65qjYb20ZP9I1gWI0I10JJ+0eETyiskVSBvK9If8YvrGoZmg75ddwsls7kVrqiuoxn+3HccNn263p7yt5Gk+ot7ymVHZbnOSI3cwkI7RH6wFc9lw4bsl1nYYM+OxF9R0gJOnXWubYGN42YnLHFfmNEG5XB9bUUq07IHSXh+aMMO7UIMALrrr7q3nlqdecO044s7SlE8JJrIxqe4z8mG+iTFcWxIbO0262dlQI7ooKnSW6jOBv0VxL5Si4x9lqc2nQF449m6BwbWBB7tYmQS5MxTbDi0K5+ydjlPD8FSDlPPmcZF8nvW+A6pFmYWUc04GQtJwLi+NOPRFCGykYEcGAqSKkxYbw5apaErUTBdUEvtHUMdG2OIioJDdYlFKCwDiC6kp/TwolpRjclSLfUyGQoXT3hFuAgtRJStpWOgJixdkknuEVv2NOSjnr74eVvpkvpYcGcw2KVcPVMS4x5Vy2FOKjR1h1SUI1lRRiEgd017qvQb4U9JxksO9G37yUXGPWco7zfb/MX8Yeqmudy/GlvPonKflLfdJOxezkXvneuao2G9tGT/SNYFiNCNdCSetHhE8tZIqkDiV6Q/wCMX1jUMzQZ7C7hZ7cMf/DN9UV0+O/247jj8yP7st5Us5qdtWYrXmGOMFpLbgI/xIygcPhTXk8yt0mpdJ7XJrtbTj7LOiI1zZmxmJsdQUxJbQ+0ocKXEhQ/LXm1PYAdvsC03a0I/cmK4tHFtKdwP5BREMGsGKZLgQPhrKKqyq7c4FUJsnc5miNYvXrsJIihrt1thYL6WsMdtTevDDTx1tvEdKnjrm8XOgy3TrdgZ6biJJ7OZGfbcHBzE9ok/AU1ptUPatz4lUMub7g5EynfZbKsHWYThQRrBXggH4NqoLDnzKWTrjmma3brYx20lYKsCQlKUp1qUo6ABx1fasuZ52ZmKytJI5y3eXjKDjbV0YSjtklTLragttYGg4KHCOEVlex3AqxOYK86FBcTs4itc9MO9hnMW+HapU4rKezYccQ2hTjitlIOASnEkmpjokqmGRGUrbjHW0CbMUS7tzZN6uKfNnLpJedS2VjtSHFFasQk6AAcDjUuVXUm1bUIKPQkH/crlL1FlxV7lN7NxvYDiQoYKRET4NP6Z55+Cvc5dY4IcT1yOG/ked7697uL/DD6fuAhvO9v8x/xh6qa8rK8aW86vlPylvuknYvZyN3znXNUbDe2jJ/pGsCxDdOuhJP2jwieWskVTBxJ9Jf8YvrGoMwr2V/C1wRjqYb6orpsfw1uOVyl+7Lea8zwvWtmebbG1Ij/AOYZHCSnpD4U1Xm2veW30rSWYF33V1V1PQTG6zMomWVVmeX/AJq2H9kDrVHWcR9hXN+KubZ1CHe9CyOX/Ljdyho7SdYlKddbTpUqG7htqA4ezUAo9ypQaAxaJSY8hDh4CCDyVnCXCzVyLbnBo6Onb9LdIy07FbgLTeH4xjrUVJMdJUjYUsfSOjUnCvTeVHhOajy25x9QPN1kBcm+XLMpSRCtUZUdtw6lSpfMSgHjSjaUa8uTqzqbEOGKQTpMZN9gXCxFQSq6RHojSidAdWnFv9cCsC5go3Z5z/kW9uuXCKpY2Vwp0foOoKVDawx+klSdRrdxryizxOZYcrmlExvW3lQc4IiRYEdTEKHtrSXikuLW4ACSE4gAAaKsychTWgo5fgzhLiYJLVbHr3dGIDIwDitp5zgQ0nStZ5BXnnQIMK5DacdghuO0nAFRwCWmxrPcCRQSaSqyp5atDu8rOyA4lQsMHBySo6MI6FaE98+r+2itvEx3enTYtZ5fNM9YlhzfbloW/wC46mSlCUJQ2kJbSAlCE6AlIGAAHEBXSpUPmrk5aWcgbzfb/Mf8YeqmuZy/GlvPpvKvlLfdJKxezcbvneuao2G9tGb/AEjWBYhunXQkn7R4RPLWSK5A4lekv+MX1jUMyQTLUcLbC8Q31RXS4/hx3HMZPiy3kih4pNXlFCmSzJylmBm829P+VdUVdmNCSFeEaPLrFc/m4/u51XZZ0WDke8hR9pBgtF/blMx7rbXQptY2kEgHWMFIWk/EoGtA3yBu+7HLuY31Tcu3JnLtwdJU9ap215kVnWWHk4lsE/QUNHBWRDQ2hbkJbLqF5lzXaoNvxxUITplSFpGsNowSMeWhHCi6retFvgxrFlyOYtihEqaDhBefdV033jwrV8gqCRki4gyCy2rntALUoHDZOPNHLQkhs62fLub5SJ7MlNmzYpOFxeUP8nKIACVqA0odI6RojFopB3bXFC9qferazGGtxDqnlEfmoSASakJE9AhW20MG32VC3FPkCTMdA7Z8jUAB0ED6vx0pXQRKUYqregrt/uUi6SW8r2IGTIkOBuStrSHF46Gkn6idajw8gqyMG3wrS2a0rqUXdufhhHT9/wBgdcjZdi5PszduaKVzHCHp8kfvHiMNH5qNSf8AtrqMXGVmFNu0+ac25lLMvOX5V2V1fay5Nv48NX0PNTOSt5Z2s/ZiPHMPVTXLZnjS3n1TlHydvuknY/ZuL3zvXNUbDf2jN/pGsCxDdOuhJPWfwieUVkiuQOZPpL/jF9Y1DMkEy1/8theIb6orpcfw47jmMnxZbx5V5QaJkRmdGciyBtNuDXwpI1KHdFV3bSuR4WWWrrtS4kVODcLpkycppaS/b3zipGpKwPpIP0Vjhrnb9iVqVGdLYyI3Y1Rf4GYrfc2g5GfGJ6Ta+aoHiIqgvHT60vtFAOyo6ULGghQ1HEUBGC9yW21tOjF9PNS5xHuioA3Yujkdt3Y0vunEuHgHz0A1MgkkqViTpJOvGgPbRU5tFOylCBi46rmoSONSjoFTGLZXcuxhrIO4356W4LNlxK5EiSeyXKbB7RzHQUND6KeNXDyVbFaeGOls1pKv47rSitn29YUMh5JYyvH88l7L17kJwccGlLKD+7Qesrh5K97Bw1aXE+0cbzrmUsr8EPDXr3l7Q6RXpJnMyttDtqQRQqaOXt4itvPF/Vxyz1U1yuZ40t59W5P8na7pL2P2bi9871zWvsN/aMn+kawLEaE66Ek9Z/CJ5RWSK5A5k+kv+MX1jUMyQTLX/wAsh+Ib6orpcfw47jl8nxZbxyp1CdZq5yRUkzQua2ngqt3UWK02MJkuLKZVHktJcaVrSeA8YPAaou3IyVJI2LUJwdYsqUiE7Ce7e3OqwGoY88dziUK8e7ZUXoeg9q1e4u0qMdxc0SmeZICgRoKmzgfhSdFa9DYqSHr2FIVtuSQlZ19olST8gNRwmLl1Hs3W2p6U5HIhK1H8gqeEx949iGz2ZLez6Ow5Kc4FOnsm/iGKjWSojBq49qiM1vXjMCktyHUx4QOIQBsNDkSNKjy1ZGEp9RXJ27OnXIIOVxZsvt4xG+0lrGDsxzAuEcQ+qnuCvWxVbtalp6Tns93sntOkegusa/tKw/urfV5M8WeJKJLsXGO7qVge7Vikac7XSPkuYjEHEVYmac7JzTn045yvh45R6qa5bM8aW8+mcoVMO33Scsfs5G753rmtfYb20ZP9I1gWI0J10JJ20eETyiskVzB1K9Jf8YvrGoZkgl2wY2yGP+4b6orpsfw1uOYyfFlvNrkfa1Gs3CpWp0GbsFZ1VTK0y6N1DJy3O8RqiVhs2I5CQ0ctrx+iaolitmxHMQ0ds63Okgnu1S8RlyzIjc2JR4FCsHhyM/jYmU5fUfrU+DkQ82I8ZsCknFLenjw+erI4bKpZ8SUYs0jRoNXRxmjUuZaZMxbO+CDgavjYZqTyETsW2upAxxFbEbLNK5fROxo5RhtK1VfCFDzr1zi1Eyw8EJA/LVpqs53z0cc33o8ck9UVzGX40t59B5Z8rb7pO2P2ci9851zWvsNzaMn+kawLEaU66Ek5aPCJ5RWSK5g7k+kveMX1jUElsteaYbEJmPLbcS6ykNgtgKCgnUdYwr1sfPjGCUlqPJyOXylNyi1pHn83Wnif+wPnq7zG31lHltzpQv5utP1X/sD56eY2+seWXeoX832nif8AsD56eY2+seW3eoX83Wj6r32B89PMbfWPLbvSjH822f6j3kx89PMLRPlt3pRj+bLN9R7yY+enmFoeXXelGRm2zjUh7yY+enmFojy270o3oznZ060PeTHz08wt9Y8su9Q5Rnuyp+jIHI2Pnp5jb6zF8quvoHCd4FjTwSfJj71SuZW+srfJ7r2o3p3jWAa0yfJj71T5na6yt8lvP2TcneVl4a0yvJD71T5na6yp8hvPbH0m3+qGXkJJS3LWoDEI7MDE8WJVR80tU1Mw/wBfvt6XEE93uK7vdJlzcQG1y3VOlAOISDqGPcFeJdm5zcuk6qxZVq3GC/KqFysns5F753rmsdhntGT3SNYFiNCddCSdtHhE8orJFcgdyfSH/GL6xqCToHLvu62B7J9izVnjeDByqrMTPnduhvoQQWSAoc9x1G0vZUCoAaMagyoaIfu92PMGeoWU8oZ+hXq2m2u3W73hhtCxFQy4Gw2ENuKClr2gRioYDE0FCft/uzZDv8lVqyzvat1zvjiHFRYTTTS1KU2CTiG3lK2RhpwGigoV7J3u7wrllh/NWec6QspQE3GRaY3apS4lb0R1bLhLji20jFbatkDgGNTUUNc/cNlqZmPLOWcjbw7fmWffpLzMotJRhEYYa7VTyg24sq0AgJ0YmoFCzo92nd09dfUDO92Au+KeMNNvDTJeMgHZ7PYD+1tbWjCgoV/Lnu2OS5mcP5uzZCy9ZcnzhbJFzKNtDrqkocSvnrbDaChxGs44nDgoKHnMW5PdfaLDc7pb97tsuU+FFdkRbc2lnbkOtpKktJ2XlHFZGyMBSooD7KOSss5gtJn3fNsayTA8przF8IKthIBC+ctPSxrcsWITjWUlE8nNzr1mfDC07iprRL3ndTbY9gm33L2aI17btxSZbTSEgBClAHBSVK5wBxwOurbmEuByjLioa+PzmUr0bd204OWolJ25zLFqcbYuueI8GQ42l1LUhtDailXCAXNWNZywIR7U0nuNe1z29dTduy5JOlUyNf3NyE5otdkjXlmRbLpFcnNXII0hpnDa5gJCidpOzgrA41g8B+8UU9DVS6PPofDyuSi1KDo49Zav/wA8wdf8xvYHUfNk/frZ8qXteo83/a/8frMH3eYWySMxug8BMZOGPd59R5V+r1D/AGv/AB+sCN9tD9hvE+yylpcfgPqYW430VbJ0KGPGNNeXcg4ScXsOrx7yvW4zjqki3WT2cjd851zWOwz2jJ7pGsCxGka6Ek5aPCJ5RWSK5A8lekP+MX1jQkPm++SH91m5xo6extS0/wC4j/NUGRj3VJIiZwzGoaNrL8hPxuIqGCF92d8Rt8tpeGA2Wp2nlZWKEl13ny+13BxmCccM6XNzDllzPnoiAf8Au3PCNvjy68NGyJXyx1ijB5sjwHvEsSNHteteP/m1GgD/AHXzLOLO+XIDd3hW69XW+RpbQnOBCeyTHjHbw1kYtFPNxwNESAvMnu85jsFguGYIt6tF4ZtbZkS40BxZdSynSpQ2k7J2Rpwx1aqVIKRlnIdxzPCduLUqNCgtOdkHpRI2lgAkDAcGPDW5Yw5XVxVSSPLzua28WSg1KUmtSL5GtbeScj5it8y5xJLl1U0GEx1YkqBCQnA6SeGt1WlYsSTkm5U1HiTyJZubanCElG3WtSv76HzIzJCWrSRbWh8SlVRzTxF3Ub38aTWPKvtsJNtmqF5yYcfB2B9A+FLNelbS47fcOdyLcnZyF/mX1mjMN4uWTswHNiHHpWXbkER7xC2irsXEjZbdaBOAxw/tjWORJ2LnvFphLX1GeDjxzsb4eSUbsNMJdK6GOsmSbzcZUvOV4dcbXdEBq227aPZsQ0nFJ2dW0rj+erMNSm3dn+bUuoq5soWoRxrS7Hal0yAhn9wu50vrh+lLUfkFeJmeNLednylUxLa/STNk9nI3fOdc1r7Dd2jJ7pGsC1Gka6Ek1afCp5RWSK5A+k+kP+MX1jUEhi3syg7u93YNE+Ctyh/umaEmPd2lCNme+LB6VlfT8a01DJoRW4WQI+9G2u46m5fytKoSWrP8wObnI7GOrNU9fxyZJ/voQU3cW+GN6FjdB6Ikau6wujCPFpfA33Mv4/8A2Za//UmgGe+J1L+8zMrqiOdJQdPiUCiBbN0EkMZG3nNg+FtaRo8W9QFTiv4brZkfHQZyTh+kivSj8o+8eLcj/wDRi/0FGbw7VvDDpp/KK89az2JamXfeg/298jKJ1QW0/rKr0OZeIu6jyORw4bL7zLxCmkXPLJx8HZ3UY8oar0IP8dvunjXrT91e/wDIjXdmJmZr2mHckKbyzbgHNjHDzt5Q0aR9FP8AbXS7bleu0kqW4+snGlHFscUHW9P/AKo35ZXdLG9KsT22/Z2f21rmKPRQo6WT3U41lixnbk4Ps7H9RhzCNvIhG6tFx9pfWCnN6+0zPd3PrSVH5BXi5fjS3nT8vVMeC/SWGy+zkbvnOuao2GztGLx5xrBliNYoSStscCXE8tSiuRQ5PpD2P+IvrGhIQrNvdvFqs8OzSbZAubMBHZRnZaCVpbGpJ1jQNGNQZVPCt7N3Rf4t/hWyBCcYjLhPRWUENPNOK2zt4YHEEDAilBUk077rqyVOQ7Dao0nAhD7aFBSSeHRhjShJE5f3rXux25y1vwod1jLkOSkeeIJKXHlFa9Wg4qJOrRQip6uG9a6yp9quUK12+2y7S8t5tUdsgOBxGwpC9WKSmgqSv9brkHe3Tl61CRjtB7ZVt7XHtdLH4aCpE2rerc4D1zlS7Vb7nLukozX3pLelKikICEa8EAJGFAbrvvevFztEy0RbXAtjU9BZkvRUELLZ0EDUNI0Y0oSVSzZmmWeK5CQy1IirX2gbeBwCuHVyVt2MqVqPDSqNLIw43ZcTbT6hzMze9MiuxTborYdTslxCecNOOI0VnPNclThSMLWAoSUuKToOVZ7luYFy3RXCAAFLBUcBy1n5i3rimVLlkVqlJDN7OF0cuUe4pS02YyFNNsJB2NhfSB4dOFVvNnxqXQXR5fbVtw11JD+oVz/CsfGv56u8zn0Gv5Ra6WY/qFc+CKxjwaV/PTzOfQPKLXSyqSpT02S9LkHaffWVuEaBia0JycpNvWz0oQUIqK1IuNnXhYI6fznOuaxeobRs6cVGsSxGuhJvZeLZBoYtGHIlokuqefYPaK0qKFFIJ48BU1IozItuX+GOvyqqnQNJn1bl78O55VVNA0i9W5e/Dr8qqo0DSL1bl38OvyqqaBpF6ty9+Hc8qqmgaRercu/hnPKqpoGkXqzLv4ZflVU0DSL1Zl78O55VVToGkXqzLv4dflVVGgaRercvfh3PKqpoFGL1bl38O55VVToGkXq3L34dzyqqaBpF6ty9+HX5VVRoGkx6ty9+Hc8qqmgaTCrZYfosL+FxVBRm9x9sIS0ykIaQNlCE6AAKE0GajiagkxQkVAKgFQCoBUAqAVAKgFQCoBUAqAVAKgFQCoBUAqAVAf/Z";
        this.logo.width = 160;
        this.logo.height = 200
    },
    Destroy: function() {
        this.logo = null
    },
    draw: function() {
        var a = (cc.canvas.width - this.logo.width) / 2,
        b = (cc.canvas.height - this.logo.height) / 2;
        cc.renderContext.clearRect(0, -cc.canvas.height, cc.canvas.width, cc.canvas.height);
        cc.renderContext.fillStyle = "#202020";
        cc.renderContext.fillRect(0, -cc.canvas.height, cc.canvas.width, cc.canvas.height);
        cc.drawingUtil.drawImage(this.logo, new cc.PointMake(a, b));
        cc.renderContext.fillStyle = "#b2b4b3";
        cc.renderContext.font = "Bold 12px Verdana";
        cc.renderContext.textAlign = "left";
        cc.drawingUtil.fillText("Loading " + cc.Loader.shareLoader().getProgressBar() + "%", a + 30, b - 15)
    },
    FadeOut: function() {}
});
cc.LoaderScene.shareLoaderScene = function() {
    cc.s_ShareLoaderScene || (cc.s_ShareLoaderScene = new cc.LoaderScene);
    return cc.s_ShareLoaderScene
};
cc = cc = cc || {};
cc.DrawingPrimitive = cc.Class.extend({
    _renderContext: null,
    setRenderContext: function(a) {
        this._renderContext = a
    },
    getRenderContext: function() {
        return this._renderContext
    },
    ctor: function(a) {
        this._renderContext = a
    },
    drawPoint: function() {
        cc.log("DrawingPrimitive.drawPoint() not implement!")
    },
    drawPoints: function() {
        cc.log("DrawingPrimitive.drawPoints() not implement!")
    },
    drawLine: function() {
        cc.log("DrawingPrimitive.drawLine() not implement!")
    },
    drawPoly: function() {
        cc.log("DrawingPrimitive.drawPoly() not implement!")
    },
    drawCircle: function(a, b, c, d, e) {
        if (! ("undefined" == d || 0 == d)) {
            for (var f = 2 * Math.PI / d,
            g = [], h = 0; h <= d; h++) {
                var i = h * f,
                j = b * Math.cos(i + c) + a.x,
                i = b * Math.sin(i + c) + a.y,
                j = new cc.Point(j * cc.CONTENT_SCALE_FACTOR(), i * cc.CONTENT_SCALE_FACTOR());
                g.push(j)
            }
            e && (a = new cc.Point(a.x * cc.CONTENT_SCALE_FACTOR(), a.y * cc.CONTENT_SCALE_FACTOR()), g.push(a));
            this.drawPoly(g, d + 2, !0, !1)
        }
    },
    drawQuadBezier: function() {
        cc.log("DrawingPrimitive.drawQuadBezier() not implement!")
    },
    drawCubicBezier: function() {
        cc.log("DrawingPrimitive.drawCubicBezier() not implement!")
    },
    drawImage: function() {
        cc.log("DrawingPrimitive.drawImage() not implement!")
    },
    fillText: function() {
        cc.log("DrawingPrimitive.fillText() not implement!")
    }
});
cc.DrawingPrimitiveCanvas = cc.DrawingPrimitive.extend({
    drawPoint: function(a, b) {
        b || (b = 1);
        var c = new cc.Point(a.x * cc.CONTENT_SCALE_FACTOR(), a.y * cc.CONTENT_SCALE_FACTOR());
        this._renderContext.beginPath();
        this._renderContext.arc(c.x, -c.y, b * cc.CONTENT_SCALE_FACTOR(), 0, 2 * Math.PI, !1);
        this._renderContext.closePath();
        this._renderContext.fill()
    },
    drawPoints: function(a, b, c) {
        if (null != a) {
            c || (c = 1);
            this._renderContext.beginPath();
            for (b = 0; b < a.length; b++) this._renderContext.arc(a[b].x * cc.CONTENT_SCALE_FACTOR(), -a[b].y * cc.CONTENT_SCALE_FACTOR(), c * cc.CONTENT_SCALE_FACTOR(), 0, 2 * Math.PI, !1);
            this._renderContext.closePath();
            this._renderContext.fill()
        }
    },
    drawLine: function(a, b) {
        this._renderContext.beginPath();
        this._renderContext.moveTo(a.x * cc.CONTENT_SCALE_FACTOR(), -a.y * cc.CONTENT_SCALE_FACTOR());
        this._renderContext.lineTo(b.x * cc.CONTENT_SCALE_FACTOR(), -b.y * cc.CONTENT_SCALE_FACTOR());
        this._renderContext.closePath();
        this._renderContext.stroke()
    },
    drawPoly: function(a, b, c, d) {
        "undefined" == d && (d = !1);
        if (null != a) {
            if (3 > a.length) throw Error("Polygon's point must greater than 2");
            b = a[0];
            this._renderContext.beginPath();
            this._renderContext.moveTo(b.x * cc.CONTENT_SCALE_FACTOR(), -b.y * cc.CONTENT_SCALE_FACTOR());
            for (b = 1; b < a.length; b++) this._renderContext.lineTo(a[b].x * cc.CONTENT_SCALE_FACTOR(), -a[b].y * cc.CONTENT_SCALE_FACTOR());
            c && this._renderContext.closePath();
            d ? this._renderContext.fill() : this._renderContext.stroke()
        }
    },
    drawCircle: function(a, b, c, d, e) {
        this._renderContext.beginPath();
        this._renderContext.arc(0 | a.x, 0 | -a.y, b, -c, -(c - 2 * Math.PI), !1);
        e && this._renderContext.lineTo(0 | a.x, 0 | -a.y);
        this._renderContext.stroke()
    },
    drawQuadBezier: function(a, b, c, d) {
        for (var e = [], f = 0, g = 0; g < d; g++) {
            var h = Math.pow(1 - f, 2) * a.x + 2 * (1 - f) * f * b.x + f * f * c.x,
            i = Math.pow(1 - f, 2) * a.y + 2 * (1 - f) * f * b.y + f * f * c.y;
            e.push(new cc.Point(h * cc.CONTENT_SCALE_FACTOR(), i * cc.CONTENT_SCALE_FACTOR()));
            f += 1 / d
        }
        e.push(new cc.Point(c.x * cc.CONTENT_SCALE_FACTOR(), c.y * cc.CONTENT_SCALE_FACTOR()));
        this.drawPoly(e, d + 1, !1, !1)
    },
    drawCubicBezier: function(a, b, c, d, e) {
        for (var f = [], g = 0, h = 0; h < e; h++) {
            var i = Math.pow(1 - g, 3) * a.x + 3 * Math.pow(1 - g, 2) * g * b.x + 3 * (1 - g) * g * g * c.x + g * g * g * d.x,
            j = Math.pow(1 - g, 3) * a.y + 3 * Math.pow(1 - g, 2) * g * b.y + 3 * (1 - g) * g * g * c.y + g * g * g * d.y;
            f.push(new cc.Point(i * cc.CONTENT_SCALE_FACTOR(), j * cc.CONTENT_SCALE_FACTOR()));
            g += 1 / e
        }
        f.push(new cc.Point(d.x * cc.CONTENT_SCALE_FACTOR(), d.y * cc.CONTENT_SCALE_FACTOR()));
        this.drawPoly(f, e + 1, !1, !1)
    },
    drawImage: function(a, b, c, d, e) {
        switch (arguments.length) {
        case 2:
            this._renderContext.drawImage(a, b.x, -(b.y + a.height));
            break;
        case 3:
            this._renderContext.drawImage(a, b.x, -(b.y + c.height), c.width, c.height);
            break;
        case 5:
            this._renderContext.drawImage(a, b.x, b.y, c.width, c.height, d.x, -(d.y + e.height), e.width, e.height);
            break;
        default:
            throw Error("Argument must be non-nil");
        }
    },
    drawStar: function(a, b, c, d) {
        a = a || this._renderContext;
        a.save();
        a.translate(b.x, -b.y);
        a.rotate(cc.DEGREES_TO_RADIANS(45));
        d instanceof cc.Color4F && (d = new cc.Color3B(0 | 255 * d.r, 0 | 255 * d.g, 0 | 255 * d.b));
        b = "rgba(" + d.r + "," + d.g + "," + d.b;
        a.fillStyle = b + ",1)";
        d = c / 10;
        a.beginPath();
        a.moveTo( - c, 0);
        a.lineTo(0, -d);
        a.lineTo(c, 0);
        a.lineTo(0, d);
        a.lineTo( - c, 0);
        a.closePath();
        a.fill();
        a.beginPath();
        a.moveTo(0, -c);
        a.lineTo( - d, 0);
        a.lineTo(0, c);
        a.lineTo(d, 0);
        a.lineTo(0, -c);
        a.closePath();
        a.fill();
        d = a.createRadialGradient(0, 0, d, 0, 0, c);
        d.addColorStop(0, b + ", 1)");
        d.addColorStop(0.3, b + ", 0.8)");
        d.addColorStop(1, b + ", 0.0)");
        a.fillStyle = d;
        a.beginPath();
        a.arc(0, 0, c, 0, 2 * Math.PI, !1);
        a.closePath();
        a.fill();
        a.restore()
    },
    drawColorBall: function(a, b, c, d) {
        a = a || this._renderContext;
        d instanceof cc.Color4F && (d = new cc.Color3B(0 | 255 * d.r, 0 | 255 * d.g, 0 | 255 * d.b));
        var d = "rgba(" + d.r + "," + d.g + "," + d.b,
        e = a.createRadialGradient(b.x, -b.y, c / 10, b.x, -b.y, c);
        e.addColorStop(0, d + ", 1)");
        e.addColorStop(0.3, d + ", 0.8)");
        e.addColorStop(0.6, d + ", 0.4)");
        e.addColorStop(1, d + ", 0.0)");
        a.fillStyle = e;
        a.beginPath();
        a.arc(b.x, -b.y, c, 0, 2 * Math.PI, !1);
        a.closePath();
        a.fill()
    },
    fillText: function(a, b, c) {
        this._renderContext.fillText(a, b, -c)
    }
});
cc.kOrientationPortrait = 0;
cc.kOrientationPortraitUpsideDown = 1;
cc.kOrientationLandscapeLeft = 2;
cc.kOrientationLandscapeRight = 3;
cc.kCanvas = 0;
cc.kWebGL = 1;
cc.drawingUtil = null;
cc.renderContext = null;
cc.canvas = null;
cc.gameDiv = null;
cc.renderContextType = cc.kCanvas;
cc.originalCanvasSize = new cc.Size(0, 0);
window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame
} ();
window.console || (window.console = {},
window.console.log = function() {},
window.console.assert = function() {});
cc.setup = function() {
    switch (arguments.length) {
    case 0:
        var a = document.createElement("Canvas");
        a.setAttribute("id", "gameCanvas");
        a.setAttribute("width", 480);
        a.setAttribute("height", 320);
        document.body.appendChild(a);
        cc.canvas = a;
        cc.renderContext = cc.canvas.getContext("2d");
        cc.gameDiv = document.body;
        cc.renderContextType = cc.kCanvas;
        break;
    case 1:
        var a = arguments[0],
        b = null,
        b = typeof a == "string" ? document.getElementById(a) : arguments[0];
        if (b instanceof HTMLCanvasElement) {
            cc.canvas = b;
            cc.gameDiv = b.parentNode;
            cc.renderContext = cc.canvas.getContext("2d");
            cc.renderContextType = cc.kCanvas
        } else if (b instanceof HTMLDivElement) {
            a = document.createElement("Canvas");
            a.setAttribute("id", "gameCanvas");
            a.setAttribute("width", b.width);
            a.setAttribute("height", b.height);
            b.appendChild(a);
            cc.canvas = a;
            cc.renderContext = cc.canvas.getContext("2d");
            cc.gameDiv = b;
            cc.renderContextType = cc.kCanvas
        }
    }
    if (cc.renderContextType == cc.kCanvas) {
        cc.renderContext.translate(0, cc.canvas.height);
        cc.drawingUtil = new cc.DrawingPrimitiveCanvas(cc.renderContext)
    }
    cc.originalCanvasSize = new cc.Size(cc.canvas.width, cc.canvas.height)
};
cc.setupHTML = function(a) {
    var b = cc.canvas;
    b.style.zIndex = 0;
    var c = cc.$new("div");
    c.id = "Cocos2dGameContainer";
    c.style.position = "relative";
    c.style.display = "inline-block";
    a && c.setAttribute("fheight", a.getContentSize().height);
    b.parentNode.insertBefore(c, b);
    c.appendChild(b)
};
cc.Application = cc.Class.extend({
    ctor: function() {
        this._m_nAnimationInterval = 0;
        cc.Assert(!cc.sm_pSharedApplication, "CCApplication ctor");
        cc.sm_pSharedApplication = this
    },
    setAnimationInterval: function(a) {
        this._m_nAnimationInterval = a
    },
    setOrientation: function(a) {
        return a
    },
    statusBarFrame: function(a) {
        a && cc.RectMake(0, 0, 0, 0)
    },
    run: function() {
        if (!this.initInstance() || !this.applicationDidFinishLaunching()) return 0;
        if (window.requestAnimFrame) {
            var a = function() {
                cc.Director.sharedDirector().mainLoop();
                window.requestAnimFrame(a)
            };
            cc.Log(window.requestAnimFrame);
            window.requestAnimFrame(a)
        } else {
            a = function() {
                cc.Director.sharedDirector().mainLoop()
            };
            setInterval(a, this._m_nAnimationInterval * 1E3)
        }
    },
    _m_nAnimationInterval: null
});
cc.Application.sharedApplication = function() {
    cc.Assert(cc.sm_pSharedApplication, "sharedApplication");
    return cc.sm_pSharedApplication
};
cc.Application.getCurrentLanguage = function() {
    var a = cc.kLanguageEnglish,
    b = navigator.language,
    b = b.toLowerCase();
    switch (b) {
    case "zh-cn":
        a = cc.kLanguageChinese;
        break;
    case "fr":
        a = cc.kLanguageFrench;
        break;
    case "it":
        a = cc.kLanguageItalian;
        break;
    case "de":
        a = cc.kLanguageGerman;
        break;
    case "es":
        a = cc.kLanguageSpanish;
        break;
    case "ru":
        a = cc.kLanguageRussian
    }
    return a
};
cc.sm_pSharedApplication = null;
cc = cc = cc || {};
cc.SAXParser = cc.Class.extend({
    xmlDoc: null,
    parser: null,
    xmlList: [],
    m_pPlist: [],
    parse: function(a) {
        a = this.getList(a);
        window.DOMParser ? (this.parser = new DOMParser, this.xmlDoc = this.parser.parseFromString(a, "text/xml")) : (this.xmlDoc = new ActiveXObject("Microsoft.XMLDOM"), this.xmlDoc.async = "false", this.xmlDoc.loadXML(a));
        null == this.xmlDoc && cc.LOG("xml " + this.xmlDoc + " not found!");
        a = this.xmlDoc.documentElement;
        if ("plist" != a.tagName) throw "Not a plist file";
        for (var b = null,
        c = 0,
        d = a.childNodes.length; c < d && !(b = a.childNodes[c], 1 == b.nodeType); c++);
        return this.m_pPlist = this._parseNode(b)
    },
    tmxParse: function(a) {
        a = this.getList(a);
        window.DOMParser ? (this.parser = new DOMParser, this.xmlDoc = this.parser.parseFromString(a, "text/xml")) : (this.xmlDoc = new ActiveXObject("Microsoft.XMLDOM"), this.xmlDoc.async = "false", this.xmlDoc.loadXML(a));
        null == this.xmlDoc && cc.LOG("xml " + this.xmlDoc + " not found!");
        return this.xmlDoc
    },
    _parseNode: function(a) {
        var b = null;
        switch (a.tagName) {
        case "dict":
            b = this._parseDict(a);
            break;
        case "array":
            b = this._parseArray(a);
            break;
        case "string":
            b = a.firstChild.nodeValue;
            break;
        case "false":
            b = !1;
            break;
        case "true":
            b = !0;
            break;
        case "real":
            b = parseFloat(a.firstChild.nodeValue);
            break;
        case "integer":
            b = parseInt(a.firstChild.nodeValue, 10)
        }
        return b
    },
    _parseArray: function(a) {
        for (var b = [], c = 0, d = a.childNodes.length; c < d; c++) {
            var e = a.childNodes[c];
            1 == e.nodeType && b.push(this._parseNode(e))
        }
        return b
    },
    _parseDict: function(a) {
        for (var b = {},
        c = null,
        d = 0,
        e = a.childNodes.length; d < e; d++) {
            var f = a.childNodes[d];
            1 == f.nodeType && ("key" == f.tagName ? c = f.firstChild.nodeValue: b[c] = this._parseNode(f))
        }
        return b
    },
    preloadPlist: function(a) {
        if (window.XMLHttpRequest) {
            var b = new XMLHttpRequest;
            b.overrideMimeType && b.overrideMimeType("text/xml")
        } else b = new ActiveXObject("Microsoft.XMLHTTP");
        null != b ? (b.open("GET", a, !1), b.send(null), this.xmlList[a] = b.responseText, cc.Loader.shareLoader().onResLoaded()) : alert("Your browser does not support XMLHTTP.")
    },
    getName: function(a) {
        var b = a.lastIndexOf("/", a.length) + 1,
        c = a.lastIndexOf(".", a.length);
        return a.substring(b, c)
    },
    getExt: function(a) {
        var b = a.lastIndexOf(".", a.length) + 1;
        return a.substring(b, a.length)
    },
    getList: function(a) {
        return null != this.xmlList ? this.xmlList[a] : null
    }
});
cc.SAXParser.shareParser = function() {
    cc.s_shareParser || (cc.s_shareParser = new cc.SAXParser);
    return cc.s_shareParser
};
cc = cc = cc || {};
cc.AppController = cc.Class.extend({
    didFinishLaunchingWithOptions: function() {
        new cc.AppDelegate;
        cc.Application.sharedApplication().run();
        return ! 0
    },
    applicationWillResignActive: function() {
        cc.Director.sharedDirector().pause()
    },
    applicationDidBecomeActive: function() {
        cc.Director.sharedDirector().resume()
    },
    applicationDidEnterBackground: function() {
        cc.Application.sharedApplication().applicationDidEnterBackground()
    },
    applicationWillEnterForeground: function() {
        cc.Application.sharedApplication().applicationWillEnterForeground()
    },
    applicationWillTerminate: function() {}
});
cc.AppController.shareAppController = function() {
    null == cc.s_sharedAppController && (cc.s_sharedAppController = new cc.AppController);
    cc.Assert(cc.s_sharedAppController, "shareAppController");
    return cc.s_sharedAppController
};
cc.s_sharedAppController = null;
cc = cc = cc || {};
cc.kCCItemSize = cc._fontSize = 32;
cc._fontName = "Marker Felt";
cc._fontNameRelease = !1;
cc.kCurrentItem = 3233828865;
cc.kZoomActionTag = 3233828866;
cc.kNormalTag = 8801;
cc.kSelectedTag = 8802;
cc.kDisableTag = 8803;
cc.MenuItem = cc.Node.extend({
    _m_pListener: null,
    _m_pfnSelector: null,
    _m_bIsSelected: !1,
    getIsSelected: function() {
        return this._m_bIsSelected
    },
    _m_bIsEnabled: !1,
    getIsEnabled: function() {
        return this._m_bIsEnabled
    },
    setIsEnabled: function(a) {
        this._m_bIsEnabled = a
    },
    initWithTarget: function(a, b) {
        this.setAnchorPoint(cc.ccp(0.5, 0.5));
        this._m_pListener = a;
        this._m_pfnSelector = b;
        this._m_bIsEnabled = !0;
        this._m_bIsSelected = !1;
        return ! 0
    },
    rect: function() {
        return cc.RectMake(this._m_tPosition.x - this._m_tContentSize.width * this._m_tAnchorPoint.x, this._m_tPosition.y - this._m_tContentSize.height * this._m_tAnchorPoint.y, this._m_tContentSize.width, this._m_tContentSize.height)
    },
    selected: function() {
        this._m_bIsSelected = !0
    },
    unselected: function() {
        this._m_bIsSelected = !1
    },
    setTarget: function(a, b) {
        this._m_pListener = a;
        this._m_pfnSelector = b
    },
    activate: function() {
        if (this._m_bIsEnabled)
            if (this._m_pListener && "string" == typeof this._m_pfnSelector)
                this._m_pListener[this._m_pfnSelector](this);
            else
                this._m_pListener && "function" == typeof this._m_pfnSelector && this._m_pfnSelector.call(this._m_pListener, this)
    }
});
cc.MenuItem.itemWithTarget = function(a, b) {
    var c = new cc.MenuItem;
    c.initWithTarget(a, b);
    return c
};
cc.MenuItemLabel = cc.MenuItem.extend({
    RGBAProtocol: !0,
    _m_tDisabledColor: new cc.Color3B,
    getDisabledColor: function() {
        return this._m_tDisabledColor
    },
    setDisabledColor: function(a) {
        this._m_tDisabledColor = a
    },
    _m_pLabel: null,
    getLabel: function() {
        return this._m_pLabel
    },
    setLabel: function(a) {
        a && (this.addChild(a), a.setAnchorPoint(cc.ccp(0, 0)), this.setContentSize(a.getContentSize()));
        this._m_pLabel && this.removeChild(this._m_pLabel, !0);
        this._m_pLabel = a
    },
    _m_fOrginalScale: 0,
    setIsEnabled: function(a) {
        this._m_bIsEnabled != a && (a ? this._m_pLabel.setColor(this._m_tColorBackup) : (this._m_tColorBackup = this._m_pLabel.getColor(), this._m_pLabel.setColor(this._m_tDisabledColor)));
        this._super(a)
    },
    setOpacity: function(a) {
        this._m_pLabel.setOpacity(a)
    },
    getOpacity: function() {},
    setColor: function(a) {
        this._m_pLabel.setColor(a)
    },
    getColor: function() {
        return this._m_pLabel.getColor
    },
    setIsOpacityModifyRGB: function() {},
    getIsOpacityModifyRGB: function() {},
    initWithLabel: function(a, b, c) {
        this.initWithTarget(b, c);
        this._m_fOriginalScale = 1;
        this._m_tColorBackup = cc.WHITE();
        this._m_tDisabledColor = cc.ccc3(126, 126, 126);
        this.setLabel(a);
        return ! 0
    },
    activate: function() {
        this._m_bIsEnabled && (this.stopAllActions(), this.setScale(this._m_fOriginalScale), this._super())
    },
    selected: function() {
        if (this._m_bIsEnabled) {
            this._super();
            var a = this.getActionByTag(cc.kZoomActionTag);
            a ? this.stopAction(a) : this._m_fOriginalScale = this.getScale();
            a = cc.ScaleTo.actionWithDuration(0.1, 1.2 * this._m_fOriginalScale);
            a.setTag(cc.kZoomActionTag);
            this.runAction(a)
        }
    },
    unselected: function() {
        if (this._m_bIsEnabled) {
            this._super();
            this.stopActionByTag(cc.kZoomActionTag);
            var a = cc.ScaleTo.actionWithDuration(0.1, this._m_fOriginalScale);
            a.setTag(cc.kZoomActionTag);
            this.runAction(a)
        }
    }
});
cc.MenuItemLabel.itemWithLabel = function(a, b, c) {
    var d = new cc.MenuItemLabel;
    3 == arguments.length ? d.initWithLabel(a, b, c) : d.initWithLabel(a);
    return d
};
cc.MenuItemAtlasFont = cc.MenuItemLabel.extend({
    initFromString: function(a, b, c, d, e, f, g) {
        cc.Assert(null != a && 0 != a.length, "value length must be greater than 0");
        var h = new cc.LabelAtlas;
        h.initWithString(a, b, c, d, e);
        cc.MenuItemLabel.initWithLabel(h, f, g);
        return ! 0
    }
});
cc.MenuItemAtlasFont.itemFromString = function(a, b, c, d, e, f, g) {
    var h = new cc.MenuItemAtlasFont;
    h.initFromString(a, b, c, d, e, f, g);
    return h
};
cc.MenuItemFont = cc.MenuItemLabel.extend({
    initFromString: function(a, b, c) {
        cc.Assert(null != a && 0 != a.length, "Value length must be greater than 0");
        this._m_strFontName = cc._fontName;
        this._m_uFontSize = cc._fontSize;
        this.initWithLabel(cc.LabelTTF.labelWithString(a, this._m_strFontName, this._m_uFontSize), b, c);
        return ! 0
    },
    setFontSizeObj: function(a) {
        this._m_uFontSize = a;
        this._recreateLabel()
    },
    fontSizeObj: function() {
        return this._m_uFontSize
    },
    setFontNameObj: function(a) {
        this._m_strFontName = a;
        this._recreateLabel()
    },
    fontNameObj: function() {
        return this._m_strFontName
    },
    _recreateLabel: function() {
        this.setLabel(cc.LabelTTF.labelWithString(this._m_pLabel.getString(), this._m_strFontName, this._m_uFontSize))
    },
    _m_uFontSize: 0,
    _m_strFontName: ""
});
cc.MenuItemFont.setFontSize = function(a) {
    cc._fontSize = a
};
cc.MenuItemFont.fontSize = function() {
    return cc._fontSize
};
cc.MenuItemFont.setFontName = function(a) {
    cc._fontNameRelease && (cc._fontName = "");
    cc._fontName = a;
    cc._fontNameRelease = !0
};
cc.MenuItemFont.fontName = function() {
    return cc._fontName
};
cc.MenuItemFont.itemFromString = function(a, b, c) {
    var d = new cc.MenuItemFont;
    d.initFromString(a, b, c);
    return d
};
cc.MenuItemSprite = cc.MenuItem.extend({
    RGBAProtocol: !0,
    _m_pNormalImage: null,
    getNormalImage: function() {
        return this._m_pNormalImage
    },
    setNormalImage: function(a) {
        a && (this.addChild(a, 0, cc.kNormalTag), a.setAnchorPoint(cc.ccp(0, 0)), a.setIsVisible(!0));
        this._m_pNormalImage && this.removeChild(this._m_pNormalImage, !0);
        this._m_pNormalImage = a
    },
    _m_pSelectedImage: null,
    getSelectedImage: function() {
        return this._m_pSelectedImage
    },
    setSelectedImage: function(a) {
        a && (this.addChild(a, 0, cc.kSelectedTag), a.setAnchorPoint(cc.ccp(0, 0)), a.setIsVisible(!1));
        this._m_pSelectedImage && this.removeChild(this._m_pSelectedImage, !0);
        this._m_pSelectedImage = a
    },
    _m_pDisabledImage: null,
    getDisabledImage: function() {
        return this._m_pDisabledImage
    },
    setDisabledImage: function(a) {
        a && (this.addChild(a, 0, cc.kDisableTag), a.setAnchorPoint(cc.ccp(0, 0)), a.setIsVisible(!1));
        this._m_pDisabledImage && this.removeChild(this._m_pDisabledImage, !0);
        this._m_pDisabledImage = a
    },
    initFromNormalSprite: function(a, b, c, d, e) {
        cc.Assert(null != a, "");
        this.initWithTarget(d, e);
        this.setNormalImage(a);
        this.setSelectedImage(b);
        this.setDisabledImage(c);
        this.setContentSize(this._m_pNormalImage.getContentSize());
        return ! 0
    },
    setColor: function(a) {
        this._m_pNormalImage.setColor(a);
        this._m_pSelectedImage && this._m_pSelectedImage.setColor(a);
        this._m_pDisabledImage && this._m_pDisabledImage.setColor(a)
    },
    getColor: function() {
        this._m_pNormalImage.getColor()
    },
    setOpacity: function(a) {
        this._m_pNormalImage.setOpacity(a);
        this._m_pSelectedImage && this._m_pSelectedImage.setOpacity(a);
        this._m_pDisabledImage && this._m_pDisabledImage.setOpacity(a)
    },
    getOpacity: function() {
        this._m_pNormalImage.getOpacity()
    },
    selected: function() {
        this._super();
        this._m_pDisabledImage && this._m_pDisabledImage.setIsVisible(!1);
        this._m_pSelectedImage ? (this._m_pNormalImage.setIsVisible(!1), this._m_pSelectedImage.setIsVisible(!0)) : this._m_pNormalImage.setIsVisible(!0)
    },
    unselected: function() {
        this._super();
        this._m_pNormalImage.setIsVisible(!0);
        this._m_pSelectedImage && this._m_pSelectedImage.setIsVisible(!1);
        this._m_pDisabledImage && this._m_pDisabledImage.setIsVisible(!1)
    },
    setIsEnabled: function(a) {
        this._super(a);
        this._m_pSelectedImage && this._m_pSelectedImage.setIsVisible(!1);
        a ? (this._m_pNormalImage.setIsVisible(!0), this._m_pDisabledImage && this._m_pDisabledImage.setIsVisible(!1)) : this._m_pDisabledImage ? (this._m_pDisabledImage.setIsVisible(!0), this._m_pNormalImage.setIsVisible(!1)) : this._m_pNormalImage.setIsVisible(!0)
    }
});
cc.MenuItemSprite.itemFromNormalSprite = function(a, b, c, d, e) {
    var f = new cc.MenuItemSprite;
    if (e) f.initFromNormalSprite(a, b, c, d, e);
    else return d ? cc.MenuItemSprite.itemFromNormalSprite(a, b, null, c, d) : cc.MenuItemSprite.itemFromNormalSprite(a, b, c, null, null);
    return f
};
cc.MenuItemImage = cc.MenuItemSprite.extend({
    initFromNormalImage: function(a, b, c, d, e) {
        var a = cc.Sprite.spriteWithFile(a),
        f = null,
        g = null;
        b && (f = cc.Sprite.spriteWithFile(b));
        c && (g = cc.Sprite.spriteWithFile(c));
        return this.initFromNormalSprite(a, f, g, d, e)
    }
});
cc.MenuItemImage.itemFromNormalImage = function(a, b, c, d, e) {
    var f = new cc.MenuItemImage;
    return 4 == arguments.length ? cc.MenuItemImage.itemFromNormalImage(a, b, null, c, d) : f.initFromNormalImage(a, b, c, d, e) ? f: null
};
cc.MenuItemToggle = cc.MenuItem.extend({
    RGBAProtocol: !0,
    _m_cOpacity: 0,
    getOpacity: function() {
        return this._m_cOpacity
    },
    setOpacity: function(a) {
        this._m_cOpacity = a;
        if (this._m_pSubItems && 0 < this._m_pSubItems.length) for (var b = 0; b < this._m_pSubItems.length; b++) this._m_pSubItems[b].setOpacity(a)
    },
    _m_tColor: new cc.Color3B,
    getColor: function() {
        return this._m_tColor
    },
    setColor: function(a) {
        this._m_tColor = a;
        if (this._m_pSubItems && 0 < this._m_pSubItems.length) for (var b = 0; b < this._m_pSubItems.length; b++) this._m_pSubItems[b].setColor(a)
    },
    _m_uSelectedIndex: 0,
    getSelectedIndex: function() {
        return this._m_uSelectedIndex
    },
    setSelectedIndex: function(a) {
        if (a != this._m_uSelectedIndex) {
            this._m_uSelectedIndex = a;
            this.removeChildByTag(cc.kCurrentItem, !1);
            a = this._m_pSubItems[this._m_uSelectedIndex];
            this.addChild(a, 0, cc.kCurrentItem);
            var b = a.getContentSize();
            this.setContentSize(b);
            a.setPosition(cc.ccp(b.width / 2, b.height / 2))
        }
    },
    _m_pSubItems: [],
    getSubItems: function() {
        return this._m_pSubItems
    },
    setSubItems: function(a) {
        this._m_pSubItems = a
    },
    initWithTarget: function(a) {
        this._super(a[0], a[1]);
        if (2 != a.length) {
            this._m_pSubItems = [];
            for (var b = 2; b < a.length; b++) a[b] && this._m_pSubItems.push(a[b]);
            this._m_uSelectedIndex = 4294967295;
            this.setSelectedIndex(0);
            return ! 0
        }
    },
    initWithItem: function(a) {
        this.initWithTarget(null, null);
        this._m_pSubItems = [];
        this._m_pSubItems.push(a);
        this._m_uSelectedIndex = 4294967295;
        this.setSelectedIndex(0);
        return ! 0
    },
    addSubItem: function(a) {
        this._m_pSubItems.push(a)
    },
    activate: function() {
        this._m_bIsEnabled && this.setSelectedIndex((this._m_uSelectedIndex + 1) % this._m_pSubItems.length);
        this._super()
    },
    selected: function() {
        this._super();
        this._m_pSubItems[this._m_uSelectedIndex].selected()
    },
    unselected: function() {
        this._super();
        this._m_pSubItems[this._m_uSelectedIndex].unselected()
    },
    setIsEnabled: function(a) {
        this._super(a);
        if (this._m_pSubItems && 0 < this._m_pSubItems.length) for (var b = 0; b < this._m_pSubItems.length; b++) this._m_pSubItems[b].setIsEnabled(a)
    },
    selectedItem: function() {
        return this._m_pSubItems[this._m_uSelectedIndex]
    },
    setIsOpacityModifyRGB: function() {},
    getIsOpacityModifyRGB: function() {}
});
cc.MenuItemToggle.itemWithTarget = function() {
    var a = new cc.MenuItemToggle;
    a.initWithTarget(arguments);
    return a
};
cc.MenuItemToggle.itemWithItem = function(a) {
    var b = new cc.MenuItemToggle;
    b.initWithItem(a);
    return b
};
cc = cc = cc || {};
cc.kCCMenuStateWaiting = 0;
cc.kCCMenuStateTrackingTouch = 1;
cc.kCCMenuTouchPriority = -128;
cc.kDefaultPadding = 5;
cc.Menu = cc.Layer.extend({
    _m_tColor: new cc.Color3B,
    getColor: function() {
        return this._m_tColor
    },
    setColor: function(a) {
        this._m_tColor = a;
        if (this._m_pChildren && 0 < this._m_pChildren.length) for (a = 0; a < this._m_pChildren.length; a++) this._m_pChildren[a].setColor(this._m_tColor)
    },
    _m_cOpacity: 0,
    getOpacity: function() {
        return this._m_cOpacity
    },
    setOpacity: function(a) {
        this._m_cOpacity = a;
        if (this._m_pChildren && 0 < this._m_pChildren.length) for (a = 0; a < this._m_pChildren.length; a++) this._m_pChildren[a].setOpacity(this._m_cOpacity)
    },
    _m_pSelectedItem: null,
    init: function() {
        if (this._super()) {
            this.setIsTouchEnabled(!0);
            var a = cc.Director.sharedDirector().getWinSize();
            this._m_bIsRelativeAnchorPoint = !1;
            this.setAnchorPoint(cc.ccp(0.5, 0.5));
            this.setContentSize(a);
            var b = new cc.Rect;
            cc.Application.sharedApplication().statusBarFrame(b);
            var c = cc.Director.sharedDirector().getDeviceOrientation();
            a.height = c == cc.DeviceOrientationLandscapeLeft || c == cc.DeviceOrientationLandscapeRight ? a.height - b.size.width: a.height - b.size.height;
            this.setPosition(cc.ccp(a.width / 2, a.height / 2));
            this._m_pSelectedItem = null;
            this._m_eState = cc.kCCMenuStateWaiting;
            return ! 0
        }
        return ! 1
    },
    initWithItems: function(a) {
        if (this.init()) {
            if (0 < a.length) for (var b = 0; b < a.length; b++) a[b] && this.addChild(a[b], b);
            return ! 0
        }
        return ! 1
    },
    addChild: function(a, b, c) {
        c = c ? c: a._m_nTag;
        this._super(a, b, c)
    },
    alignItemsVertically: function() {
        this.alignItemsVerticallyWithPadding(cc.kDefaultPadding)
    },
    alignItemsVerticallyWithPadding: function(a) {
        var b = -a;
        if (this._m_pChildren && 0 < this._m_pChildren.length) for (var c = 0; c < this._m_pChildren.length; c++) b += this._m_pChildren[c].getContentSize().height * this._m_pChildren[c].getScaleY() + a;
        b /= 2;
        if (this._m_pChildren && 0 < this._m_pChildren.length) for (c = 0; c < this._m_pChildren.length; c++) this._m_pChildren[c].setPosition(cc.ccp(0, b - this._m_pChildren[c].getContentSize().height * this._m_pChildren[c].getScaleY() / 2)),
        b -= this._m_pChildren[c].getContentSize().height * this._m_pChildren[c].getScaleY() + a
    },
    alignItemsHorizontally: function() {
        this.alignItemsHorizontallyWithPadding(cc.kDefaultPadding)
    },
    alignItemsHorizontallyWithPadding: function(a) {
        var b = -a;
        if (this._m_pChildren && 0 < this._m_pChildren.length) for (var c = 0; c < this._m_pChildren.length; c++) b += this._m_pChildren[c].getContentSize().width * this._m_pChildren[c].getScaleX() + a;
        b = -b / 2;
        if (this._m_pChildren && 0 < this._m_pChildren.length) for (c = 0; c < this._m_pChildren.length; c++) this._m_pChildren[c].setPosition(cc.ccp(b + this._m_pChildren[c].getContentSize().width * this._m_pChildren[c].getScaleX() / 2, 0)),
        b += this._m_pChildren[c].getContentSize().width * this._m_pChildren[c].getScaleX() + a
    },
    alignItemsInColumns: function() {
        for (var a = [], b = 0; b < arguments.length; b++) a.push(arguments[b]);
        var c = -5,
        d = 0,
        e = 0,
        f = 0,
        g;
        if (this._m_pChildren && 0 < this._m_pChildren.length) for (b = 0; b < this._m_pChildren.length; b++) {
            cc.Assert(d < a.length, "");
            g = a[d];
            cc.Assert(g, "");
            var h = this._m_pChildren[b].getContentSize().height,
            e = e >= h || isNaN(h) ? e: h; ++f;
            f >= g && (c += e + 5, e = f = 0, ++d)
        }
        cc.Assert(!f, "");
        var i = cc.Director.sharedDirector().getWinSize(),
        j = g = e = d = 0,
        l = 0,
        c = c / 2;
        if (this._m_pChildren && 0 < this._m_pChildren.length) for (b = 0; b < this._m_pChildren.length; b++) {
            var k = this._m_pChildren[b];
            0 == g && (g = a[d], l = j = i.width / (1 + g));
            h = k.getContentSize().height;
            e = e >= h || isNaN(h) ? e: h;
            k.setPosition(cc.ccp(l - i.width / 2, c - k.getContentSize().height / 2));
            l += j; ++f;
            f >= g && (c -= e + 5, e = g = f = 0, ++d)
        }
    },
    alignItemsInRows: function() {
        for (var a = [], b = 0; b < arguments.length; b++) a.push(arguments[b]);
        var c = [],
        d = [],
        e = -10,
        f = -5,
        g = 0,
        h = 0,
        i = 0,
        j;
        if (this._m_pChildren && 0 < this._m_pChildren.length) for (b = 0; b < this._m_pChildren.length; b++) {
            var l = this._m_pChildren[b];
            cc.Assert(g < a.size(), "");
            j = a[g];
            cc.Assert(j, "");
            var k = l.getContentSize().width,
            h = h >= k || isNaN(k) ? h: k,
            f = f + (l.getContentSize().height + 5); ++i;
            i >= j && (c.push(h), d.push(f), e += h + 10, h = i = 0, f = -5, ++g)
        }
        cc.Assert(!i, "");
        f = cc.Director.sharedDirector().getWinSize();
        j = h = g = 0;
        var e = -e / 2,
        o = 0;
        if (this._m_pChildren && 0 < this._m_pChildren.length) for (b = 0; b < this._m_pChildren.length; b++) if (l = this._m_pChildren[b], 0 == j && (j = a[g], o = d[g]), k = l.getContentSize().width, h = h >= k || isNaN(k) ? h: k, l.setPosition(cc.ccp(e + c[g] / 2, o - f.height / 2)), o -= l.getContentSize().height + 10, ++i, i >= j) e += h + 5,
        h = j = i = 0,
        ++g
    },
    registerWithTouchDispatcher: function() {
        cc.TouchDispatcher.sharedDispatcher().addTargetedDelegate(this, cc.kCCMenuTouchPriority, !0)
    },
    ccTouchBegan: function(a) {
        if (this._m_eState != cc.kCCMenuStateWaiting || !this._m_bIsVisible) return ! 1;
        for (var b = this._m_pParent; null != b; b = b.getParent()) if (!b.getIsVisible()) return ! 1;
        return (this._m_pSelectedItem = this._itemForTouch(a)) ? (this._m_eState = cc.kCCMenuStateTrackingTouch, this._m_pSelectedItem.selected(), !0) : !1
    },
    ccTouchEnded: function() {
        cc.Assert(this._m_eState == cc.kCCMenuStateTrackingTouch, "[Menu ccTouchEnded] -- invalid state");
        this._m_pSelectedItem && (this._m_pSelectedItem.unselected(), this._m_pSelectedItem.activate());
        this._m_eState = cc.kCCMenuStateWaiting
    },
    ccTouchCancelled: function() {
        cc.Assert(this._m_eState == cc.kCCMenuStateTrackingTouch, "[Menu ccTouchCancelled] -- invalid state");
        this._m_pSelectedItem && this._m_pSelectedItem.unselected();
        this._m_eState = cc.kCCMenuStateWaiting
    },
    ccTouchMoved: function(a) {
        cc.Assert(this._m_eState == cc.kCCMenuStateTrackingTouch, "[Menu ccTouchMoved] -- invalid state");
        a = this._itemForTouch(a);
        a != this._m_pSelectedItem && (this._m_pSelectedItem && this._m_pSelectedItem.unselected(), (this._m_pSelectedItem = a) && this._m_pSelectedItem.selected())
    },
    onExit: function() {
        this._m_eState == cc.kCCMenuStateTrackingTouch && (this._m_pSelectedItem.unselected(), this._m_eState = cc.kCCMenuStateWaiting, this._m_pSelectedItem = null);
        this._super()
    },
    setIsOpacityModifyRGB: function() {},
    getIsOpacityModifyRGB: function() {},
    _itemForTouch: function(a) {
        a = a.locationInView(a.view());
        if (this._m_pChildren && 0 < this._m_pChildren.length) for (var b = 0; b < this._m_pChildren.length; b++) if (this._m_pChildren[b].getIsVisible() && this._m_pChildren[b].getIsEnabled()) {
            var c = this._m_pChildren[b].convertToNodeSpace(a),
            d = this._m_pChildren[b].rect();
            d.origin = cc.PointZero();
            if (cc.Rect.CCRectContainsPoint(d, c)) return this._m_pChildren[b]
        }
        return null
    },
    _m_eState: -1
});
cc.Menu.node = function() {
    return cc.Menu.menuWithItems()
};
cc.Menu.menuWithItems = function() {
    var a = new cc.Menu;
    a.initWithItems(arguments);
    return a
};
cc.Menu.menuWithItem = function(a) {
    return cc.Menu.menuWithItems(a)
};
cc = cc = cc || {};
cc.TMXOrientationOrtho = 1;
cc.TMXOrientationHex = 2;
cc.TMXOrientationIso = 3;
cc.TMXTiledMap = cc.Node.extend({
    _m_tMapSize: cc.SizeZero(),
    _m_tTileSize: cc.SizeZero(),
    _m_pProperties: null,
    _m_pObjectGroups: null,
    _m_nMapOrientation: null,
    _m_pTMXLayers: null,
    _m_pTileProperties: [],
    getMapSize: function() {
        return this._m_tMapSize
    },
    setMapSize: function(a) {
        this._m_tMapSize = a
    },
    getTileSize: function() {
        return this._m_tTileSize
    },
    setTileSize: function(a) {
        this._m_tTileSize = a
    },
    getMapOrientation: function() {
        return this._m_nMapOrientation
    },
    setMapOrientation: function(a) {
        this._m_nMapOrientation = a
    },
    getObjectGroups: function() {
        return this._m_pObjectGroups
    },
    setObjectGroups: function(a) {
        this._m_pObjectGroups = a
    },
    getProperties: function() {
        return this._m_pProperties
    },
    setProperties: function(a) {
        this._m_pProperties = a
    },
    initWithTMXFile: function(a) {
        cc.Assert(null != a && 0 < a.length, "TMXTiledMap: tmx file should not be nil");
        this.setContentSize(cc.SizeZero());
        a = cc.TMXMapInfo.formatWithTMXFile(a);
        if (!a) return ! 1;
        cc.Assert(0 != a.getTilesets().length, "TMXTiledMap: Map not found. Please check the filename.");
        this._m_tMapSize = a.getMapSize();
        this._m_tTileSize = a.getTileSize();
        this._m_pProperties = a.getOrientation();
        this.setObjectGroups(a.getObjectGroups());
        this.setProperties(a.getProperties());
        this._m_pTileProperties = a.getTileProperties();
        var b = 0,
        c = a.getLayers();
        if (c) {
            this._m_pTMXLayers = {};
            for (var d = null,
            e = 0,
            f = c.length; e < f; e++) if ((d = c[e]) && d.m_bVisible) {
                d = this.parseLayer(d, a);
                this.addChild(d, b, b);
                this._m_pTMXLayers[d.getLayerName()] = d;
                var d = d.getContentSize(),
                g = this.getContentSize();
                g.width = Math.max(g.width, d.width);
                g.height = Math.max(g.height, d.height);
                this.setContentSize(g);
                b++
            }
        }
        return ! 0
    },
    layerNamed: function(a) {
        return this._m_pTMXLayers.hasOwnProperty(a) ? this._m_pTMXLayers[a] : null
    },
    objectGroupNamed: function(a) {
        if (this._m_pObjectGroups) for (var b = 0; b < this._m_pObjectGroups.length; b++) {
            var c = this._m_pObjectGroups[b];
            if (c && c.getGroupName() == a) return c
        }
        return null
    },
    propertyNamed: function(a) {
        return this._m_pProperties[a.toString()]
    },
    propertiesForGID: function(a) {
        return this._m_pTileProperties[a]
    },
    parseLayer: function(a, b) {
        var c = this.tilesetForLayer(a, b),
        c = cc.TMXLayer.layerWithTilesetInfo(c, a, b);
        a.m_bOwnTiles = !1;
        c.setupTiles();
        return c
    },
    tilesetForLayer: function(a, b) {
        var c = a._m_tLayerSize,
        d = b.getTilesets();
        if (d) for (var e = null,
        f = d.length - 1; 0 <= f; f--) if (e = d[f]) for (var g = 0; g < c.height; g++) for (var h = 0; h < c.width; h++) {
            var i = a._m_pTiles[(h + c.width * g).toString()];
            if (0 !== i && i >= e.m_uFirstGid) return e
        }
        cc.LOG("cocos2d: Warning: TMX Layer " + a.m_sName + " has no tiles");
        return null
    }
});
cc.TMXTiledMap.tiledMapWithTMXFile = function(a) {
    var b = new cc.TMXTiledMap;
    return b.initWithTMXFile(a) ? b: null
};
cc = cc = cc || {};
cc.TMXLayerAttribNone = 1;
cc.TMXLayerAttribBase64 = 2;
cc.TMXLayerAttribGzip = 4;
cc.TMXLayerAttribZlib = 8;
cc.TMXPropertyNone = null;
cc.TMXPropertyMap = null;
cc.TMXPropertyLayer = null;
cc.TMXPropertyObjectGroup = null;
cc.TMXPropertyObject = null;
cc.TMXPropertyTile = null;
cc.TMXLayerInfo = cc.Class.extend({
    _m_pProperties: [],
    m_sName: "",
    _m_tLayerSize: null,
    _m_pTiles: [],
    m_bVisible: null,
    _m_cOpacity: null,
    m_bOwnTiles: !0,
    _m_uMinGID: 1E5,
    _m_uMaxGID: 0,
    m_tOffset: cc.PointZero(),
    getProperties: function() {
        return this._m_pProperties
    },
    setProperties: function(a) {
        this._m_pProperties = a
    }
});
cc.TMXTilesetInfo = cc.Class.extend({
    m_sName: null,
    m_uFirstGid: 0,
    _m_tTileSize: cc.SizeZero(),
    m_uSpacing: 0,
    m_uMargin: 0,
    m_sSourceImage: null,
    m_tImageSize: cc.SizeZero(),
    rectForGID: function(a) {
        var b = cc.RectZero();
        b.size = this._m_tTileSize;
        var a = a - parseInt(this.m_uFirstGid),
        c = parseInt((this.m_tImageSize.width - 2 * this.m_uMargin + this.m_uSpacing) / (this._m_tTileSize.width + this.m_uSpacing));
        b.origin.x = parseInt(a % c * (this._m_tTileSize.width + this.m_uSpacing) + this.m_uMargin);
        b.origin.y = parseInt(parseInt(a / c) * (this._m_tTileSize.height + this.m_uSpacing) + this.m_uMargin);
        return b
    }
});
cc.TMXMapInfo = cc.SAXParser.extend({
    _m_nOrientation: null,
    _m_tMapSize: cc.SizeZero(),
    _m_tTileSize: cc.SizeZero(),
    _m_pLayers: null,
    _m_pTileSets: null,
    _m_pObjectGroups: null,
    _m_nParentElement: null,
    _m_uParentGID: null,
    _m_nLayerAttribs: 0,
    _m_bStoringCharacters: !1,
    _m_pProperties: null,
    _m_sTMXFileName: null,
    _m_sCurrentString: null,
    _m_pTileProperties: [],
    getOrientation: function() {
        return this._m_nOrientation
    },
    setOrientation: function(a) {
        this._m_nOrientation = a
    },
    getMapSize: function() {
        return this._m_tMapSize
    },
    setMapSize: function(a) {
        this._m_tMapSize = a
    },
    getTileSize: function() {
        return this._m_tTileSize
    },
    setTileSize: function(a) {
        this._m_tTileSize = a
    },
    getLayers: function() {
        return this._m_pLayers
    },
    setLayers: function(a) {
        this._m_pLayers.push(a)
    },
    getTilesets: function() {
        return this._m_pTileSets
    },
    setTilesets: function(a) {
        this._m_pTileSets.push(a)
    },
    getObjectGroups: function() {
        return this._m_pObjectGroups
    },
    setObjectGroups: function(a) {
        this._m_pObjectGroups.push(a)
    },
    getParentElement: function() {
        return this._m_nParentElement
    },
    setParentElement: function(a) {
        this._m_nParentElement = a
    },
    getParentGID: function() {
        return this._m_uParentGID
    },
    setParentGID: function(a) {
        this._m_uParentGID = a
    },
    getLayerAttribs: function() {
        return this._m_nLayerAttribs
    },
    setLayerAttribs: function(a) {
        this._m_nLayerAttribs = a
    },
    getStoringCharacters: function() {
        return this._m_bStoringCharacters
    },
    setStoringCharacters: function(a) {
        this._m_bStoringCharacters = a
    },
    getProperties: function() {
        return this._m_pProperties
    },
    setProperties: function(a) {
        this._m_pProperties.push(a)
    },
    initWithTMXFile: function(a) {
        this._m_pTileSets = [];
        this._m_pLayers = [];
        this._m_sTMXFileName = a;
        this._m_pObjectGroups = [];
        this._m_pProperties = [];
        this._m_pTileProperties = [];
        this._m_sCurrentString = "";
        this._m_bStoringCharacters = !1;
        this._m_nLayerAttribs = cc.TMXLayerAttribNone;
        this._m_nParentElement = cc.TMXPropertyNone;
        return this.parseXMLFile(this._m_sTMXFileName)
    },
    parseXMLFile: function(a) {
        var b = cc.SAXParser.shareParser().tmxParse(a),
        c = b.documentElement,
        d = c.getAttribute("version"),
        e = c.getAttribute("orientation");
        if ("map" == c.nodeName) {
            "1.0" != d && null !== d && cc.LOG("cocos2d: TMXFormat: Unsupported TMX version:" + d);
            "orthogonal" == e ? this.setOrientation(cc.TMXOrientationOrtho) : "isometric" == e ? this.setOrientation(cc.TMXOrientationIso) : "hexagonal" == e ? this.setOrientation(cc.TMXOrientationHex) : null !== e && cc.LOG("cocos2d: TMXFomat: Unsupported orientation:" + this.getOrientation());
            var f = new cc.Size;
            f.width = parseFloat(c.getAttribute("width"));
            f.height = parseFloat(c.getAttribute("height"));
            this.setMapSize(f);
            f = new cc.Size;
            f.width = parseFloat(c.getAttribute("tilewidth"));
            f.height = parseFloat(c.getAttribute("tileheight"));
            this.setTileSize(f);
            this.setParentElement(cc.TMXPropertyMap)
        }
        var g = c.getElementsByTagName("tileset");
        "map" !== c.nodeName && (g = [], g.push(c));
        d = 0;
        for (e = g.length; d < e; d++) {
            var h = g[d],
            f = h.getAttribute("source"),
            i = a.substring(0, a.lastIndexOf("/") + 1);
            if (f) this.parseXMLFile(i + f);
            else {
                var j = new cc.TMXTilesetInfo;
                j.m_sName = h.getAttribute("name") || "";
                j.m_uFirstGid = parseInt(h.getAttribute("firstgid")) || 1;
                j.m_uSpacing = parseInt(h.getAttribute("spacing")) || 0;
                j.m_uMargin = parseInt(h.getAttribute("margin")) || 0;
                f = cc.Size;
                f.width = parseFloat(h.getAttribute("tilewidth"));
                f.height = parseFloat(h.getAttribute("tileheight"));
                j._m_tTileSize = f; (h = h.getElementsByTagName("image")[0].getAttribute("source")) && (h = i + h);
                j.m_sSourceImage = h;
                this.setTilesets(j)
            }
        }
        if (a = c.getElementsByTagName("tile")) {
            d = 0;
            for (e = a.length; d < e; d++) g = this.getTilesets()[0],
            h = a[d],
            this.setParentGID(g.m_uFirstGid + parseInt(h.getAttribute("id"))),
            this.setTileProperties(this.getParentGID()),
            this.setParentElement(cc.TMXPropertyTile)
        }
        if (h = c.getElementsByTagName("layer")) {
            d = 0;
            for (e = h.length; d < e; d++) {
                i = h[d];
                g = i.getElementsByTagName("data")[0];
                a = new cc.TMXLayerInfo;
                a.m_sName = i.getAttribute("name");
                f = new cc.Size;
                f.width = parseFloat(i.getAttribute("width"));
                f.height = parseFloat(i.getAttribute("height"));
                a._m_tLayerSize = f;
                f = i.getAttribute("visible");
                a.m_bVisible = "0" != f;
                f = i.getAttribute("opacity") || 1;
                a._m_cOpacity = f ? parseInt(255 * parseFloat(f)) : 255;
                j = parseFloat(i.getAttribute("x")) || 0;
                f = parseFloat(i.getAttribute("y")) || 0;
                a.m_tOffset = cc.ccp(j, f);
                f = "";
                for (i = 0; i < g.childNodes.length; i++) f += g.childNodes[i].nodeValue;
                g = g.getAttribute("compression");
                cc.Assert(null == g || "gzip" == g || "zlib" == g, "TMX: unsupported compression method");
                switch (g) {
                case "gzip":
                    a._m_pTiles = cc.unzipBase64AsArray(f, 4);
                    break;
                case "zlib":
                    break;
                case null:
                    a._m_pTiles = cc.base64.decodeAsArray(f, 4);
                    break;
                default:
                    cc.Assert(this.getLayerAttribs() != cc.TMXLayerAttribNone, "TMX tile map: Only base64 and/or gzip/zlib maps are supported")
                }
                this.setLayers(a);
                this.setParentElement(cc.TMXPropertyLayer)
            }
        }
        if (h = c.getElementsByTagName("objectgroup")) for (d = 0; d < h.length; d++) {
            a = h[d];
            e = new cc.TMXObjectGroup;
            e.setGroupName(a.getAttribute("name"));
            g = new cc.Point;
            g.x = parseFloat(a.getAttribute("x")) * this.getTileSize().width || 0;
            g.y = parseFloat(a.getAttribute("y")) * this.getTileSize().height || 0;
            e.setPositionOffset(g);
            if (g = a.querySelectorAll("object")) for (i = 0; i < g.length; i++) j = g[i],
            a = {},
            a.name = j.getAttribute("name") || "",
            a.type = j.getAttribute("type") || "",
            a.x = parseInt(j.getAttribute("x") || 0) + e.getPositionOffset().x,
            f = parseInt(j.getAttribute("y") || 0) + e.getPositionOffset().y,
            f = parseInt(this.getMapSize().height * this.getTileSize().height) - f - parseInt(j.getAttribute("height")),
            a.y = f,
            a.width = parseInt(j.getAttribute("width")),
            a.height = parseInt(j.getAttribute("height")),
            e.setObjects(a),
            this.setParentElement(cc.TMXPropertyObject);
            this.setObjectGroups(e);
            this.setParentElement(cc.TMXPropertyObjectGroup)
        }
        if (b = b.querySelectorAll("map > properties > property")) for (d = 0; d < b.length; d++) h = b[d],
        this.getParentElement() == cc.TMXPropertyNone ? cc.LOG("TMX tile map: Parent element is unsupported. Cannot add property named " + h.getAttribute("name") + " with value " + h.getAttribute("value")) : this.getParentElement() == cc.TMXPropertyMap ? (g = new String(h.getAttribute("value")), h = h.getAttribute("name"), this.getProperties()[h] = g) : this.getParentElement() == cc.TMXPropertyLayer ? (a = this.getLayers()[0], g = new String(h.getAttribute("value")), h = h.getAttribute("name"), a.getProperties()[h] = g) : this.getParentElement() == cc.TMXPropertyObjectGroup ? (e = this.getObjectGroups()[0], g = new String(h.getAttribute("value")), h = h.getAttribute("name"), e.getProperties()[h] = g) : this.getParentElement() == cc.TMXPropertyObject ? (e = this.getObjectGroups()[0], a = e.getObjects()[0], e = h.getAttribute("name"), h = new String(h.getAttribute("value")), a[e] = h) : this.getParentElement() == cc.TMXPropertyTile && (a = this.getTileProperties()[this.getParentGID()], e = h.getAttribute("name"), h = new String(h.getAttribute("name")), a[e] = h);
        return c
    },
    getTileProperties: function() {
        return this._m_pTileProperties
    },
    setTileProperties: function(a) {
        this._m_pTileProperties[a] = {}
    },
    getCurrentString: function() {
        return this._m_sCurrentString
    },
    setCurrentString: function(a) {
        this._m_sCurrentString = a
    },
    getTMXFileName: function() {
        return this._m_sTMXFileName
    },
    setTMXFileName: function(a) {
        this._m_sTMXFileName = a
    }
});
cc.TMXMapInfo.formatWithTMXFile = function(a) {
    var b = new cc.TMXMapInfo;
    return b.initWithTMXFile(a) ? b: null
};
cc = cc = cc || {};
cc.TMXObjectGroup = cc.Class.extend({
    _m_sGroupName: "",
    _m_tPositionOffset: cc.PointZero(),
    _m_pProperties: null,
    _m_pObjects: null,
    ctor: function() {
        this._m_pProperties = [];
        this._m_pObjects = []
    },
    getPositionOffset: function() {
        return this._m_tPositionOffset
    },
    setPositionOffset: function(a) {
        this._m_tPositionOffset = a
    },
    getProperties: function() {
        return this._m_pProperties
    },
    setProperties: function(a) {
        this._m_pProperties.push(a)
    },
    getGroupName: function() {
        return this._m_sGroupName.toString()
    },
    setGroupName: function(a) {
        this._m_sGroupName = a
    },
    propertyNamed: function(a) {
        return this._m_pProperties[a]
    },
    objectNamed: function(a) {
        if (this._m_pObjects && 0 < this._m_pObjects.length) for (var b = 0,
        c = this._m_pObjects.length; b < c; b++) {
            var d = this._m_pObjects[b].name;
            if (d && d == a) return this._m_pObjects[b]
        }
        return null
    },
    getObjects: function() {
        return this._m_pObjects
    },
    setObjects: function(a) {
        this._m_pObjects.push(a)
    }
});
cc = cc = cc || {};
cc.TMXLayer = cc.SpriteBatchNode.extend({
    _m_tLayerSize: cc.SizeZero(),
    _m_tMapTileSize: cc.SizeZero(),
    _m_pTiles: null,
    _m_pTileSet: null,
    _m_uLayerOrientation: null,
    _m_pProperties: null,
    _m_sLayerName: "",
    _m_cOpacity: 255,
    _m_uMinGID: null,
    _m_uMaxGID: null,
    _m_nVertexZvalue: null,
    _m_bUseAutomaticVertexZ: null,
    _m_fAlphaFuncValue: null,
    _m_pReusedTile: null,
    _m_pAtlasIndexArray: null,
    _m_fContentScaleFactor: null,
    ctor: function() {
        this._super();
        this._m_pChildren = [];
        this._m_pobDescendants = [];
        this._isUseCache = !0
    },
    getLayerSize: function() {
        return this._m_tLayerSize
    },
    setLayerSize: function(a) {
        this._m_tLayerSize = a
    },
    getMapTileSize: function() {
        return this._m_tMapTileSize
    },
    setMapTileSize: function(a) {
        this._m_tMapTileSize = a
    },
    getTiles: function() {
        return this._m_pTiles
    },
    setTiles: function(a) {
        this._m_pTiles = a
    },
    getTileSet: function() {
        return this._m_pTileSet
    },
    setTileSet: function(a) {
        this._m_pTileSet = a
    },
    getLayerOrientation: function() {
        return this._m_uLayerOrientation
    },
    setLayerOrientation: function(a) {
        this._m_uLayerOrientation = a
    },
    getProperties: function() {
        return this._m_pProperties
    },
    setProperties: function(a) {
        this._m_pProperties = a
    },
    initWithTilesetInfo: function(a, b, c) {
        var d = b._m_tLayerSize,
        d = 0.35 * parseInt(d.width * d.height) + 1,
        e = null;
        a && (e = cc.TextureCache.sharedTextureCache().addImage(a.m_sSourceImage.toString()));
        return this.initWithTexture(e, d) ? (this._m_sLayerName = b.m_sName, this._m_tLayerSize = b._m_tLayerSize, this._m_pTiles = b._m_pTiles, this._m_uMinGID = b._m_uMinGID, this._m_uMaxGID = b._m_uMaxGID, this._m_cOpacity = b._m_cOpacity, this._m_pProperties = b.getProperties(), this._m_fContentScaleFactor = cc.Director.sharedDirector().getContentScaleFactor(), this._m_pTileSet = a, this._m_tMapTileSize = c.getTileSize(), this._m_uLayerOrientation = c.getOrientation(), this.setPosition(this._calculateLayerOffset(b.m_tOffset)), this._m_pAtlasIndexArray = [], this.setContentSizeInPixels(cc.SizeMake(this._m_tLayerSize.width * this._m_tMapTileSize.width, this._m_tLayerSize.height * this._m_tMapTileSize.height)), this._m_tMapTileSize.width /= this._m_fContentScaleFactor, this._m_tMapTileSize.height /= this._m_fContentScaleFactor, this._m_bUseAutomaticVertexZ = !1, this._m_fAlphaFuncValue = this._m_nVertexZvalue = 0, !0) : !1
    },
    releaseMap: function() {
        this._m_pTiles && (this._m_pTiles = null);
        this._m_pAtlasIndexArray && (this._m_pAtlasIndexArray = null)
    },
    tileAt: function(a) {
        cc.Assert(a.x < this._m_tLayerSize.width && a.y < this._m_tLayerSize.height && 0 <= a.x && 0 <= a.y, "TMXLayer: invalid position");
        cc.Assert(this._m_pTiles && this._m_pAtlasIndexArray, "TMXLayer: the tiles map has been released");
        var b = null,
        c = this.tileGIDAt(a);
        if (c) {
            var d = a.x + a.y * this._m_tLayerSize.width,
            b = this.getChildByTag(d);
            b || (c = this._m_pTileSet.rectForGID(c), c = cc.RectMake(c.origin.x / this._m_fContentScaleFactor, c.origin.y / this._m_fContentScaleFactor, c.size.width / this._m_fContentScaleFactor, c.size.height / this._m_fContentScaleFactor), b = new cc.Sprite, b.initWithBatchNode(this, c), b.setPosition(this.positionAt(a)), b.setVertexZ(this._vertexZForPos(a)), b.setAnchorPoint(cc.PointZero()), b.setOpacity(this._m_cOpacity), a = this._atlasIndexForExistantZ(d), this.addSpriteWithoutQuad(b, a, d))
        }
        return b
    },
    tileGIDAt: function(a) {
        cc.Assert(a.x < this._m_tLayerSize.width && a.y < this._m_tLayerSize.height && 0 <= a.x && 0 <= a.y, "TMXLayer: invalid position");
        cc.Assert(this._m_pTiles && this._m_pAtlasIndexArray, "TMXLayer: the tiles map has been released");
        return this._m_pTiles[a.x + a.y * this._m_tLayerSize.width]
    },
    setTileGID: function(a, b) {
        cc.Assert(b.x < this._m_tLayerSize.width && b.y < this._m_tLayerSize.height && 0 <= b.x && 0 <= b.y, "TMXLayer: invalid position");
        cc.Assert(this._m_pTiles && this._m_pAtlasIndexArray, "TMXLayer: the tiles map has been released");
        cc.Assert(0 !== a || !(a >= this._m_pTileSet.m_uFirstGid), "TMXLayer: invalid gid:" + a);
        this._setNodeDirtyForCache();
        var c = this.tileGIDAt(b);
        if (c != a) if (0 == a) this.removeTileAt(b);
        else if (0 == c) this._insertTileForGID(a, b);
        else {
            var c = b.x + b.y * this._m_tLayerSize.width,
            d = this.getChildByTag(c);
            if (d) {
                var e = this._m_pTileSet.rectForGID(a),
                e = cc.RectMake(e.origin.x / this._m_fContentScaleFactor, e.origin.y / this._m_fContentScaleFactor, e.size.width / this._m_fContentScaleFactor, e.size.height / this._m_fContentScaleFactor);
                d.setTextureRectInPixels(e, !1, e.size);
                this._m_pTiles[c] = a
            } else this._updateTileForGID(a, b)
        }
    },
    removeTileAt: function(a) {
        cc.Assert(a.x < this._m_tLayerSize.width && a.y < this._m_tLayerSize.height && 0 <= a.x && 0 <= a.y, "TMXLayer: invalid position");
        cc.Assert(this._m_pTiles && this._m_pAtlasIndexArray, "TMXLayer: the tiles map has been released");
        this._setNodeDirtyForCache();
        if (this.tileGIDAt(a)) {
            var b = a.x + a.y * this._m_tLayerSize.width,
            a = this._atlasIndexForExistantZ(b);
            this._m_pTiles[b] = 0;
            cc.ArrayRemoveObjectAtIndex(this._m_pAtlasIndexArray, a);
            if (b = this.getChildByTag(b)) this.removeChild(b, !0);
            else if (this._m_pobTextureAtlas.removeQuadAtIndex(a), this._m_pChildren) for (var b = 0,
            c = this._m_pChildren.length; b < c; b++) {
                var d = this._m_pChildren[b];
                if (d) {
                    var e = d.getAtlasIndex();
                    e >= a && d.setAtlasIndex(e - 1)
                }
            }
        }
    },
    positionAt: function(a) {
        var b = cc.PointZero();
        switch (this._m_uLayerOrientation) {
        case cc.TMXOrientationOrtho:
            b = this._positionForOrthoAt(a);
            break;
        case cc.TMXOrientationIso:
            b = this._positionForIsoAt(a);
            break;
        case cc.TMXOrientationHex:
            b = this._positionForHexAt(a)
        }
        return b
    },
    propertyNamed: function(a) {
        return this._m_pProperties[a]
    },
    setupTiles: function() {
        var a = this._m_pobTextureAtlas.getTexture();
        this._m_pTileSet.m_tImageSize = new cc.Size(a.width, a.height);
        this._parseInternalProperties();
        this._setNodeDirtyForCache();
        for (a = 0; a < this._m_tLayerSize.height; a++) for (var b = 0; b < this._m_tLayerSize.width; b++) {
            var c = this._m_pTiles[b + this._m_tLayerSize.width * a];
            0 != c && (this._appendTileForGID(c, cc.ccp(b, a)), this._m_uMinGID = Math.min(c, this._m_uMinGID), this._m_uMaxGID = Math.max(c, this._m_uMaxGID))
        }
        cc.Assert(this._m_uMaxGID >= this._m_pTileSet.m_uFirstGid && this._m_uMinGID >= this._m_pTileSet.m_uFirstGid, "TMX: Only 1 tilset per layer is supported")
    },
    addChild: function() {
        cc.Assert(0, "addChild: is not supported on cc.TMXLayer. Instead use setTileGID:at:/tileAt:")
    },
    removeChild: function(a, b) {
        if (a) {
            cc.Assert(cc.ArrayContainsObject(this._m_pChildren, a), "Tile does not belong to TMXLayer");
            this._setNodeDirtyForCache();
            var c = a.getAtlasIndex();
            this._m_pTiles[this._m_pAtlasIndexArray[c]] = 0;
            cc.ArrayRemoveObjectAtIndex(this._m_pAtlasIndexArray, c);
            this._super(a, b)
        }
    },
    draw: function() {
        this._super()
    },
    getLayerName: function() {
        return this._m_sLayerName.toString()
    },
    setLayerName: function(a) {
        this._m_sLayerName = a
    },
    _positionForIsoAt: function(a) {
        return cc.PointMake(this._m_tMapTileSize.width / 2 * (this._m_tLayerSize.width + a.x - a.y - 1), this._m_tMapTileSize.height / 2 * (2 * this._m_tLayerSize.height - a.x - a.y - 2))
    },
    _positionForOrthoAt: function(a) {
        return cc.PointMake(a.x * this._m_tMapTileSize.width, (this._m_tLayerSize.height - a.y - 1) * this._m_tMapTileSize.height)
    },
    _positionForHexAt: function(a) {
        var b = 0;
        1 == a.x % 2 && (b = -this._m_tMapTileSize.height / 2);
        return cc.PointMake(3 * a.x * this._m_tMapTileSize.width / 4, (this._m_tLayerSize.height - a.y - 1) * this._m_tMapTileSize.height + b)
    },
    _calculateLayerOffset: function(a) {
        var b = cc.PointZero();
        switch (this._m_uLayerOrientation) {
        case cc.TMXOrientationOrtho:
            b = cc.ccp(a.x * this._m_tMapTileSize.width, -a.y * this._m_tMapTileSize.height);
            break;
        case cc.TMXOrientationIso:
            b = cc.ccp(this._m_tMapTileSize.width / 2 * (a.x - a.y), this._m_tMapTileSize.height / 2 * ( - a.x - a.y));
            break;
        case cc.TMXOrientationHex:
            b = cc.ccp(0, 0),
            cc.LOG("cocos2d:offset for hexagonal map not implemented yet")
        }
        return b
    },
    _appendTileForGID: function(a, b) {
        var c = this._m_pTileSet.rectForGID(a),
        c = cc.RectMake(c.origin.x / this._m_fContentScaleFactor, c.origin.y / this._m_fContentScaleFactor, c.size.width / this._m_fContentScaleFactor, c.size.height / this._m_fContentScaleFactor);
        this._setNodeDirtyForCache();
        var d = b.x + b.y * this._m_tLayerSize.width;
        this._m_pReusedTile = new cc.Sprite;
        this._m_pReusedTile.setParent(this);
        this._m_pReusedTile.initWithBatchNode(this, c);
        this._m_pReusedTile.setPosition(this.positionAt(b));
        this._m_pReusedTile.setVertexZ(this._vertexZForPos(b));
        this._m_pReusedTile.setAnchorPoint(cc.PointZero());
        this._m_pReusedTile.setOpacity(this._m_cOpacity);
        this._m_pReusedTile.setTag(d);
        c = this._m_pAtlasIndexArray.length;
        this.addQuadFromSprite(this._m_pReusedTile, c);
        this._m_pAtlasIndexArray = cc.ArrayAppendObjectToIndex(this._m_pAtlasIndexArray, d, c);
        return this._m_pReusedTile
    },
    _insertTileForGID: function(a, b) {
        var c = this._m_pTileSet.rectForGID(a),
        c = cc.RectMake(c.origin.x / this._m_fContentScaleFactor, c.origin.y / this._m_fContentScaleFactor, c.size.width / this._m_fContentScaleFactor, c.size.height / this._m_fContentScaleFactor),
        d = parseInt(b.x + b.y * this._m_tLayerSize.width);
        this._setNodeDirtyForCache();
        this._m_pReusedTile = new cc.Sprite;
        this._m_pReusedTile.setParent(this);
        this._m_pReusedTile.initWithBatchNode(this, c);
        this._m_pReusedTile.setPositionInPixels(this.positionAt(b));
        this._m_pReusedTile.setVertexZ(this._vertexZForPos(b));
        this._m_pReusedTile.setAnchorPoint(cc.PointZero());
        this._m_pReusedTile.setOpacity(this._m_cOpacity);
        c = this._atlasIndexForNewZ(d);
        this.addQuadFromSprite(this._m_pReusedTile, c);
        this._m_pAtlasIndexArray = cc.ArrayAppendObjectToIndex(this._m_pAtlasIndexArray, d, c);
        if (this._m_pChildren) for (var e = 0,
        f = this._m_pChildren.length; e < f; e++) {
            var g = this._m_pChildren[e];
            if (g) {
                var h = g.getAtlasIndex();
                h >= c && g.setAtlasIndex(h + 1)
            }
        }
        this._m_pTiles[d] = a;
        return this._m_pReusedTile
    },
    _updateTileForGID: function(a, b) {
        var c = this._m_pTileSet.rectForGID(a),
        c = cc.RectMake(c.origin.x / this._m_fContentScaleFactor, c.origin.y / this._m_fContentScaleFactor, c.size.width / this._m_fContentScaleFactor, c.size.height / this._m_fContentScaleFactor),
        d = b.x + b.y * this._m_tLayerSize.width;
        this._setNodeDirtyForCache();
        this._m_pReusedTile = new cc.Sprite;
        this._m_pReusedTile.initWithBatchNode(this, c);
        this._m_pReusedTile.setPositionInPixels(this.positionAt(b));
        this._m_pReusedTile.setVertexZ(this._vertexZForPos(b));
        this._m_pReusedTile.setAnchorPoint(cc.PointZero());
        this._m_pReusedTile.setOpacity(this._m_cOpacity);
        this._m_pReusedTile.setAtlasIndex(this._atlasIndexForExistantZ(d));
        this._m_pReusedTile.setDirty(!0);
        this._m_pReusedTile.updateTransform();
        this._m_pTiles[d] = a;
        return this._m_pReusedTile
    },
    _parseInternalProperties: function() {
        var a = this.propertyNamed("cc_vertexz");
        a && ("automatic" == a ? this._m_bUseAutomaticVertexZ = !0 : this._m_nVertexZvalue = parseInt(a));
        if (a = this.propertyNamed("cc_alpha_func")) this._m_fAlphaFuncValue = parseInt(a)
    },
    _vertexZForPos: function(a) {
        var b = 0,
        c = 0;
        if (this._m_bUseAutomaticVertexZ) switch (this._m_uLayerOrientation) {
        case cc.TMXOrientationIso:
            c = this._m_tLayerSize.width + this._m_tLayerSize.height;
            b = -(c - (a.x + a.y));
            break;
        case cc.TMXOrientationOrtho:
            b = -(this._m_tLayerSize.height - a.y);
            break;
        case cc.TMXOrientationHex:
            cc.Assert(0, "TMX Hexa zOrder not supported");
            break;
        default:
            cc.Assert(0, "TMX invalid value")
        } else b = this._m_nVertexZvalue;
        return b
    },
    _atlasIndexForExistantZ: function(a) {
        var b;
        if (this._m_pAtlasIndexArray) for (var c = 0; c < this._m_pAtlasIndexArray.length && !(b = this._m_pAtlasIndexArray[c], b == a); c++);
        cc.Assert(b, "TMX atlas index not found. Shall not happen");
        return c
    },
    _atlasIndexForNewZ: function(a) {
        for (var b = 0; b < this._m_pAtlasIndexArray.length && !(a < this._m_pAtlasIndexArray[b]); b++);
        return b
    }
});
cc.TMXLayer.layerWithTilesetInfo = function(a, b, c) {
    var d = new cc.TMXLayer;
    return d.initWithTilesetInfo(a, b, c) ? d: null
};
cc.compareInts = function(a, b) {
    return a - b
};
cc.PointObject = cc.Class.extend({
    _m_tRatio: null,
    _m_tOffset: null,
    _m_pChild: null,
    getRatio: function() {
        return this._m_tRatio
    },
    setRatio: function(a) {
        this._m_tRatio = a
    },
    getOffset: function() {
        return this._m_tOffset
    },
    setOffset: function(a) {
        this._m_tOffset = a
    },
    getChild: function() {
        return this._m_pChild
    },
    setChild: function(a) {
        this._m_pChild = a
    },
    initWithCCPoint: function(a, b) {
        this._m_tRatio = a;
        this._m_tOffset = b;
        this._m_pChild = null;
        return ! 0
    }
});
cc.PointObject.pointWithCCPoint = function(a, b) {
    var c = new cc.PointObject;
    c.initWithCCPoint(a, b);
    return c
};
cc.ParallaxNode = cc.Node.extend({
    _m_pParallaxArray: [],
    getParallaxArray: function() {
        return this._m_pParallaxArray
    },
    setParallaxArray: function(a) {
        this._m_pParallaxArray = a
    },
    ctor: function() {
        this._m_pParallaxArray = [];
        this._m_tLastPosition = cc.PointMake( - 100, -100)
    },
    addChild: function(a, b, c, d) {
        if (3 == arguments.length) cc.Assert(0, "ParallaxNode: use addChild:z:parallaxRatio:positionOffset instead");
        else {
            cc.Assert(null != a, "Argument must be non-nil");
            var e = cc.PointObject.pointWithCCPoint(c, d);
            e.setChild(a);
            this._m_pParallaxArray.push(e);
            e = this._m_tPosition;
            e.x = e.x * c.x + d.x;
            e.y = e.y * c.y + d.y;
            a.setPosition(e);
            this._super(a, b, a.getTag())
        }
    },
    removeChild: function(a, b) {
        for (var c = 0; c < this._m_pParallaxArray.length; c++) if (this._m_pParallaxArray[c].getChild().isEqual(a)) {
            this._m_pParallaxArray.splice(c, 1);
            break
        }
        this._super(a, b)
    },
    removeAllChildrenWithCleanup: function(a) {
        this._m_pParallaxArray = [];
        this._super(a)
    },
    visit: function() {
        var a = this._absolutePosition();
        if (!cc.Point.CCPointEqualToPoint(a, this._m_tLastPosition)) {
            for (var b = 0; b < this._m_pParallaxArray.length; b++) {
                var c = this._m_pParallaxArray[b],
                d = -a.x + a.x * c.getRatio().x + c.getOffset().x,
                e = -a.y + a.y * c.getRatio().y + c.getOffset().y;
                c.getChild().setPosition(cc.ccp(d, e))
            }
            m_tLastPosition = a
        }
        this._super()
    },
    _absolutePosition: function() {
        for (var a = this._m_tPosition,
        b = this; null != b.getParent();) b = b.getParent(),
        a = cc.ccpAdd(a, b.getPosition());
        return a
    },
    _m_tLastPosition: null
});
cc.ParallaxNode.node = function() {
    return new cc.ParallaxNode
};
cc = cc = cc || {};
cc.sound = !0;
cc.pCapabilities = {
    mp3: !1,
    ogg: !1,
    wav: !1
};
cc.AudioManager = cc.Class.extend({
    m_initialized: !1,
    m_pSupportedFormat: ["mp3", "ogg", "wav"],
    m_sRequestedFormat: null,
    m_bSound_enable: !0,
    m_pAudioList: [],
    m_activeAudioExt: -1,
    m_sBackground: null,
    m_bBackgroundPlaying: !1,
    m_EffectsVolume: 1,
    ctor: function() {
        if (!this.m_initialized) {
            var a = document.createElement("audio");
            a.canPlayType && (cc.pCapabilities.mp3 = "no" != a.canPlayType("audio/mpeg") && "" != a.canPlayType("audio/mpeg"), cc.pCapabilities.ogg = "no" != a.canPlayType('audio/ogg; codecs="vorbis"') && "" != a.canPlayType('audio/ogg; codecs="vorbis"'), cc.pCapabilities.wav = "no" != a.canPlayType('audio/wav; codecs="1"') && "" != a.canPlayType('audio/wav; codecs="1"'), cc.sound = cc.pCapabilities.mp3 || cc.pCapabilities.ogg || cc.pCapabilities.wav);
            this.m_initialized = !0
        }
    },
    init: function(a) {
        this.m_sRequestedFormat = a ? new String(a) : new String("mp3");
        this.m_activeAudioExt = this._getSupportedAudioFormat();
        return this.m_bSound_enable
    },
    _getSupportedAudioFormat: function() {
        var a = 0;
        if (cc.sound) {
            if ( - 1 != this.m_sRequestedFormat.search(/mp3/i) && cc.pCapabilities.mp3) return this.m_pSupportedFormat[a];
            if ( - 1 != this.m_sRequestedFormat.search(/ogg/i) && cc.pCapabilities.ogg || -1 != this.m_sRequestedFormat.search(/wav/i) && cc.pCapabilities.wav) return this.m_pSupportedFormat[++a];
            this.m_bSound_enable = !1;
            return - 1
        }
        this.m_bSound_enable = !1
    },
    preloadBackgroundMusic: function(a) {
        if (this.m_bSound_enable) {
            if ( - 1 == this.m_activeAudioExt) return;
            a = new Audio(a + "." + this.m_activeAudioExt);
            a.preload = "auto";
            a.addEventListener("canplaythrough",
            function(a) {
                this.removeEventListener("canplaythrough", arguments.callee, !1)
            },
            !1);
            a.addEventListener("error",
            function() {
                cc.Loader.shareLoader().onResLoadingErr()
            },
            !1);
            a.addEventListener("playing",
            function() {
                cc.s_SharedEngine.m_bBackgroundPlaying = !0
            },
            !1);
            a.addEventListener("pause",
            function() {
                cc.s_SharedEngine.m_bBackgroundPlaying = !1
            },
            !1);
            a.load();
            this.m_sBackground = a
        }
        cc.Loader.shareLoader().onResLoaded()
    },
    playBackgroundMusic: function(a, b) {
        this.m_sBackground && (this.m_sBackground.loop = b || !1, this.m_sBackground.play())
    },
    stopBackgroundMusic: function(a) {
        this.m_sBackground && (this.m_sBackground.pause(), this.m_sBackground.currentTime = 0, a && (this.m_sBackground = null))
    },
    pauseBackgroundMusic: function() {
        this.m_sBackground && this.m_sBackground.pause()
    },
    resumeBackgroundMusic: function() {
        this.m_sBackground && this.m_sBackground.play()
    },
    rewindBackgroundMusic: function() {
        this.m_sBackground && (this.m_sBackground.currentTime = 0, this.m_sBackground.play())
    },
    willPlayBackgroundMusic: function() {
        return ! 1
    },
    isBackgroundMusicPlaying: function() {
        return cc.s_SharedEngine.m_bBackgroundPlaying
    },
    getBackgroundMusicVolume: function() {
        return this.m_sBackground ? this.m_sBackground.volume: 0
    },
    setBackgroundMusicVolume: function(a) {
        this.m_sBackground && (this.m_sBackground.volume = 1 < a ? 1 : 0 > a ? 0 : a)
    },
    getEffectsVolume: function() {
        return this.m_EffectsVolume
    },
    setEffectsVolume: function(a) {
        this.m_EffectsVolume = 1 < a ? 1 : 0 > a ? 0 : a;
        if (this.m_pAudioList) for (var b in this.m_pAudioList) this.m_pAudioList[b].volume = this.m_EffectsVolume
    },
    playEffect: function(a, b) {
        var c = this.getEffectList(a);
        c && (c.currentTime = 0, c.loop = b || !1, c.play());
        return a
    },
    pauseEffect: function(a) {
        this.m_pAudioList[a] && this.m_pAudioList[a].pause()
    },
    pauseAllEffects: function() {
        if (this.m_pAudioList) for (var a in this.m_pAudioList) this.m_pAudioList[a].pause()
    },
    resumeEffect: function(a) {
        this.m_pAudioList[a] && this.m_pAudioList[a].play()
    },
    resumeAllEffects: function() {
        if (this.m_pAudioList) for (var a in this.m_pAudioList) this.m_pAudioList[a].play()
    },
    stopEffect: function(a) {
        this.m_pAudioList[a] && (this.m_pAudioList[a].pause(), this.m_pAudioList[a].currentTime = 0)
    },
    stopAllEffects: function() {
        if (this.m_pAudioList) for (var a in this.m_pAudioList) this.m_pAudioList[a].pause(),
        this.m_pAudioList[a].currentTime = 0
    },
    preloadEffect: function(a) {
        if (this.m_bSound_enable) {
            if ( - 1 == this.m_activeAudioExt) return;
            var b = new Audio(a + "." + this.m_activeAudioExt);
            b.preload = "auto";
            b.addEventListener("canplaythrough",
            function(a) {
                this.removeEventListener("canplaythrough", arguments.callee, !1)
            },
            !1);
            b.addEventListener("error",
            function() {
                cc.Loader.shareLoader().onResLoadingErr()
            },
            !1);
            b.load();
            this.m_pAudioList[this.getEffectName(a)] = b
        }
        cc.Loader.shareLoader().onResLoaded()
    },
    unloadEffect: function(a) {
        delete this.m_pAudioList[this.getEffectName(a)]
    },
    getEffectName: function(a) {
        return a
    },
    getEffectList: function(a) {
        return null != this.m_pAudioList ? this.m_pAudioList[a] : null
    },
    end: function() {
        this.stopBackgroundMusic();
        this.stopAllEffects()
    }
});
cc.AudioManager.sharedEngine = function() {
    cc.s_SharedEngine || (cc.s_SharedEngine = new cc.AudioManager);
    return cc.s_SharedEngine
};