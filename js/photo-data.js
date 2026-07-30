/* Photography albums — Google Drive-backed thumbnails + preview embeds.
   Each id is a Drive file id; thumbnails and popups are built from these
   via the Drive thumbnail/preview endpoints in initPhotoAlbums() (main.js). */
const PHOTO_ALBUMS = {
  africa: {
    label: 'Africa',
    ids: [
      '1ZUG_G_xZArKkKdlqiQoVJbf9Bzt1uOqb','1AlugtuPGlbbtZ-aAk6kGpGE3JsqjJpaJ','1qpNhZD0REdel4iH1Q5oJwa-gQzYGFc1s',
      '1FPRKFljk14mavNE6bCA7CLaeENqqNeJy','17sFWA4AciwkYn2928gDmVPl0xaQejNVR','1_yaAC3siCjQNBZG_K7ADMhC43CRBmSOa',
      '1usW7GFz15AmJogeRyW-Nf89FBErNd_1F','1v2RTrWA6pIJxHz6givz3gTjRrfctMdoD','1hyevtGl2OizXFjwFM3byeJwhqFJM9RCY',
      '1Ahbqbgb0l-1IkwhahgVjrWspuK2ASh1U'
    ]
  },
  caravan: {
    label: 'Caravan Park',
    ids: [
      '1dDImP3ZiT1lpHhRIp4gFnIP9a2w_KC0a','1mNip9l9v9-13w27-VkUUZwCXkjNT3u10','1n33_Zj-bK-mqWmA4m0ogtD1Kl-v4RyGz',
      '1QaXnJ7aX4kuiIknRMgIl-LrzW9MczLw_','1LREJKd49abSBTVlSuClLKQktaQoEJ77K','1-V4RgSIhVsuBHs_PVxUfpRln_3pvpA5x',
      '1aiwaxytIehCVWhXhTTFP35KiZ45cFZIo','1fAbJe299cA-PZ1kugfl204IpiPHFGRkv','14FtR4MMwuR9YYTd-utt1qLad8ZDbwT4K',
      '1MLuNxIy0plpJ0e3f_r02pm_9IV4j5Gv9','1ihPtIvrkmr-mydrkcuGmW2BGaNZvb-A6','1m4xZOTGHuxbBLjb7EyM3x-Lswme6TiWS',
      '1cQkKQdEibJyEZLIh_QZWQhBbY6MbI_Wh','1kjMMeC2pQL-d-M7dS9bkheGOQub225zs','1xfe6GzqgIqm9QfW0fJSuxuq4gJ5GHLZl',
      '1twb26rF2IWWvOsk0wFKTPWWqbCa6Nkhl','1HSG6Au7fJnN8SGVGFaJjmCipQFo4P20I','1tk8EJeUlh4zIst9APkgpiE7Ij7Ajkfay',
      '1xiJioh8XA2-6OQXOZrBqFZGe5HZ0sf1d','1I4IW198B7e0N_cQyBx8Hf3LfQXdgimr6','14CGdNdA0SXbBKrJej_97rYJCQVj24qs1',
      '1NO_AbZz1yAGiR8dGdNAf5fnLDUvlpadq','1GGtrrSXfgLoBo_urAoT8qmWU2ZyQ-Fxy','17YRJUkTT7-6MxMTmPw8J8DGJGXxfaBOQ',
      '1Z8ARGbyC8PlotR6tSsldTt4g0cDjlY8H','1IPY89LuMcC1mWnxECcJQYIkDQaZmx6J3','1x5kdAQP22FHAG-jTehibfbolVvRDxbYI',
      '1VFYw_uF50X779_iFpjZxxocU2jRLx4Sn','1BzHWlh2fvlVJeIOP5FJADEZQwdY58V9I','155qXla2wDYts48P3zvCf3yRNQz3ga0mY',
      '1D1Zdh1IBNxnyT_GXGvKtNI6kxaM9aRMq','1-gfzA92x4vz9DIz8XAGnWai2dxoQky99','10TwvLslTXMrnAdqMWX9c9SCylndHSb9p',
      '1nHuUKenewYchMbMCEVbl-fEkDKV9B5fa','1hN4rdd4Ef_9JfpQ98DVNbb5rJDxa0ZgV','1W1qCyp8-l3uG2-bTedn4WWHS971dTBt4',
      '1MLgV_uv90iOIjwuaRhMQkQtqrqWcnz8z','1Xia9_RuaDkVwiFS9xUL73Bh8PPIeSjIX','1LFonl15BVC51i9_e5GQQzWkNpdfowEMH',
      '11hOsGmSZChXTovkVeWyo46fXcm4cRind','1IO3zv0G_KkQ0Ac4y69Gu6zo3SZ3Uy-Si','1D2fjZ-79z6hHCmhqKvtPIBzaoE9NPi7n',
      '1jKIOhP57ZvTOwfpvW1nwMIvA_DXyrEOv','1an3gogaEw_9kqjXO3nCav1iyVAIpXK0Z'
    ]
  },
  bungarribee: {
    label: 'Bungarribee',
    ids: [
      '1f_-syvxF8lalmF_f6fRiLDl8nenfkNRS','1bOZcOlv3goo2GNqxM6sRpEPj8s37tbwt','159oJnqFZ1l2X9I9nElAj4ntwSb9kS65g',
      '1j14vU3SaxuXiVeETlbExvs1mIVTlq5mb','1moCYrsewISuNKuIUr7nPelgbrsZbQ9VS','1Y7IVzUKN8KEp6CsxEwdNqYO9IWmbXSxr',
      '1Epn040LZbgbTkeWGenvoExFc5yoogJ65','1xjNoUHwHPPmw15nPlzAe16_-apD6S0l-','1Wo5AOxpICFK-XRpZU_MPV96MjgArmouL',
      '1d8LrXcuqZ9kn51wZGGOSlNhW_F6VTn2P','19YXs6shwKk9WdkSZYG7JJXcKqLn0T6oF','1LSsDVGpZS23F770IYXbjqcSdRAdkXXrm',
      '1nJrxkmUiqtr6UsJdZmMtQPjrhy2Fd-gB','1D2gIPAkG75qKR6fF06NwCT1iHmbpiWxP','1dS2v92oFYSdDmgztHG34gmo4CFibZDft',
      '1A1dJWrTOcNCwHQO62xe0qYhPGiQ-Izce','1BgCs9V9PzsxNaXDNESzsMWwjZm0dOb8W','1UoL5vyZJjRnUACjeZUAYSp4oAcYTwMsI'
    ]
  },
  garden: {
    label: 'Garden',
    ids: [
      '1YykvRs8MlAyONcASBOy-Lw8LgUzcVK78','1ZOupP8GVX0U-QxxHM9Dyjr-aV4DTaf3N','1xbr6ohGVWR2qlD2m0BOCmiYd_AN_Wh0D',
      '1KH-nRXrVfgS-g0jZC6BgXsXUGUJWDD8i','1RCmaaZ21xo7nApRp1HwtRLQjwfoWz6yn','187MNdHEIxegzLdAWmuFVHMASwzt0Xt-o',
      '1CJ4Ctvo0nep7RWfUHgRS7zcnY8MxGtiQ','1zFqVKx0XTKdP8AnRTdhGijuuriiaLlqM','1mu-NN7C9DPdQjk7RFLtUo4Pzc2sGsxfJ',
      '17AyMGN9e3bVH4GV_kNYobtb2D84WgVS-','14ov_OLbQ5j4hi05k8aFygk4pNnNUvHsz','1Awd3PRI4-Nis0KFtuOjUGuTtVpWQ-K_Z',
      '17lkeS6FRxH_qjidjdP6etJyNSt2GhOy2','1Rii31FFIQsSSWbrv4Bfc7hU1TvEnW2Hz','1JU2FYP7V7qc5FZQeI5Gla2v9XYthYsif',
      '1FVnsbSgSKadKeoFuX_rrpR9J_n2ZFxmY','1uCyLRJVRIDRuOYe8W51fevfi81RFzrqa','1UgHLat1fEKE8796XWYlotEe-tU5_d8gZ',
      '1eSaC9zmTI233X3gWY06LpGehkYqBlcCe','1bxgiej09zlO9HBSDQdF9zTmRFnVk4NLk','1H1KolVonh9vMZrFHb4YYltH1OjJ-h66o',
      '1_2ZGPFp-2w5yGyZdaAWo4kb-Ddq-bFSR','1TGqnI90dgNq3hm4R44IxhLUF-X7FRr1G','1A0D1IcrWX7Jja5NCDKMzlOsOzR-ASr5a',
      '1RrQRl1vjIqmql8dPDKKNU0J7hjx8lku3','1Z_eCwyal8X0btR-2IoIE-4gDfhQuc9YN','12kxhMiPkTRuiHCb3ZZhvx0cab9f2dhD_',
      '162Hoy5Pjv9Z9trxzri3xJS3mS_bOpUaJ','1OVc6xafyfxj8_aXXdecfL32htAnTbRFF','11N2AIWSEG0kvECUJg4hD54yXpyh7pFun',
      '1Z_V0Kax5r1NXe2V9FTeUw2ANIVUFiaZN','1jbPG9kbhtAi5SChGU3DL-Qr1LEsCI8qN','1-XZHZF7IZtrwTXzr-NbBoC6YBV2dtIOU',
      '1m5Lyi6xm-U9HeshO5Zz4HfbAEQ14JfqD','1woq4ctjxHyZ8g0X8F_UmdLgHKEnZZf7E','1qZAuxu82dKg-fWYu3lV21_r9PqwNysoh',
      '1A7Hp46WsfDHaEVxHxjkncDGd80nDOBJD','1J38zneqDO7LRSVbV2a18K_pcpv00BzFW','1VWx81xSN0WaWXIQSVqn-Cqn0__Zen5km',
      '1MWYchaSEsGW3EC8fLWGW3ltj7FDto9W5','1eMsJYHSJM8gG94l7K6OZVAMuWjoUKU6g','1JlhRU0sTqEFdt0pUypbvuIGxl6M60ElQ',
      '1LDsUZbVieYa3jL-Hiwmy0rNJ3IozUl55','131KbVGB38XAMUHJHn-6QjK2DVyWtbU5_','1Fa_si0LcmEJ_FoYvBFZb49wRQHlN3lNs',
      '1AVSsuivu5we3KsHYpd9y1LjASI5S79fH','1nJg6KPtLvLpvLBZQBW5PUiu1dx4_PpMS','1oWbRulvyGc9bA-3bXGASeKJGNITtw0kU',
      '1cK95uADNm5P35BAecv0i17Dmg1fiFBa1','1kw-bEB8nIGUjpbiOAlVB4Nz7B_hNMHlo','1T_6se19aT7zB_kguH_afCdikeLZqK7z7',
      '1vk0UkwJ93X3dgaCrBqptHGLAB9UTBzUg','1WBK7qqmDohqmNvMoEML-npavAtJjMEUa','1cRi9AzS_YEXq3haV0Rkwx4e7ybcdBp2_',
      '11DTN6Hy6VTwmkURiSnjNWhtpG5rf7HDR','1q7GDPiNkExRaFWXDZ0jo31qYqdL7b1T0','16Zs3yxS_ybvWl5Ho9c-zO_AFlfTWMNTZ',
      '1pbbblWxzOQfEjKBrQupvzzgSPwvXoZDi','1xwt5SoQNHOW9X4GgyvhJO2Xkq51L8QDR','1rquzpesZdbob3QVkEUNlTUo-bP71vpSY',
      '1SgvMitsDNuXCCJi2JbCTHrahr3k7je-5','1GWheYqWeh5qYOmdkrEsyg35KpsHbFUbq','1xJO4TtjQa8-kWVLTBh0MEOr82GmO-R8q',
      '1BTUcJyhyK_c5403012x_7LY71maIGNTZ','1oONv0PdPHBw8T-qLWUeJbZeNK4jqiOVM','1qE0wdTtSrGpPXrtdOgesjrJnTIbsr9ix',
      '1KXc-gd_rW8bKoCAr2GPKXSoFu31x4Kje','19qRtU7Ng-rqb4q-XszDOPfLE2INYYj0Y','1wR3Zkx5SswdD14rui-3zrwTckYCbxxh_',
      '1tRFIIsXMe9Or4Ybr60WwN2eDj4XzX16o','1FS8daVrFOvZ7JmErwLn52b2lH69K3CFa','11qHzvwkznqDGXpTVYouUXy_10rEi2Yf3',
      '15V0p6SFruSKOrFeA1XSXjFSYkkvTDmB3','1y86xJDfQpe9UozYFhuJ4Hsk3zjriYhGc','1FjIxvUp1WfRcBue4mJMIkfmAoIYZiqEg',
      '1o3b5mpdiAVmxfZ-EXUXN-3X_xhppMzcg','1H36qdh7kdgzT3CLnSITQN_jaGoFECirp','1iflO2Dile1tufx6Os_tDtDtcPmkha2m9',
      '1g-gpPWgWF0qxtJLgatkArSo6p6CVDwOG','1bdez9VmxEpSxZVUA9XrX7iTKf-SQSBNo','1_oaB65NVeAx9fqG8YfQywz8oHJksRPFN',
      '1rEubwKD7GTfOIZaDP2eogBlbY8Zug4Dp','1bLXxn0MPnKPeLxD7Fao6RxzL4Qq3uvoK','1vDBOr3BMVINtOX9xjl0_5vX9WB2TKSyy',
      '1oeII450yMsEApyLMQN39IhMxGm7Bwfan','1QLu_zcHW4y0kLoJmsUSEaYKBfVw1k3ZU','1-28ACADHePmJKvX7C4OJ0kjrGfNUFdeT',
      '1U8Z79PhrbNcxSQR_pb_cnqiLrjcUlCbn','1_y16BAQON1UXBYSqHRJFUzCl4nNW-t-J','18I-kBtHKPynXrpK9MSwzx9Q9ebFEpRtC',
      '176kC9PDwBC6c06aLwbtuBvzcyWL7Spu1'
    ]
  },
  tasmania: {
    label: 'Tasmania',
    ids: [
      /* Cherries + Berry farm */
      '1KCFouZUNJiRzxco_fLlLSDeqreD6IcdB','1hMhBi59rlJI69eswULWOCH1zIP9kgbDu','1VoJ5Pa7zcn4UeAEgGChWd2FgIY2czwTp',
      '161onGnGpRRDiPMO3fX3qgwJR_LH1YCI9','1ZOBu0oWi2WZ-cfw5w7tAaWVEiPveRe1N','1D8vcQFZwzteEvmlWlPJKWq-6cs0ILscO',
      '1zwMLmRxcHH4OrBjnlo5hfkTC9IaCDHA4','1dnLr_uDau0s6cQPAIrw3ivRWqHY0P7IQ','1cTQX52TFva7ZWi0RFJm0eDA-Chtr4jAn',
      '1NOIHcF8kxj8DPhX35KGeluvFRul-6kl3','1UjRoPOppbNJTKzwEuqa5CD0t5otyU0q6','1_RK5_DMMjdBanRjPsCVNyhhyjqfxecnU',
      '1z15b8ifEWuG0K-lqMFHfqy9Ocb70QIus','13hay-9x8gss6NX7BDbQxohQqHDFzLexQ','1v36du2xbZCEeu1VGPZGZ0Ot6Q1tKAuZI',
      '1Yl5vOwuxZ9b9P-I7BRrX0fONucENFZor','1ZocHLwC_VDH0_eIHaOBLPqvECI7Fj2w5','1dwSQcPoqxrhaCoybmQUZmJChlaLr4ihD',
      '16Lc26BF5ZkErMUmPclL3imyxy59Hlt89','1l9ZE8APp-4mhTvOvp06D-ZZIX5hGqata','1YigPuDGMjWx_jFkd0_ywixhjWd7n8BuE',
      '1Jrmth-EkMgGuWuslvSiOmKEOBf9vFnzR','10_gRPn88GVKGyoqVKwC_ZD4pF-B17rX-','1Py55HGem9oSDjU-TOuZvtQA85l0ZVM3v',
      '1MavVUW82qFnbwOSceokwHln123HiAt3o','1nNbZ9hJtlHCNsgSn5aYzT2QZQkL-XNtk','1AxWMyNCeBQ6tw1TaMXcoga-Gq3NXs_Qe',
      /* EXTRAS */
      '1W56lNcMuDoRmZsqlu_Yq76_z7fGRwBOc','1CxbAOmIOqdgaIZL6-fVto6kSOFbXi0MO','1TO6ga97C-A_lxtTwhIcicqAn_zmvmgSc',
      '1qDDoeVO9gVAbQvHxfXnwLaaUkeCS23bn','1gKkTk0Y1p9Sg7h-lBxWySNMIuQP8TalC','1xzkDpGr9lEgLt7hUWHO6WBIDnua0slH1',
      '1lWbtZNoWZK3aaX1f6hbMKcMkJtAvvSt_','1cMn8xorBDUjK1CnjwKIUT0un3yhqgyNP','1Zo1647Pves3GYDIB2oTJDPR9ftJTlKPk',
      '17az8ygk3IH-Rx2WqQfrwV7t98Pbxk51W','1UAH9kJX7tKqJ4YJ5uKk789fOSefKo8vk','1Z9xsbERPm-dnr8qPsjA1qH9GzJrX768m',
      '13QQcTQ7TsN5veanCWJEl62eSMLWAw1n7','10bE6tFqucGiVwn8ZZuDKIPidib0M2Mac','1CyrTvNxQ-KTdBGMtPkUy-q8WOlkYi-l5',
      '1jq0YavPFB8tYdlmUunAWylPmwPqrc5qC','11gQdQusq0KyTBtuXJ6_f1AJQjsbYtAv5','1GYnmkJit-P3de4jvvpkCJxec7XsnA6Eq',
      '1J_STOWklHzptPTQlQqBH_TQen0xsgdYu','1nOKkLLB6c4KIUck2LAh7eBIecn4pz6e5','1O8Y9PnGj8fIXeM4PBtYxARAA4tavPrh0',
      '1UQ5KdWtkQC_L7Kyk1rsM-wbZklVN_622','1eBIlEBDAYLsDssPxI47t1L5CXdfyeeJV','1dTjOiwA9xUt5i4ADNme2Tz4x8IVK89Ac',
      /* Beginning */
      '1Ebfkgd6IGG2CQqxSjXwifaMw6UvuFG0y','1vZ82lP_MqHQ9rVRbcR7-y5r7-c_ePyVk','14oyX7WaLN1STAtN4m6sADD5Cp4B4ecU2',
      '1aE8plI00N_Jkl95n48U5TUIm3fdHKePQ','1Y0JeTYc9Ba9cMVMQDVGWDsYwfsp6N2UU',
      /* Fish pond */
      '14qeAUbpSwZMSuIDFgY5Ch1jUIh7BPuwA','18Bbrcr2wcs4PdcW0mLQzfMeyD7ZiBev8','1nhRor5mXSIRSUamj3WRweAAwbsawsLz2',
      '1kV9Xv7Mbdhcd83BMMTgQT5fLuGTQoPwB','1qObK6YUr9XLefLejiaNcSxZc8VnK6xwE','1dH3i4mypkk-BdqfjTZRRhY3CBhFdoOEt',
      '1StXZO7ZfljZJlrMn2KwMSc6gxeLUg8on','15fhWbvoKwU6bu1VxZyO4rlgX3W9GBTuQ','1ivK13EZ5wuX-mAubx_S_9uYgLkrmstnH',
      '1cEsvzgdZP8LNKT7v0M7bF-TIqBW6V8PO','1TkVmIEK-2FCXn7rwxSP4qd68j6cW7Wpk','1rcY4ywDbbmQk23IVgjcfMi7L4Ihzf84a',
      '1Rhfsn-h3z787F9B7nCaj2X97RxlRLu0m','1oy_1t3GI79lrrWalcgI4UTQ6ObHPjO_M','1xX6vo1BCDH6Uy2PwPQX7C1o_HfPlT3NH',
      '1xaloxZYqDRMZ2u5qrBwhxNfghp45tCxj','1Ww-bNQcNeRAXQhOUPKIpWu9E1w8ZSBeu','1yiEWprvvhiPzuFKdz5wKyVapfK93r1bX',
      '1qShJB82urC6WLGxdiFqHto5h38xXZ9E0','1tAnSBSXTa_pnuK1XKVIB1Y3MvwVW88Hf','1nl-dPOcI5WhbobimUpjDvlvJv6uqzb21',
      '1zR_wsALcLsVBl3L6KmAD42uifHxczaqZ','1pT64kHXsB5guh_NHF9-o_gOWR7S7VA8q','1pwLXtkVTun8wEDBoSmsQC2PW62w87dbA',
      '1IV5ttPmooRWpcUIe0xZ2VUr4t9BuO2e5','1rvNfcto5_ciWmfyjvTmIwZtfV97BEp2r','1mV6ru3yVc-fBjnQGJZb28rC3BrVHcaf3',
      '1uOo9j01nDbdoNETNk6-eYVMqUcsSOH0m','1iRUor6CtTniE2OhAuhpMy4J7itF820jQ','1C0ys6E-IlIzr56J7hTFQGZW4yzycMWzH'
    ]
  }
};
