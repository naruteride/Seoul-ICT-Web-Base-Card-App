import { createStore } from 'redux';

const contents = [
  {
    path: "/G43",
    imagePath: "https://www.snipercountry.com/wp-content/uploads/2020/10/Glock-43.jpg",
    title: "G43",
    character: "이녀석은 가장 작고 귀여운 존재로, 마치 닌자 가방에 실려다니는 비밀병기일지도 모를 묘한 느낌을 더해줍니다! 만일 귀엽게 위장한 위협을 원한다면, 당신의 요구에 딱 맞는 친근한 파트너입니다. 이제 '귀여운 위험'을 만끽해보세요, 닌자님!",
    detail: {
      caliber: "9x19",
      action: "constant double-action mode",
      length: "159 mm",
      height: "108 mm",
      width: "27 mm",
      sightRadius: "133 mm",
      barrelLength: "86.5 mm",
      barrelRifling: "Hexagonal profile with right-hand twist",
      magCapacity: "6"
    }
  }, {
    path: "/G48",
    imagePath: "https://i0.wp.com/unclezo.com/wp-content/uploads/2022/07/IMG_7759.jpeg?fit=1280%2C720&ssl=1",
    title: "G48",
    character: "너무 강한 존재감 때문에 닌자처럼 숨기가 어려운가요? 그러나 여전히 은밀한 무장을 원하시나요? 당신의 바지 속 총구가 보일 듯 말 듯, 꾸민 듯 꾸미지 않은 자연스러운 자신감을 확실하게 살려줄 것입니다. 화장과 총기는 언제나 꾸안꾸죠!",
    detail: {
      caliber: "9x19",
      action: "constant double-action mode",
      length: "185 mm",
      height: "128 mm",
      width: "28 mm",
      sightRadius: "152 mm",
      barrelLength: "106 mm",
      barrelRifling: "Hexagonal profile with right-hand twist",
      magCapacity: "10"
    }
  }, {
    path: "/G44",
    imagePath: "https://cloudfront-us-east-1.images.arcpublishing.com/archetype/D3PRVFCAQ5ECPLJSA37THL4IT4.jpg",
    title: "G44",
    character: "이 친구는 적당한 크기, 적당한 명중률, 적당한 위압감, 그래서인지 뭔가 시민B같은 느낌을 주는데요, 근데! 경제적인 .22탄을 사용해서 유지비용에 경쟁력을 챙겼습니다! 주머니에 땡전 한 푼 없는 거렁뱅이, 할렘가의 갱스터, 그리고 펜타닐 중독자에게 적극 추천합니다!",
    detail: {
      caliber: ".22 LR",
      action: "constant double-action mode",
      length: "185 mm",
      height: "128 mm",
      width: "32 mm",
      sightRadius: "158 mm",
      barrelLength: "102 mm",
      barrelRifling: "Hexagonal profile with right-hand twist",
      magCapacity: "10"
    }
  }, {
    path: "/G45",
    imagePath: "https://schuylkillgunworks.com/wp-content/uploads/2023/02/g45mos-1024x601.jpeg",
    title: "G45",
    character: "이건 국경을 넘나드는 표준적인 모델이죠! 콤팩트한 슬라이드 길이로 손쉬운 조작감과 찐따미를 자랑하지만, 그 언덕 너머 담긴 건 무려 풀-사이즈의 프레임이랍니다! 당신을 얕본 알콜중독자들에게 외유내강이 뭔지 제대로 보여주세요!",
    detail: {
      caliber: "9x19",
      action: "constant double-action mode",
      length: "189 mm",
      height: "139 mm",
      width: "34 mm",
      sightRadius: "153 mm",
      barrelLength: "102 mm",
      barrelRifling: "Hexagonal profile with right-hand twist",
      magCapacity: "17"
    }
  }, {
    path: "/G34",
    imagePath: "https://www.thefirearmblog.com/blog/wp-content/uploads/2018/01/IMG_20180101_223552692-660x371.jpg",
    title: "G34",
    character: "이 권총은 어마어마하게 크고 힘이 세졌어요. 마치 어쩌다 드러난 거인 같은 존재감을 자랑하며, 자신감 넘치는 당신을 한층 강력하게 보여줄 거예요! 무엇보다도, 이 권총을 들고 다니면 다른 모든 건 작아 보일 거예요. 자, 세상을 뒤집어 엎을 준비가 되셨나요?",
    detail: {
      caliber: "9x19",
      action: "constant double-action mode",
      length: "222 mm",
      height: "139 mm",
      width: "34 mm",
      sightRadius: "191 mm",
      barrelLength: "135 mm",
      barrelRifling: "Enhanced hexagonal profile with right-hand twist",
      magCapacity: "17"
    }
  }, {
    path: "/G42",
    imagePath: "https://blog.smithandedwards.com/wp-content/uploads/2014/05/glock-42-380-wood.jpg",
    title: "G42",
    character: "이 총은 얇아서 거의 그림자처럼 보일 만큼 가벼워요. 하지만 그 얇음 속에 .380 AUTO 라는 괴물이, 스치는 모든 적을 갈아버립니다! 아주 특별한 건, 탄창에는 단 6발만 넣을 수 있어요. 그래도 실력자라면 한 탄창으로 여섯 명을 처치하는 건 어렵지 않아요.",
    detail: {
      caliber: ".380 AUTO",
      action: "constant double-action mode",
      length: "151 mm",
      height: "105 mm",
      width: "25 mm",
      sightRadius: "125 mm",
      barrelLength: "82.5 mm",
      barrelRifling: "Hexagonal profile with right-hand twist",
      magCapacity: "6"
    }
  },
]

function reducer(state, action) {
  return { contents };
}

export const store = createStore(reducer);