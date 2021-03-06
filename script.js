pitchArray = [0,12,14,45,67,-43,76,-12];
const network = new brain.NeuralNetwork();
network.train([
    {input: [0,-1,53,10,-32, 44,-76,-1,11,-5,-2,5,-10,-11,208], output: { NoEmotion: 1 } },
    {input: [0, 70, -4, -72, 53, 9, 3, -58, 9, 67, -10, -51, -35, -6, -2, -6, 0], output: { Excited: 1 } },
    {input: [0, -12, -19, -16, 19, 14, 7, -32, 7, 3, 90, -100, -49], output: { Tired: 1 } },
    {input: [0, -1, 1, -50, 12, -23, 14, -26, 58, 12, -14, 15, 1, -74, 34, -34, 22, -15, -3], output: { Mad: 1 } },
    {input: [0, 21, 57, -134, 50, -46, 12, 32, 1, -35, -1, -14, 1, 7, 45, -2, -80], output: { Surprise: 1 } },
    {input: [0, 9, -16, -14, 163, -139, -3, -24, 2, 2, -2, -12, 9, 5, 0, -3, -10], output: { Sad: 1 } },
    {input: [0, 15, -18, -10, -23, 17, 11, -6, -4, 10, 8, -18, -7, -5, -5, -42], output: { NoEmotion: 1 } },
    {input: [0, -11, 17, -6, -19, -5, 15, 8, -30, -8, -6, -4], output: { Excited: 1 } },
    {input: [0, 3, 4, -7, -9, 2, -4, 8, -3, -3, -4, 1, 1, -5, 13, 158, -154], output: { Tired: 1 } },
    {input: [0, 36, -26, -25, -5, -14, -10, -1, 26, -21, -8, -6, -13, 4, 22, -21, -6, 13, 4, -17], output: { Mad: 1 }},
    {input: [0, 15, -34, 5, 17, -16, -7, 8, 14, -26, -7, 23, -26, -1, 14, 0, 13, 10, 1, -45, -42, 58], output: { Surprise: 1 } },
    {input: [0, 11, 10, -3, -24, 1, -7, 11, -17, 7, -4, 0, -3, -2, -42, 46, 0, -8, 11, 0, -8, 2], output: { Sad: 1 }},
    {input: [0, -28, -73, 3, 113, 0, -174, 17, 19, 7, 10, -48, 126, -113, 117, -153, 190], output: { NoEmotion: 1 }},
    {input: [0, 44, 49, -112, 71, -45, -34, 59, -77, 5, -22, -8, -5, 0, 13], output: { Excited: 1 } },
    {input: [0, 47, 17, -30, 1, -7, 4, -28, 11, 8, -8, -3, -3, -21, -5, 24, -6, 176, -189, -4, 0, -5], output: { Tired: 1 } },
    {input: [0, -5, 16, -56, 26, 13, -6, -22, 45, -6, -12, -62, -6, 70, -5, 22, -4, -188], output: { Mad: 1 } },
    {input: [0, -11, 135, -32, -39, -25, -40, 60, -5, -5, -26, 29, -2, 16, 6, 22, 28, -149, 25], output: { Surprise: 1 } },
    {input: [0, 47, -9, -33, -27, 18, -17, 1, -23, 10, 0, -18, 17, 8, -9, -18, 17, 4, 5, -15, -2, 0, 60], output: {Sad: 1 } },
    {input: [0, -28, -73, 3, 113, 0, -174, 17, 19, 7, 10, -48, 126, -113, 117, -153, 190], output: { NoEmotion: 1 }},
    {input: [0, 17, -143, 29, -18, -6, -29, 136, -105, 21, 1, -4, 1, -63, 74, 63, -75], output: { Excited: 1 } },
    {input: [0, -2, 3, 66, 0, -11, -23, -13, -21, 20, -32, 161, -56, 33], output: { Tired: 1 } },
    {input: [0, -1, -20, -70, -10, 4, -28, -6, 29, 20, -6, -5, -13, 58, 6, -60, -7, 6, -4, -5, -6, 5, 7, 11, -32, 142, 3, -98, 83, 5, -86], output: { Mad: 1 } },
    {input: [0, -132, -15, -4, -3, 15, 7, -4, -12, -13, 0, 0, -6, 31, 1, -2, 2, -25, 10, -11, 3, 144, -46, -68, -6, -35, 1], output: { Surprise: 1 } },
    {input: [0, 43, 13, -23, -36, 5, 50, -2, -53, -13, -17, -33, 16, -17, -20, -19, 48, 3, 24, -22, -5, -5, 170, 4, 597, -762, -2, -22, 3, 0, 149, -146, -9, -3, 2], output: { Sad: 1 } },
    {input: [0, 59, -8, 0, -19, -30, 100, -44, 40, 39, -163, -4, 100, -100, 134, -106, 150, -79, 84], output: { NoEmotion: 1 } },
    {input: [0, -2, 137, -119, 145, -139, 3, 30, 172, -251, 56, 49, 58, 87, -197], output: { Excited: 1 } },
    {input: [0, 2, 20, -6, -38, 7, 166, -30, -149, 5, 126, -127, -5, 72, 78], output: { Tired: 1 } },
    {input: [0, 25, -78, 61, -36, -21, 73, -22, 10, -56, 138, 2, -66, 5, 15, -95, 117], output: { Mad: 1 } },
    {input: [0, 39, -28, -45, 12, 6, 131, -68, -80, 62, 13, -68, -3, 28, 65, 36, -119], output: { Surprise: 1 } },
    {input: [0, -5, -6, 100, 71, -159, 98, -24, -105, -4, -8], output: { Sad: 1 } },
    {input: [0, -95, 90, 75, -181, 12, 4, -59, 43, 22, -2, -16, 32, 18, 166, -226, 21, -17], output: { NoEmotion: 1} },
    {input: [0, -91, -41, 97, -112, -38, 249, -195, -42, -9, 10, -26, -20, -24], output: { Excited: 1 } },
    {input: [0, 40, -21, -164, 149, 54, 19, -70, 21, 16, -19, -4, -38, 203, -214, 0], output: { Tired: 1 } },
    {input: [0, 165, 156, 5, -15, 6, -31, 24, 1, -32, 43, -2, -7, 36, 39, -55, -172, 21, 117, -20, -111, 120, -24, -45, 46], output: { Mad: 1 } },
    {input: [0, 70, -56, 116, -156, -20, 7, 109, 12, -148, -29, 8, 147, 18, -132, -34, 80, 42, -96, -116], output: {Surprise: 1 } },
    {input: [0, 2, -19, -8, 219, -2, -55, 1, -16, 167, -53, -107, 4, 73, -198, 12, 162, -151, 10, 150, -172, -2, 94, -104, 171, 8, -74, -107, 192, -193, -2, 107], output: {Sad: 1 } },
    {input: [0, 44, 2, -20, 53, -23, -16, -30, 21, 7, 5, -16, 2, 49, 21, -99, 20, -31, 187, -131], output: { NoEmotion: 1 } },
    {input: [0, -29, -4, 11, 54, -6, -69, 120, 5, -79, 27, 40, 30, -68, -28, 26, 10, 38, -40, -30], output: { Excited: 1 } },
    {input: [0, -7, -4, 5, -4, 4, 81, 0, 44, 3, -7, 17, -14, 37, -19, -6], output: { Tired: 1 } },
    {input: [0, 57, 6, -24, 67, -154, 116, 7, -8, 0, 1, 8, 0, -82, -1], output: { Mad: 1 } },
    {input: [0, 21, 1, -64, -10, 13, -12, 22, 41, -13, 16, 8, 2, 24, -48, -95, 117, -1, 3, -88, 6, -1, -17], output: { Surprise: 1 } },
    {input: [0, -1, 154, -134, -25, -5, 10, 1, -15, -8, 17, -2, -4, 1, 48, -36, 15, -31, 2, -8, 127, 1, -3], output: { Sad: 1 } }    
  ]);
  let emotionResult = network.run(pitchArray);
  console.log(emotionResult);
