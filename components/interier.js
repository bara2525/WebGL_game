export function GenerateStairs() {
  return `

    `;
}
export function InteriorFirstFloor() {
  return `

        <a-cylinder id="portal" portal="destination: map-floor1.html; subject: character" position="-30.4 0 -66" radius="5" height="5" material=" opacity: 0.3; transparent: true; side: both" visible="false" ></a-cylinder>
        <a-box  position="34 0 -54" scale="15 15 9" rotation="0 -90 0" gltf-model="#Rug Square"></a-box>
        
        

        <a-box  position="24 0 -67" scale="9 9 9" rotation="0 -90 0" gltf-model="#Lamp Round Floor" ></a-box>
        <a-box box position="23.472 3.520 -68.5" scale="3.5 8.0 1.32" rotation="0 -90 0" static-body visible="false"></a-box>
        
        <a-box id="tv" position="34 2.7 -60" scale="9 9 9" rotation="0 90 0" gltf-model="#Television">
          <a-text 
          value=". . . 4" 
          position="0.155 0.126 -0.050" 
          rotation="0 180 0" 
          width="2" 
          color="#EEE" 
          align="center">
        </a-text>
        </a-box>
        
        <a-box box id="tv" position="34 3.477 -60.083" scale="1.374 6.623 6.638 " rotation="0 0 0" static-body visible="false"></a-box>
        
        <a-box  position="32 0 -63" scale="9 9 9" rotation="0 90 0" gltf-model="#Cabinet Television Doo" ></a-box>
        <a-box box id="cabinet" position="32 0 -60" scale="8.713 6.492 2.471" rotation="0 -90 0" static-body visible="false"></a-box>
         
        <!-- Other furniture entities -->
        
        <a-box position="33 0 -55" scale="9 9 9" rotation="0 0 0" gltf-model="#Lounge Design Chair" ></a-box>
        <a-box box id="chair" position="29.6 0 -68.061" scale="4.196 3.549 7.295" rotation="0 -90 0" static-body visible="false"></a-box>
        
        <a-box position="26 0 -66" scale="9 9 9" rotation="0 180 0" gltf-model="#Lounge Design Chair" ></a-box>
        <a-box box id="chair2" position="29.887 0.864 -52.954" scale="3.651 4.247 7.311" rotation="0 -90 0" static-body visible="false"></a-box>
        
        
        
        <a-box wall position="18 7.3  -62" rotation="0 270 0" scale="13 14.6 1" static-body ></a-box>
        <a-box wall  position="18 7.3 -31.46" rotation="0 270 0" scale="11.3884 14.6  1" static-body  ></a-box>
        <a-box wall position="18 7.3 -46" rotation="0 270 0" scale="6 14.6 1" static-body ></a-box>
        <a-box wall position="26.403 7.3 -47.39" rotation="0 180 0" scale="16.897 14.6 1"  static-body></a-box>
        
        
        
        
        <!--        right lower corner-->
        <a-box  position="28 0.3 -42.7" scale="9 9 9" rotation="0 45 0"  gltf-model="#Rug Rounded" ></a-box>
        <a-box  position="34.6 7.3 -34" scale="3 4 3" rotation="0 180 0"  gltf-model="#Picture frame" >
         <a-text 
          value=". 1 . ." 
          position="0.068 0 -0.001" 
          rotation="0 90 0" 
          width="2" 
          color="#EEE" 
          align="center">
        </a-text>

        </a-box>
        
        <a-box position="30.391 0 -29.89" scale="9 9 9" rotation="0 0 0"  gltf-model="#Lounge Sofa Long" ></a-box>
        <a-box box  position="25.9 1.503 -28.1" scale="3.651 5.271 8.829" rotation="0 -90 0" static-body visible="false"></a-box>
        
        <a-box position="27.991 0 -35.15" scale="9 9 9" rotation="0 150 0"  gltf-model="#Lounge Chair" ></a-box>
        <a-box box position="30.656 -0.238 -35.779" scale="4.655 8.825 3.951" rotation="0 150 0" static-body visible="false"></a-box>
        <a-box box  position="24.194 2.503 -29.325" scale="3.915 3.763 8.82" rotation="0 180 0" static-body visible="false"></a-box>

        <a-box position="23 2.5 -47" scale="9 9 9" rotation="0 0 0"  gltf-model="#Speaker Small" ></a-box>
        <a-box box  position="22.2 3.73 -46.4" scale="2 3 2" rotation="0 0 0" static-body visible="false"></a-box>
        
        <a-box position="27 2.5 -47" scale="9 9 9" rotation="0 0 0"  gltf-model="#Speaker Small"></a-box>
        <a-box box   position="26.4 3.73 -46.6" scale="2 3 2" rotation="0 0 0" static-body visible="false"></a-box>
        
        
        <a-box position="19.662 0 -27.470" scale="9 9 9" rotation="0 -90 0"  gltf-model="#Potted Plant" ></a-box>
        <a-box box  position="19.662 0 -27.470" scale="3 8 3" rotation="0 -90 0" static-body visible="false"></a-box>
        
        <a-box position="32.99 0 -27.470" scale="9 9 9" rotation="0 -90 0"  gltf-model="#Potted Plant" ></a-box>
        <a-box box   position="32.99 0 -27.470" scale="3 8 3" rotation="0 -90 0" static-body visible="false"></a-box>
        
        <a-box position="21 0 -45" scale="9 9 9" rotation="0 180 0"  gltf-model="#Cabinet Television Doo" ></a-box>
        <a-box box i  position="24.6 1.942 -46.2" scale="7.4 1.8 2.8" rotation="0 180 0" static-body visible="false"></a-box>
        
        <!--        kitchen corner-->
<!--        <a-box wall  position="-6.94 7.3 -50.1" rotation="0 90 0" scale="11 14 1" static-body  ></a-box>-->
        <a-box wall position="-21.124 7.3 -49.6" rotation="0 180 0" scale="28.332 14.6 1" static-body ></a-box>
        
        <a-box position="15 0 -70" scale="9 9 9" rotation="0 90 0"  gltf-model="#Kitchen Fridge" ></a-box>
        <a-box position="13.8 0 -66" scale="9 9 9" rotation="0 90 0"  gltf-model="#Kitchen Sink" ></a-box>
        <a-box position="13.78 0 -62" scale="9 9 9" rotation="0 90 0"  gltf-model="#Kitchen Stove Electric" ></a-box>
        <a-box   position="15.969 6 -65.7" scale="9 9 9" rotation="0 90 0"  gltf-model="#Kitchen Cabinet Upper" >
        <a-text 
          value="3 . . ." 
          position="-0.725 0.126 -0.01" 
          rotation="0 180 0" 
          width="2" 
          color="#EEE" 
          align="center">
        </a-text>
        </a-box>
        
        <a-box  position="10 3 -56.9" scale="15.8 1.8 2.6" rotation="-90 0 0" static-body visible="false"></a-box>
         <a-box  position="6.7 2.2 -53.7" scale="6.1 1.8 2.6" rotation="-90 0 0" static-body visible="false"></a-box>
         <a-box  position="15.6 2.2 -63.4" scale="3.6 4 11.6" rotation="0 0 0" static-body visible="false"></a-box>
        <a-box position="15.969 6 -61.7" scale="9 9 9" rotation="0 90 0"  gltf-model="#Kitchen Cabinet Upper" ></a-box>
        <a-box position="18 0 -58" scale="9 9 9" rotation="0 0 0"  gltf-model="#Kitchen Bar"></a-box>
        <a-box position="16 3 -58" scale="9 9 9" rotation="0 180 0"  gltf-model="#Kitchen Blender"></a-box>
        <a-box position="14 0 -58" scale="9 9 9" rotation="0 0 0"  gltf-model="#Kitchen Bar" ></a-box>
        <a-box position="10 0 -58" scale="9 9 9" rotation="0 0 0"  gltf-model="#Kitchen Bar" ></a-box>
        <a-box position="6 0 -58" scale="9 9 9" rotation="0 0 0"  gltf-model="#Kitchen Bar" ></a-box>
        <a-box position="10 0 -55" scale="9 9 9" rotation="0 0 0"  gltf-model="#Stool Bar Square" ></a-box>
        <a-box position="6 0 -55" scale="9 9 9" rotation="0 0 0"  gltf-model="#Stool Bar Square" ></a-box>
        
        
        <a-box position="6 0 -55" scale="9 9 9" rotation="0 0 0"  gltf-model="#Stool Bar Square" ></a-box>
        <a-box position="6 0 -55" scale="9 9 9" rotation="0 0 0"  gltf-model="#Stool Bar Square" ></a-box>
        <a-box position="6 0 -55" scale="9 9 9" rotation="0 0 0"  gltf-model="#Stool Bar Square" ></a-box>
        <a-box position="6 0 -55" scale="9 9 9" rotation="0 0 0"  gltf-model="#Stool Bar Square" ></a-box>
        
        
        
        
        <!--        dining room -->
        <a-box position="-17 0 -58" scale="9 9 9" rotation="0 0 0"  gltf-model="#Chair" ></a-box>
        <a-box position="-15 0 -58" scale="9 9 9" rotation="0 0 0"  gltf-model="#Chair" ></a-box>
        <a-box position="-19 0 -62" scale="9 9 9" rotation="0 180 0"  gltf-model="#Chair" ></a-box>
        <a-box position="-15 0 -62" scale="9 9 9" rotation="0 180 0"  gltf-model="#Chair" ></a-box>
        
        <a-box position="-14 0 -62" scale="9 9 9" rotation="0 0 0"  gltf-model="#Table" ></a-box>
        <a-box id="D" position="-17.8 1.4 -59.6" scale="8.4 4.1 7" rotation="0 0 0" static-body visible="false"></a-box>
        
        
        <!--        bedroom corner-->
        <a-box position="-7 0 -36" scale="9 9 9" rotation="0 0 0"  gltf-model="#Bed Double" >
        <a-box position="-0.498 0 0.505" scale="1 0.5 1" rotation="0 0 0" static-body visible="false"></a-box>
</a-box>
        <a-box position="-21 0 -28" scale="9 9 9" rotation="0 0 0"  gltf-model="#Bookcase Closed Doors" >
        <a-box position="0 0.4 0" scale="0.5 1 0.5" rotation="0 0 0" static-body visible="false"></a-box>
</a-box>
        <a-box position="-28 0 -34" scale="9 9 9" rotation="0 90 0"  gltf-model="#Bookcase Closed Wide" >
        <a-box position="0 0.4 0" scale="0.5 1 0.5" rotation="0 0 0" static-body visible="false"></a-box>
</a-box>
        <a-box position="-17 0 -48" scale="9 9 9" rotation="0 0 0"  gltf-model="#Coat Rack Standing" >
        <a-box position="-0.48 0.249 0" scale="1.3 0.7 0.500" rotation="0 0 0" static-body visible="false"></a-box></a-box>
        <a-box position="-19 0 -40" scale="9 9 9" rotation="0 270 0"  gltf-model="#Desk Corner" >
        <a-box position="-0.461 0.3 0.82" scale="1 0.3 0.603" rotation="0 0 0" static-body visible="false"></a-box>
</a-box>
        <a-box position="-25 3.5 -42" scale="9 9 9" rotation="0 270 0"  gltf-model="#Computer Screen" >
        <a-light type="point" color="#0084ff" intensity="5" distance="3" position="-0.194 0.195 -0.053" ></a-light>
        <a-text 
          value=". . 8 ." 
          position="-0.24 0.1 0.022" 
          rotation="0 180 0" 
          width="2" 
          color="#EEE" 
          align="center">
        </a-text>
        </a-box>
        <a-box position="-16 0.3 -39" scale="9 9 9" rotation="0 0 0"  gltf-model="#Rug Round" ></a-box>
        <a-box position="-19 0 -44" scale="9 9 9" rotation="0 90 0"  gltf-model="#Chair" >
        <a-box position="-0.102 0.4 0.106" scale="0.2 1 0.2" rotation="0 0 0" static-body visible="false"></a-box>
</a-box>
        
        
        
        

        <a-box position="-25.8 3.4 -47.1" scale="9 9 9" rotation="0 90 0"  gltf-model="#Books" >
        <a-box position="0 0 0" scale="1 1 1" rotation="0 0 0" static-body visible="false"></a-box>
        </a-box>
        
        <a-box position="15 0 -30" scale="9 9 9" rotation="0 90 0"  gltf-model="#Bench Cushion" >
        <a-box position="0 0 0" scale="0.5 1 0.5" rotation="0 0 0" static-body visible="false"></a-box>
</a-box>
        
        <a-box position="15 0 -34" scale="9 9 9" rotation="0 90 0"  gltf-model="#Bench Cushion" >
        <a-box position="0 0 0" scale="0.5 1 0.5" rotation="0 0 0" static-body visible="false"></a-box>
</a-box>

        <a-box position="3.7 15 -46" scale="9 9 9" rotation="0 90 0"  gltf-model="#Ceiling Fan" ></a-box>
        
        <a-box position="14 7.5 -26" scale="9 9 9" rotation="0 0 0" gltf-model="#Coat Rack">
        <a-box position="-0.043 0 0.538" scale="1.7 1.525 1" rotation="0 0 0" static-body visible="false">
</a-box>



        
        
        <a-box position="18 10 -46" scale="9 9 9" rotation="0 90 0"  gltf-model="#Lamp Wall" >
        <a-light type="point" color="#FFF000" intensity="5" distance="3" position="0 0 -0.025" ></a-light>
        </a-box>
        
        <a-box position="18 10 -30" scale="9 9 9" rotation="0 90 0"  gltf-model="#Lamp Wall" >
        <a-light type="point" color="#FFF000" intensity="5" distance="3" position="0 0 -0.025" ></a-light>
                   
</a-box>
        <a-box position="6 10 -70" scale="9 9 9" rotation="0 180 0"  gltf-model="#Lamp Wall" >
        <a-light type="point" color="#FFF000" intensity="5" distance="3" position="0 0 -0.025" ></a-light>
</a-box>
        
        <a-box position="-34 8 -37" scale="9 9 9" rotation="0 270 0"  gltf-model="#Wall_Art_01" ></a-box>
        <a-box position="-1 8 -69.7" scale="9 9 9" rotation="0 180 0"  gltf-model="#Wall_Art_02" ></a-box>
        <a-box position="-5.5 8 -31" scale="9 9 9" rotation="0 270 0"  gltf-model="#Wall_Art_03" ></a-box>

        

   


   `;
}
export function Exterior() {
  return `
  
     
     <a-box  position="333 0 -40" scale="100 100 100" rotation="0 270 0"  gltf-model="#skyline" ></a-box>
     <a-box  position="-150 0 -285" scale="120 120 120" rotation="0 20 "  gltf-model="#skyline" ></a-box>
     <a-box  position="277 9 -291" scale="120 120 120" rotation="0 -17 0"  gltf-model="#skyline" ></a-box>

     
     
     <a-box  position="-356 11 80" scale="100 100 100" rotation="0 90 0"  gltf-model="#nature" ></a-box>
     
     <a-box  position="9.5 0.7 3.5" scale="4 4 7" rotation="0 0 0"  gltf-model="#bush" static-body></a-box>
     <a-box  position="9.5 0.7 7.5" scale="4 4 7" rotation="0 0 0"  gltf-model="#bush" static-body></a-box>
     <a-box  position="9.5 0.7 11.5" scale="4 4 7" rotation="0 0 0"  gltf-model="#bush" static-body></a-box>
     <a-box  position="9.5 0.7 15.5" scale="4 4 7" rotation="0 0 0"  gltf-model="#bush" static-body></a-box>
     <a-box  position="9.5 0.7 19.5" scale="4 4 7" rotation="0 0 0"  gltf-model="#bush" static-body></a-box>
     <a-box  position="9.5 0.7 24.5" scale="4 4 7" rotation="0 0 0"  gltf-model="#bush" static-body></a-box>
     <a-box  position="9.5 0.7 29.5" scale="4 4 7" rotation="0 0 0"  gltf-model="#bush" static-body></a-box>
     <a-box  position="9.5 0.7 33.5" scale="4 4 7" rotation="0 0 0"  gltf-model="#bush" static-body></a-box>
     
     
     <a-box  position="-9.5 0.7 3.5" scale="4 4 7" rotation="0 0 0"  gltf-model="#bush" static-body ></a-box>
     <a-box  position="-9.5 0.7 7.5" scale="4 4 7" rotation="0 0 0"  gltf-model="#bush" static-body></a-box>
     <a-box  position="-9.5 0.7 11.5" scale="4 4 7" rotation="0 0 0"  gltf-model="#bush" static-body ></a-box>
     <a-box  position="-9.5 0.7 15.5" scale="4 4 7" rotation="0 0 0"  gltf-model="#bush" static-body ></a-box>
     <a-box  position="-9.5 0.7 19.5" scale="4 4 7" rotation="0 0 0"  gltf-model="#bush" static-body></a-box>
     <a-box  position="-9.5 0.7 24.5" scale="4 4 7" rotation="0 0 0"  gltf-model="#bush" static-body ></a-box>
     <a-box  position="-9.5 0.7 29.5" scale="4 4 7" rotation="0 0 0"  gltf-model="#bush" static-body></a-box>
     <a-box  position="-9.5 0.7 33.5" scale="4 4 7" rotation="0 0 0"  gltf-model="#bush" static-body ></a-box>
     
     
     <a-box  position="17.5 -0.228 -8.4" scale="10 4 7" rotation="0 0 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="27.5 -0.228 -8.4" scale="10 4 7" rotation="0 0 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="37.5 -0.228 -8.4" scale="10 4 7" rotation="0 0 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="47.5 -0.228 -8.4" scale="10 4 7" rotation="0 0 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="64.5 -0.228 -11" scale="10 4 7" rotation="0 90 0"  gltf-model="#floor_tile" ></a-box>
     
     <a-box  position="-17.5 -0.228 -8.4" scale="10 4 7" rotation="0 0 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="-27.5 -0.228 -8.4" scale="10 4 7" rotation="0 0 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="-37.5 -0.228 -8.4" scale="10 4 7" rotation="0 0 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="-47.5 -0.228 -8.4" scale="10 4 7" rotation="0 0 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="-64.5 -0.228 -11" scale="10 4 7" rotation="0 90 0"  gltf-model="#floor_tile" ></a-box>


     <a-box  position="0 -0.228 -6.7" scale="10 4 7" rotation="0 90 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="0 -0.228 6.7" scale="10 4 7" rotation="0 90 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="0 -0.228 11.7" scale="10 4 7" rotation="0 90 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="0 -0.228 16.7" scale="10 4 7" rotation="0 90 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="0 -0.228 21.7" scale="10 4 7" rotation="0 90 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="0 -0.228 26.7" scale="10 4 7" rotation="0 90 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="0 -0.228 31.7" scale="10 4 7" rotation="0 90 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="0 -0.228 36.7" scale="10 4 7" rotation="0 0 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="10.6 -0.228 43.6" scale="10 4 7" rotation="0 0 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="-9 -0.228 43.85" scale="10 4 7" rotation="0 0 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="21.7 -0.228 66.7" scale="10 4 7" rotation="0 90 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="-23 -0.228 66.7" scale="10 4 7" rotation="0 90 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="21.7 -0.228 47" scale="10 4 7" rotation="0 90 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="-23 -0.228 47" scale="10 4 7" rotation="0 90 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="21.7 -0.228 86.7" scale="10 4 7" rotation="0 90 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="-23 -0.228 86.7" scale="10 4 7" rotation="0 90 0"  gltf-model="#floor_tile" ></a-box>
     <a-box  position="-0.488 -0.228 98.8" scale="29 4 20" rotation="0 0 0"  gltf-model="#floor_tile"></a-box>

     
     
     
     
     
     
     <a-box  position="-20 0 -19" scale="8 8 8" rotation="0 0 0"  gltf-model="#planter" static-body></a-box>
     <a-box  position="20 0 -19" scale="8 8 8" rotation="0 0 0"  gltf-model="#planter" static-body></a-box>
     <a-box  position="7.6 0 -8.3" scale="10 10 10" rotation="0 90 0"  gltf-model="#fence" ></a-box>
     <a-box  position="-8 0 -8.3" scale="10 10 10" rotation="0 90 0"  gltf-model="#fence" ></a-box>
     

     <a-box  position="-0.9 5 66" scale="20 20 20" rotation="0 90 0"  gltf-model="#fountain" static-body></a-box>
     
     
     <a-box position="120 0 60" scale="30 30 30" rotation="0 270 0"  gltf-model="#building_1" ></a-box>
     <a-box position="120 0 120" scale="30 30 30" rotation="0 270 0"  gltf-model="#building_2" ></a-box>
     <a-box position="120 0 180" scale="30 30 30" rotation="0 270 0"  gltf-model="#building_3" ></a-box>
     
     <a-box position="56 0 240" scale="30 30 30" rotation="0 180 0"  gltf-model="#building_4" ></a-box>
     <a-box position="-2 0 240" scale="30 30 30" rotation="0 180 0"  gltf-model="#building_5" ></a-box>
     <a-box position="-62 0 240" scale="30 30 30" rotation="0 180 0"  gltf-model="#building_6" ></a-box>
     
     <a-box position="-120 0 60" scale="30 30 30" rotation="0 90 0"  gltf-model="#building_1" ></a-box>
     <a-box position="-120 0 120" scale="30 30 30" rotation="0 90 0"  gltf-model="#building_7" ></a-box>
     <a-box position="-120 0 180" scale="30 30 30" rotation="0 90 0"  gltf-model="#building_4" ></a-box>

    `;
}
