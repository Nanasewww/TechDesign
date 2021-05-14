Page({
  data: {
    showDetails: false,
    showCard: false,
    showDest: false,
    showMask: false,
    showRandom: true,
    showBottom: true,
    showTag: false
  },
  onButtomDetailsTap() {
    this.setData({
      showDetails: true,
      showRandom: !this.data.showRandom,
      showTag: !this.data.showTag,
    });
  },
  onButtomCardTap() {
    this.setData({
      showCard: true,
      showRandom: !this.data.showRandom,
      showTag: !this.data.showTag,
    });
  },
  onPopupClose() {
    this.setData({
      showDetails: false,
      showCard: false,
      showRandom: !this.data.showRandom,
      showTag: !this.data.showTag,
    });
  },

  onShowDestTap() {
    this.setData({
      showDest: !this.data.showDest,
      showRandom: !this.data.showRandom,
      showBottom: !this.data.showBottom
    });
  },
  onDestMaskClick() {
    this.setData({
      showDest: false,
    });
  },
  itemTap1(e) {
    my.alert({
      content: `显示路线`,
    });
  },
  itemTap2(e) {
    my.alert({
      content: `跳转小程序点单`,
    });
  },
});
