AFRAME.registerComponent('toggle-light', {
  init: function() {
    this.data.isOn = false;
  },
  toggle: function() {
    if (this.data.isOn) {
      this.el.components.light.light.color.set("#000");
      this.data.isOn = false
    } else {
      this.el.components.light.light.color.set("#fff1cc");
      this.data.isOn = true
    }
  }
});

AFRAME.registerComponent('toggle-lamp-materials', {
  init: function () {
    this.data.isOn = false;
    // Wait for model to load.
    this.el.addEventListener('model-loaded', () => {
      // Grab the mesh / scene.
      const obj = this.el.getObject3D('mesh');
      // Go over the submeshes and modify materials we want.

      this.emissiveNodes = []
      obj.traverse(node => {
        if (node.name.indexOf('lamp') !== -1 || node.name.indexOf('lightbulb') !== -1) {
          this.emissiveNodes.push(node)
          node.material.emissive.set('#000');
        }
      });
    });
  },

  toggleEmissiveNodes: function() {
    if (this.data.isOn) {
      this.data.isOn = false;
      this.emissiveNodes.forEach(node => {
        node.material.emissive.set('#000');
      });
    }else{
      this.data.isOn = true;
      this.emissiveNodes.forEach(node => {
        node.material.emissive.set('#fff');
      });
    }
  }
});