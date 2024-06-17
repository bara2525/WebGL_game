export function GenerateCamera() {
  return `
    <a-entity gltf-model="#camera" position="5 11.8 -19" scale="0.5 0.5 0.5" rotation="0 70 20" material="color: green" static-body></a-entity>
    `;
}

export function GenerateSafe() {
  position = "0 3 -8";
  rotation = "90 0 0";
  return `
    <a-entity gltf-model="#safe" position=${position} rotation=${rotation} static-body></a-entity>
    `;
}

export function GenerateKey() {
  return `
    <a-entity collectible id="keys" gltf-model="#key" position="0 3 100" rotation="90 0 0" material="color: green" static-body></a-entity>
    `;
}

export function GenerateGun() {
  return `
    <a-entity collectible id="guns" gltf-model="#Pistol" position="0 3 110" rotation="0 0 0" static-body></a-entity>
    `;
}

export function GenerateBomb() {
  return `
    <a-entity collectible id="bombs" gltf-model="#Bomb" position="0 3 -8" rotation="0 0 0" static-body></a-entity>
    `;
}
export function GeneratePliers() {
  return `
    <a-entity collectible id="pliers" gltf-model="#Plier" position="0 3 -4" rotation="0 90 0" scale="0.05 0.05 0.05" static-body></a-entity>
    `;
}
