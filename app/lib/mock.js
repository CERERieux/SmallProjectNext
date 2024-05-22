const questionMock = [
  {
    comment: "Testing show a question",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Non blandit massa enim nec dui nunc mattis. Rhoncus urna neque viverra justo nec ultrices. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Bibendum enim facilisis gravida neque convallis a cras semper. Aliquam purus sit amet luctus venenatis lectus magna. Sit amet tellus cras adipiscing. Nisl purus in mollis nunc sed. Metus vulputate eu scelerisque felis imperdiet. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. At tempor commodo ullamcorper a lacus vestibulum.",
  },
  {
    comment: `Testing a long question Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae 
    
    proin sagittis nisl rhoncus. Non blandit massa enim nec dui nunc mattis. Rhoncus urna neque viverra justo nec ultrices. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Bibendum enim facilisis gravida neque convallis a cras semper. Aliquam purus sit amet luctus venenatis lectus magna`,
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Non blandit massa enim nec dui nunc mattis. Rhoncus urna neque viverra justo nec ultrices. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Bibendum enim facilisis gravida neque convallis a cras semper. Aliquam purus sit amet luctus venenatis lectus magna. Sit amet tellus cras adipiscing. Nisl purus in mollis nunc sed. Metus vulputate eu scelerisque felis imperdiet. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. At tempor commodo ullamcorper a lacus vestibulum.",
  },
  {
    comment: "Testing show a question and answer with whitespaces",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Non blandit massa enim nec dui nunc mattis. Rhoncus urna neque viverra justo nec ultrices. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Bibendum enim facilisis gravida neque convallis a cras semper. Aliquam purus sit amet luctus venenatis lectus magna. Sit amet tellus cras adipiscing. Nisl purus in mollis nunc sed. Metus vulputate eu scelerisque felis imperdiet. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. At tempor commodo ullamcorper a lacus vestibulum.

Neque ornare aenean euismod elementum nisi. Pretium lectus quam id leo in vitae turpis massa. Libero nunc consequat interdum varius sit. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. A scelerisque purus semper eget duis. Suscipit adipiscing bibendum est ultricies integer quis. Amet risus nullam eget felis. Vitae semper quis lectus nulla at volutpat diam ut. Aliquam ultrices sagittis orci a scelerisque. Ultrices dui sapien eget mi proin sed libero enim. Enim ut sem viverra aliquet. Nunc faucibus a pellentesque sit amet porttitor eget dolor. In metus vulputate eu scelerisque felis. Aenean euismod elementum nisi quis eleifend quam adipiscing. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Nunc eget lorem dolor sed. In hac habitasse platea dictumst quisque sagittis purus sit amet. Aliquet nibh praesent tristique magna sit amet. Posuere urna nec tincidunt praesent semper feugiat. Augue lacus viverra vitae congue eu consequat ac felis.

Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Bibendum arcu vitae elementum curabitur vitae nunc sed. Tristique senectus et netus et malesuada fames ac. Leo in vitae turpis massa. Est velit egestas dui id ornare arcu odio ut sem. Est sit amet facilisis magna. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Id semper risus in hendrerit gravida rutrum quisque non tellus. Et sollicitudin ac orci phasellus egestas. Adipiscing tristique risus nec feugiat.

Id interdum velit laoreet id donec. Gravida cum sociis natoque penatibus et magnis. Venenatis lectus magna fringilla urna. Condimentum lacinia quis vel eros donec ac odio. Viverra mauris in aliquam sem fringilla ut. A cras semper auctor neque vitae tempus quam pellentesque. Vitae proin sagittis nisl rhoncus mattis. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Cras tincidunt lobortis feugiat vivamus at. Libero justo laoreet sit amet. Consectetur lorem donec massa sapien faucibus et molestie. Feugiat scelerisque varius morbi enim. Dictum sit amet justo donec enim. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Cursus metus aliquam eleifend mi in nulla posuere. Sociis natoque penatibus et magnis dis parturient montes. Odio tempor orci dapibus ultrices in iaculis. Id consectetur purus ut faucibus pulvinar.`,
  },
  {
    comment: "Testing show a question",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Non blandit massa enim nec dui nunc mattis. Rhoncus urna neque viverra justo nec ultrices. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Bibendum enim facilisis gravida neque convallis a cras semper. Aliquam purus sit amet luctus venenatis lectus magna. Sit amet tellus cras adipiscing. Nisl purus in mollis nunc sed. Metus vulputate eu scelerisque felis imperdiet. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. At tempor commodo ullamcorper a lacus vestibulum.",
  },
  {
    comment: "Testing show a question",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Non blandit massa enim nec dui nunc mattis. Rhoncus urna neque viverra justo nec ultrices. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Bibendum enim facilisis gravida neque convallis a cras semper. Aliquam purus sit amet luctus venenatis lectus magna. Sit amet tellus cras adipiscing. Nisl purus in mollis nunc sed. Metus vulputate eu scelerisque felis imperdiet. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. At tempor commodo ullamcorper a lacus vestibulum.",
  },
];

module.exports = {
  questionMock,
};