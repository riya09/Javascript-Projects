var canvas = document.getElementById('canvas'),
    ctx=canvas.getContext('2d'),
    w=canvas.width=500,
    h=canvas.height=500;
function generate_mandelbrot(cx,cy,iter){
    var a=0,b=0,aa=0,bb=0,ab=0,j=iter;
    while(j>0 && aa+bb<=16){
        aa=a*a-b*b;
        bb=2*a*b;
        a=aa+cx;
        b=bb+cy;
        j--;
    }
    return iter-j;
}
var imgData=ctx.createImageData(w,h);
for (var i=0;i<w;i++){
    for(var j=0;j<h;j++){
        var x = -2 + (2 - (-2)) * i/(w - 1);
        var y = -2 + (2 - (-2)) * j/(h - 1);
        var it=generate_mandelbrot(x,y,1000);
        var pix=4*(w*j+i);
        c=3*Math.log(it)/Math.log(1000);
        if(it==1000){
            imgData.data[pix+0]=160;
            imgData.data[pix+1]=10;
            imgData.data[pix+2]=0;
        }
        else if(c>2){
            imgData.data[pix+0]=0;
            imgData.data[pix+1]=230;
            imgData.data[pix+2]=0;
        }
        else if(c<1){
            imgData.data[pix+0]=40;
            imgData.data[pix+1]=10;
            imgData.data[pix+2]=44;
        }
        else if(c<4){
            imgData.data[pix+0]=40;
            imgData.data[pix+1]=0;
            imgData.data[pix+2]=154;
        }

        imgData.data[pix+3]=255;
    }
}
ctx.putImageData(imgData,0,0);

