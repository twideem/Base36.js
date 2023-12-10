class Base36
{
    static encode(x)
    {
        let g='';
        for(let n=0;n<x.length;n+=52) g+=parseInt('1'+x.slice(n,n+52),2).toString(36);
        return g;
    }

    static decode(x)
    {
        let g='';
        for(let n=0;n<x.length;n+=11) g+=parseInt(x.slice(n,n+11),36).toString(2).slice(1);
        return g;
    }

    static atob(x)
    {
        return this.encode(x.join(''));
    }

    static btoa(x)
    {
        return this.decode(x).split('');
    }
}