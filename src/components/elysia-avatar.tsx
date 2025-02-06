"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const elysiaResponse = [
  "经常会和别的女孩子谈论你哦。内容。。是不是很想知道呀～",
  "有些事不用太在意，美丽的少女总有些小秘密，不是吗？",
  "这里有好多和我一样漂亮的女孩子呀，是天堂吗？",
  "你会不会嫌我话多呢？可我就是有好多话想对你说呀。",
  "嗯～和女孩子独处时，可要好好看向对方的眼睛噢",
  "不许叫错我的名字噢，不然。。。我会有小情绪的。",
  "如此绚丽的花朵，不该在绽放之前就枯萎。我会赠予你璀聚的祝福，而你的灵魂，也将会绽放更耀眼的光辉。",
  "愿你前行的道路有群星闪耀。愿你留下的足迹有百花绽放。你即是上帝的馈赠，世界因你而瑰丽。",
  "晦，想我了吗？不论何时何地，爱莉希雅都会回应你的期待",
  "晦，我又来啦。多夸夸我好吗？我会很开心的～♪",
  "你好！新的一天，从一场美妙的邂逅开始。",
  "终于轮到我啦，这段时间我可是一直都在构思与你见面的开场白呢。",
  "执拗的花朵永远不会因暴雨而褪去颜色，你的决心也一定能在绝境中绽放真我。",
  "你可以更光明正大的看向我噢，毕竟我也直在看着你嘛。来，让我们更深入地了解彼此吧？",
  "唉，要做的事好多～但焦虑可是女孩子的大敌，保持优雅得体，从容愉快地前进吧。",
  "别看我这样，其实我也是很忙的。不过，我的日程上永远有为你预留的时间。",
  "这一次有你想要的东西吗？没有的话，我就可以再见你一面了。",
  "唉，时间真是个讨厌的东西，你不觉得吗？如果不是时间紧迫，我还想留下更多值得纪念的话语。",
  "有没有觉得我的话要比别人多一点？多就对啦，我可是有在很认真地准备这件事的。",
  "哇，你看那朵白白软软的云，是不是有点像我呢？",
  "可爱的少女心可是无所不能的噢～♪",
  "好啦可以啦，再说下去我就要哭了噢～♪",
  "这束鲜花，要心怀感激的收下哦～♪",
  "要好好看着我哦～♪",
  "这身衣服是伊甸做的噢，喜欢吗，还是说，喜欢的是我呢～♪",
  "别动噢，借你的眼睛照照镜子。。好啦，我看起来怎么样？",
  "嗯～和女孩子独处时，可要好好看向对方的眼晴噢～♪",
  "有空多来陪陪我好吗，你一定不忍心让可爱的我孤独寂寞吧。",
  "这可是你选的衣服，要好好看着，不许移开视线噢。",
  "哎呀，你也睡不着吗？那我们来聊聊天，好不好？",
  "你会不会嫌我话多呢？可我就是有好多话想对你说呀。",
  "加点浪漫的气氛，如何？",
  "哇谢谢！我就知道你对我最好啦！",
  "爱莉希雅的贴心提示！你可以尽情的依赖爱莉希雅，而她，也会以全部的身心回应你！",
];

const elysiaAvatar = () => {
  const [shake, setShake] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [trigerred, setTrigerred] = useState(false);

  const handleClick = () => {
    if (trigerred) {
      toast(
        <div className="text-center">
          {elysiaResponse[Math.floor(Math.random() * elysiaResponse.length)]}
        </div>,
      );
    }
    setShake(true);
    setTimeout(() => setShake(false), 500); // Remove shake class after animation
    setClickCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (clickCount === 3) {
      toast(<div className="text-center">可爱的少女心可是无所不能的噢～♪</div>);
      setTrigerred(true);
    }
  }, [clickCount]);

  return (
    <Image
      src="/assets/pictures/elysia.png"
      alt="Elysia"
      width={150}
      height={150}
      className={`rounded-3xl bg-gray-100 dark:bg-gray-900 p-4 ${shake ? "shake" : ""}`}
      onClick={handleClick}
    />
  );
};

export default elysiaAvatar;
