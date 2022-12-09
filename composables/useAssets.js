export default () => {
  const svgs = import.meta.globEager('../assets/icon/*.svg')
  // const pngs = import.meta.globEager('../assets/img/*.png')
  // const newsGroup = import.meta.globEager(`../assets/img/news/*.png`)

  const icon = (pathArray) => {
    const temp = {}
    pathArray.forEach((path) => {
      temp[path] = svgs[`../assets/icon/${path}.svg`].default
    })
    return temp
  }


  // const png = (pathArray) => {
  //   const temp = {}
  //   pathArray.forEach((path) => {
  //     temp[path] = pngs[`../assets/img/${path}.png`].default
  //   })
  //   return temp
  // }

  // const pngGroup = (group, groupItems, pathArray) => {
  //   const temp = {
  //     [group]: {}
  //   }
  //   pathArray.forEach((path) => {
  //     temp[group][path] = groupItems[`../assets/img/${group}/${path}.png`].default
  //   })
  //   return temp
  // }

  return {
    ...icon([
      'email',
      'instagram',
      'facebook',
      'phone'
    ]),
    // ...png([
    //   'logo',
    //   'seal',
    //   'banner',
    //   'mainTop',
    //   'mainTopFence',
    //   'mainBottom',
    //   'slogan',
    //   'lineHead',
    //   'title',
    //   'more',
    //   'mainBody',
    //   'mainBottomCircle',
    //   'footerTop',
    //   'footerBottom',
    //   'footerLogo'
    // ]),
    // ...pngGroup('dvs', dvsGroup, ['dvs1', 'dvs2', 'dvs3'])
  }
}
