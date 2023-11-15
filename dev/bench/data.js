window.BENCHMARK_DATA = {
  "lastUpdate": 1700043558584,
  "repoUrl": "https://github.com/jacobin/CppMicroServices",
  "entries": {
    "C++ Benchmark": [
      {
        "commit": {
          "author": {
            "email": "113473781+tcormackMW@users.noreply.github.com",
            "name": "tcormackMW",
            "username": "tcormackMW"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e67fc3c3cedc9dd312215d20e05c24522a20a8e",
          "message": "ServiceComponent build tests cmake configuration (#949)\n\n* use cmake build type\r\n\r\n* set to debug by default",
          "timestamp": "2023-10-25T08:53:55-04:00",
          "tree_id": "fa784a906f8b26a65ede38656bc3de0167be2969",
          "url": "https://github.com/jacobin/CppMicroServices/commit/7e67fc3c3cedc9dd312215d20e05c24522a20a8e"
        },
        "date": 1700043545438,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1/manual_time",
            "value": 28189.12158444867,
            "unit": "ns/iter",
            "extra": "iterations: 27265\ncpu: 28653.951953053365 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1/manual_time",
            "value": 115000.84258392044,
            "unit": "ns/iter",
            "extra": "iterations: 7477\ncpu: 117025.54500468101 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1/manual_time",
            "value": 446227.4557657075,
            "unit": "ns/iter",
            "extra": "iterations: 1639\ncpu: 457596.0951799878 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1/manual_time",
            "value": 1856787.0129869543,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 1893939.393939394 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1/manual_time",
            "value": 7440352.671755478,
            "unit": "ns/iter",
            "extra": "iterations: 131\ncpu: 7514312.977099237 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1/manual_time",
            "value": 28323885.185184743,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 28356481.48148148 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/4/manual_time",
            "value": 79626.64275232409,
            "unit": "ns/iter",
            "extra": "iterations: 12266\ncpu: 80252.32349584217 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/4/manual_time",
            "value": 312707.66747376806,
            "unit": "ns/iter",
            "extra": "iterations: 2478\ncpu: 315274.41485068604 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/4/manual_time",
            "value": 1267947.4125874152,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1267482.5174825175 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/4/manual_time",
            "value": 4923149.65986395,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 4995748.299319728 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/4/manual_time",
            "value": 20025357.50000003,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 20312500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/4/manual_time",
            "value": 79208308.33333346,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 79427083.33333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/16/manual_time",
            "value": 251382.17522658515,
            "unit": "ns/iter",
            "extra": "iterations: 3310\ncpu: 250188.82175226585 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/16/manual_time",
            "value": 1019387.859424918,
            "unit": "ns/iter",
            "extra": "iterations: 939\ncpu: 1048322.6837060703 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/16/manual_time",
            "value": 3975681.8652849747,
            "unit": "ns/iter",
            "extra": "iterations: 193\ncpu: 4047927.4611398964 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/16/manual_time",
            "value": 16128200.00000001,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 16183035.714285715 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/16/manual_time",
            "value": 62979419.99999996,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 62500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/16/manual_time",
            "value": 245769733.33333316,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 250000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/64/manual_time",
            "value": 873988.230769232,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 889423.0769230769 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/64/manual_time",
            "value": 3266476.229508192,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3329918.0327868853 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/64/manual_time",
            "value": 13583477.027027005,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 13724662.162162162 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/64/manual_time",
            "value": 52612242.85714294,
            "unit": "ns/iter",
            "extra": "iterations: 14\ncpu: 52455357.14285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/64/manual_time",
            "value": 210418599.99999976,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 214843750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/64/manual_time",
            "value": 828214500.0000012,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 843750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/256/manual_time",
            "value": 2749799.6951219514,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2810594.512195122 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/256/manual_time",
            "value": 11512991.176470567,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 11642156.862745099 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/256/manual_time",
            "value": 43706826.31578945,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 44407894.7368421 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/256/manual_time",
            "value": 184910150.00000012,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 187500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/256/manual_time",
            "value": 672008899.9999995,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 671875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/256/manual_time",
            "value": 3311684999.999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3359375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1000/manual_time",
            "value": 8365067,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 8437500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1000/manual_time",
            "value": 34371696.2962963,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 35300925.925925925 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1000/manual_time",
            "value": 147311677.77777782,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 151041666.66666666 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1000/manual_time",
            "value": 559537900.0000002,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 570312500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1000/manual_time",
            "value": 2609530700,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2671875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1000/manual_time",
            "value": 13202952899.999989,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 13375000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1/manual_time",
            "value": 28310.083705752266,
            "unit": "ns/iter",
            "extra": "iterations: 28194\ncpu: 28263.992338795488 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1/manual_time",
            "value": 188692.29230563884,
            "unit": "ns/iter",
            "extra": "iterations: 7499\ncpu: 189608.6144819309 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1/manual_time",
            "value": 613712.8000000007,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609375 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1/manual_time",
            "value": 3205160.2631578986,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 3207236.8421052634 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1/manual_time",
            "value": 15389247.899159666,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 15493697.478991596 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1/manual_time",
            "value": 47674147.61904758,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 47619047.61904762 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/4/manual_time",
            "value": 78205.51117566413,
            "unit": "ns/iter",
            "extra": "iterations: 12393\ncpu: 79429.92011619463 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/4/manual_time",
            "value": 388674.6584398428,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 392518.73071837815 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/4/manual_time",
            "value": 1805249.2711370224,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1822157.4344023324 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/4/manual_time",
            "value": 6101068.000000006,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6093750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/4/manual_time",
            "value": 28730052.631578885,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 28782894.736842107 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/4/manual_time",
            "value": 119313608.3333333,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 119791666.66666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/16/manual_time",
            "value": 249790.4790240995,
            "unit": "ns/iter",
            "extra": "iterations: 3361\ncpu: 251041.35673906576 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/16/manual_time",
            "value": 1136015.1128557408,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 1150024.5338567223 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/16/manual_time",
            "value": 4403732.786885239,
            "unit": "ns/iter",
            "extra": "iterations: 183\ncpu: 4439890.710382514 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/16/manual_time",
            "value": 18893508.928571414,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 18973214.285714287 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/16/manual_time",
            "value": 68099930.00000006,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 68750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/16/manual_time",
            "value": 269199433.33333343,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 270833333.3333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/64/manual_time",
            "value": 856778.473282442,
            "unit": "ns/iter",
            "extra": "iterations: 1310\ncpu: 858778.6259541984 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/64/manual_time",
            "value": 3222371.3207547194,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3242924.5283018867 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/64/manual_time",
            "value": 14077564.10256411,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 14222756.41025641 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/64/manual_time",
            "value": 52655621.428571366,
            "unit": "ns/iter",
            "extra": "iterations: 14\ncpu: 53571428.571428575 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/64/manual_time",
            "value": 214747400.00000012,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 214843750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/64/manual_time",
            "value": 813394099.9999993,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 828125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/256/manual_time",
            "value": 2767779.816513762,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2819189.602446483 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/256/manual_time",
            "value": 11178904.958677687,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 11363636.363636363 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/256/manual_time",
            "value": 41810357.89473685,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 41940789.473684214 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/256/manual_time",
            "value": 177936316.66666666,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 179687500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/256/manual_time",
            "value": 662489399.9999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 671875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/256/manual_time",
            "value": 3297334299.9999986,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3359375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1000/manual_time",
            "value": 8274404,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 8437500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1000/manual_time",
            "value": 30930919.99999999,
            "unit": "ns/iter",
            "extra": "iterations: 30\ncpu: 31250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1000/manual_time",
            "value": 141805920.00000003,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 143750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1000/manual_time",
            "value": 539064849.9999998,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 546875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1000/manual_time",
            "value": 2615673100.000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2640625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1000/manual_time",
            "value": 13085237600.000006,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 13250000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1",
            "value": 2150.6959374995918,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2148.4375 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1",
            "value": 4031.0171321124917,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 4080.628873877011 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1",
            "value": 11548.337499998952,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1",
            "value": 42589.7562499955,
            "unit": "ns/iter",
            "extra": "iterations: 16000\ncpu: 41992.1875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1",
            "value": 155627.63392854403,
            "unit": "ns/iter",
            "extra": "iterations: 4480\ncpu: 156947.54464285713 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1",
            "value": 582022.0535714579,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 585937.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/4",
            "value": 8651.240842674613,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8579.760804639265 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/4",
            "value": 16050.705919906817,
            "unit": "ns/iter",
            "extra": "iterations: 40727\ncpu: 16113.389152159501 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/4",
            "value": 45838.82006294843,
            "unit": "ns/iter",
            "extra": "iterations: 14933\ncpu: 46038.97408424295 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/4",
            "value": 170213.3705357259,
            "unit": "ns/iter",
            "extra": "iterations: 4480\ncpu: 167410.7142857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/4",
            "value": 628033.0357142816,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 627790.1785714285 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/4",
            "value": 2328696.562499744,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2343750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/16",
            "value": 34438.77921823036,
            "unit": "ns/iter",
            "extra": "iterations: 20364\ncpu: 34527.84325279906 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/16",
            "value": 64449.97321429874,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 64174.107142857145 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/16",
            "value": 184387.35601392476,
            "unit": "ns/iter",
            "extra": "iterations: 3733\ncpu: 184168.22930618806 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/16",
            "value": 684744.9107143332,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 683593.75 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/16",
            "value": 2494212.14285722,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 2511160.714285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/16",
            "value": 9311249.333331944,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 9166666.666666666 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/64",
            "value": 138410.9481719651,
            "unit": "ns/iter",
            "extra": "iterations: 4978\ncpu: 141246.48453194054 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/64",
            "value": 258996.92857145902,
            "unit": "ns/iter",
            "extra": "iterations: 2800\ncpu: 262276.78571428574 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/64",
            "value": 739168.3035716007,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 749860.4910714285 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/64",
            "value": 2732693.560606129,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 2722537.878787879 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/64",
            "value": 9977974.666668767,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 10000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/64",
            "value": 37268184.210532986,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 38651315.78947368 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/256",
            "value": 570514.1999997067,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578125 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/256",
            "value": 1083967.8125002193,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1098632.8125 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/256",
            "value": 3102305.357141891,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 3138950.8928571427 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/256",
            "value": 11498828.571429191,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 11718750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/256",
            "value": 42263529.41176468,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 42279411.76470588 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/256",
            "value": 157624950.00001308,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 156250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1000",
            "value": 2291131.438126538,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 2299331.1036789296 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1000",
            "value": 4350017.499999126,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 4296875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1000",
            "value": 12533210.93749804,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 12451171.875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1000",
            "value": 46211666.666658856,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 45833333.333333336 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1000",
            "value": 168930424.999985,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 167968750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1000",
            "value": 630530599.9999291,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 640625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1/manual_time",
            "value": 2922.7175997533454,
            "unit": "ns/iter",
            "extra": "iterations: 237776\ncpu: 8674.130273871206 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1/manual_time",
            "value": 11532.146934714214,
            "unit": "ns/iter",
            "extra": "iterations: 60435\ncpu: 45761.97567634649 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1/manual_time",
            "value": 47895.953638190644,
            "unit": "ns/iter",
            "extra": "iterations: 14581\ncpu: 225036.00576092175 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1/manual_time",
            "value": 207570.87292140734,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 1104141.9239904988 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1/manual_time",
            "value": 1050038.738738516,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 5302177.177177177 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1/manual_time",
            "value": 7458291.578947359,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 27467105.263157893 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/4/manual_time",
            "value": 3522.295198871015,
            "unit": "ns/iter",
            "extra": "iterations: 193517\ncpu: 10254.267066976028 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/4/manual_time",
            "value": 13185.997613220434,
            "unit": "ns/iter",
            "extra": "iterations: 52791\ncpu: 71922.77092686253 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/4/manual_time",
            "value": 80412.57044274834,
            "unit": "ns/iter",
            "extra": "iterations: 8695\ncpu: 479801.61012075905 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/4/manual_time",
            "value": 258384.47893570093,
            "unit": "ns/iter",
            "extra": "iterations: 2706\ncpu: 2598392.4611973395 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/4/manual_time",
            "value": 1552261.8625277171,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 13684866.962305987 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/4/manual_time",
            "value": 14104752.000000153,
            "unit": "ns/iter",
            "extra": "iterations: 50\ncpu: 72812500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/16/manual_time",
            "value": 5553.959864038948,
            "unit": "ns/iter",
            "extra": "iterations: 125623\ncpu: 15423.131114525206 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/16/manual_time",
            "value": 19232.87546796764,
            "unit": "ns/iter",
            "extra": "iterations: 36328\ncpu: 177204.91081259635 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/16/manual_time",
            "value": 108753.20532672915,
            "unit": "ns/iter",
            "extra": "iterations: 6458\ncpu: 1388781.3564571075 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/16/manual_time",
            "value": 459132.52459015785,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 8442622.950819673 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/16/manual_time",
            "value": 3653932.124352429,
            "unit": "ns/iter",
            "extra": "iterations: 193\ncpu: 46955958.5492228 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/16/manual_time",
            "value": 40818523.529411934,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 253676470.5882353 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/64/manual_time",
            "value": 13817.538020894503,
            "unit": "ns/iter",
            "extra": "iterations: 49578\ncpu: 35297.91439751503 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/64/manual_time",
            "value": 43478.00894298949,
            "unit": "ns/iter",
            "extra": "iterations: 16102\ncpu: 590959.1976152031 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/64/manual_time",
            "value": 196154.74186307492,
            "unit": "ns/iter",
            "extra": "iterations: 3564\ncpu: 4936517.957351291 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/64/manual_time",
            "value": 1276683.2422586654,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 31278460.837887067 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/64/manual_time",
            "value": 12094872.41379309,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 181034482.75862068 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/64/manual_time",
            "value": 146846619.99999988,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 981250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/256/manual_time",
            "value": 82598.03648193386,
            "unit": "ns/iter",
            "extra": "iterations: 8607\ncpu: 205138.2595561752 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/256/manual_time",
            "value": 265255.37878788076,
            "unit": "ns/iter",
            "extra": "iterations: 2640\ncpu: 2568655.303030303 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/256/manual_time",
            "value": 1146804.2622950845,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 20491803.278688524 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/256/manual_time",
            "value": 6761117.142857153,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 128869047.61904761 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/256/manual_time",
            "value": 54095338.46153863,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 730769230.7692307 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/256/manual_time",
            "value": 610608200.0000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3968750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1000/manual_time",
            "value": 366175.9473684215,
            "unit": "ns/iter",
            "extra": "iterations: 1900\ncpu: 921052.6315789474 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1000/manual_time",
            "value": 1241508.3185840715,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 10564159.292035399 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1000/manual_time",
            "value": 5754270.161290306,
            "unit": "ns/iter",
            "extra": "iterations: 124\ncpu: 83039314.51612903 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1000/manual_time",
            "value": 32080672.727272693,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 516335227.27272725 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1000/manual_time",
            "value": 237806099.99999997,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2916666666.6666665 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1000/manual_time",
            "value": 2571968999.999997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16078125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1/manual_time",
            "value": 5927.238703097488,
            "unit": "ns/iter",
            "extra": "iterations: 119701\ncpu: 6396.14539561073 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1/manual_time",
            "value": 23553.452168345877,
            "unit": "ns/iter",
            "extra": "iterations: 29677\ncpu: 23692.59022138356 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1/manual_time",
            "value": 95812.37937689328,
            "unit": "ns/iter",
            "extra": "iterations: 7254\ncpu: 94775.29638819961 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1/manual_time",
            "value": 393470.89639115374,
            "unit": "ns/iter",
            "extra": "iterations: 1718\ncpu: 391079.74388824217 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1/manual_time",
            "value": 1676149.6277915633,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 1667183.6228287842 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1/manual_time",
            "value": 6040676.068376068,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 6009615.384615385 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/4/manual_time",
            "value": 6067.262434911451,
            "unit": "ns/iter",
            "extra": "iterations: 116768\ncpu: 6556.804946560702 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/4/manual_time",
            "value": 24034.244317794157,
            "unit": "ns/iter",
            "extra": "iterations: 29126\ncpu: 24677.2642999382 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/4/manual_time",
            "value": 98276.61905422318,
            "unit": "ns/iter",
            "extra": "iterations: 7211\ncpu: 99674.10900013868 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/4/manual_time",
            "value": 398333.5446685877,
            "unit": "ns/iter",
            "extra": "iterations: 1735\ncpu: 405259.3659942363 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/4/manual_time",
            "value": 1557794.6666666686,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 1562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/4/manual_time",
            "value": 6228276.315789478,
            "unit": "ns/iter",
            "extra": "iterations: 114\ncpu: 6167763.157894737 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/16/manual_time",
            "value": 6594.836306063659,
            "unit": "ns/iter",
            "extra": "iterations: 107365\ncpu: 6985.516695384902 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/16/manual_time",
            "value": 26237.596348125444,
            "unit": "ns/iter",
            "extra": "iterations: 26726\ncpu: 26893.28743545611 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/16/manual_time",
            "value": 106950.3939393934,
            "unit": "ns/iter",
            "extra": "iterations: 6600\ncpu: 106534.09090909091 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/16/manual_time",
            "value": 435037.15880893235,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 436181.7617866005 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/16/manual_time",
            "value": 1818552.985074627,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 1826803.4825870646 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/16/manual_time",
            "value": 6877129.411764709,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 6893382.352941177 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/64/manual_time",
            "value": 8945.44616704937,
            "unit": "ns/iter",
            "extra": "iterations: 79208\ncpu: 9468.74053125947 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/64/manual_time",
            "value": 35511.124062439856,
            "unit": "ns/iter",
            "extra": "iterations: 19732\ncpu: 35633.74214473951 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/64/manual_time",
            "value": 143308.92930118483,
            "unit": "ns/iter",
            "extra": "iterations: 4894\ncpu: 143670.8214139763 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/64/manual_time",
            "value": 588175.9599332222,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 586915.6928213689 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/64/manual_time",
            "value": 2314862.413793102,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 2316810.3448275863 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/64/manual_time",
            "value": 9095023.376623377,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 9131493.506493507 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/256/manual_time",
            "value": 39303.815767356195,
            "unit": "ns/iter",
            "extra": "iterations: 17847\ncpu: 39397.377710539586 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/256/manual_time",
            "value": 158305.83276372706,
            "unit": "ns/iter",
            "extra": "iterations: 4389\ncpu: 160201.64046479837 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/256/manual_time",
            "value": 645948.5480943759,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 638044.4646098004 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/256/manual_time",
            "value": 2637677.777777777,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 2662037.037037037 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/256/manual_time",
            "value": 10892096.923076926,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 10817307.692307692 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/256/manual_time",
            "value": 43176343.75,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 42968750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1000/manual_time",
            "value": 175496.4779874216,
            "unit": "ns/iter",
            "extra": "iterations: 3975\ncpu: 172955.9748427673 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1000/manual_time",
            "value": 696621.6161616158,
            "unit": "ns/iter",
            "extra": "iterations: 990\ncpu: 694444.4444444445 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1000/manual_time",
            "value": 2843623.983739837,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 2858231.7073170734 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1000/manual_time",
            "value": 11585115.000000004,
            "unit": "ns/iter",
            "extra": "iterations: 60\ncpu: 11718750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1000/manual_time",
            "value": 47247993.333333336,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 46875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1000/manual_time",
            "value": 189770375,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 187500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithSvcRef/manual_time",
            "value": 4993.9876064028285,
            "unit": "ns/iter",
            "extra": "iterations: 139911\ncpu: 7817.469677151904 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithBundleContext/manual_time",
            "value": 6454.714372060334,
            "unit": "ns/iter",
            "extra": "iterations: 109198\ncpu: 9443.854283045477 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithInterfaceName/manual_time",
            "value": 7160.999107575918,
            "unit": "ns/iter",
            "extra": "iterations: 98608\ncpu: 10299.620720428364 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000",
            "value": 6060.498214286066,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1024",
            "value": 6037.435714286435,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/2048",
            "value": 6081.099107145096,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/4096",
            "value": 9595.475892857457,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 9486.607142857143 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/8192",
            "value": 6147.606249998359,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/16384",
            "value": 6217.9133928574565,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/32768",
            "value": 6288.988839285383,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/65536",
            "value": 6496.287499999198,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/131072",
            "value": 6523.416071429113,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/262144",
            "value": 6622.741071428859,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/524288",
            "value": 6610.191071424814,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000000",
            "value": 6921.285714283394,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6975.446428571428 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/1",
            "value": 32232.0030535779,
            "unit": "ns/iter",
            "extra": "iterations: 23579\ncpu: 31807.964714364476 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/4000",
            "value": 17021192.68292136,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 17149390.243902437 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/10000",
            "value": 50800690.00000549,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 51562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/1",
            "value": 32138.73785995962,
            "unit": "ns/iter",
            "extra": "iterations: 23579\ncpu: 32470.630645913738 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/4000",
            "value": 130547785.71430299,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 131696428.57142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/10000",
            "value": 316070050.00000757,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 320312500 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/1",
            "value": 28534.87648465604,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 28459.75790232611 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/4000",
            "value": 3130969.642857703,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 3138950.8928571427 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/10000",
            "value": 8681326.666671036,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 8541666.666666666 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/1",
            "value": 420.9472356718331,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/3",
            "value": 1233.5194642860513,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1227.6785714285713 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/7",
            "value": 2802.6766952338417,
            "unit": "ns/iter",
            "extra": "iterations: 248889\ncpu: 2762.2755525555567 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/11",
            "value": 4447.005172090353,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/15",
            "value": 6143.495535712062,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/18",
            "value": 7305.392857140143,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7324.21875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/20",
            "value": 8095.641741075861,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/1",
            "value": 5636.5169642893825,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/3",
            "value": 7994.47767857231,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/7",
            "value": 12285.095312499549,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 12207.03125 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/11",
            "value": 16646.593169151623,
            "unit": "ns/iter",
            "extra": "iterations: 40727\ncpu: 16497.041274829964 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/15",
            "value": 20959.009375005167,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 20996.09375 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/18",
            "value": 24250.356580845044,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 24588.174239126794 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/20",
            "value": 26515.360680011654,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 26681.02303343073 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/1",
            "value": 636.7276785717024,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 627.7901785714286 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/3",
            "value": 1710.5324929466046,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1726.4218349853784 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/7",
            "value": 3825.7040612424075,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3850.439552786513 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/11",
            "value": 7208.371428573303,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7254.464285714285 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/15",
            "value": 9430.810130311744,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/18",
            "value": 11024.39687500123,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10986.328125 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/20",
            "value": 12112.16964285963,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11997.767857142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/1",
            "value": 415.75273437517114,
            "unit": "ns/iter",
            "extra": "iterations: 1792000\ncpu: 418.5267857142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/3",
            "value": 1499.2693530045697,
            "unit": "ns/iter",
            "extra": "iterations: 497778\ncpu: 1506.6957559393948 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/7",
            "value": 3742.096889113389,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3683.029137447969 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/11",
            "value": 7097.068080358529,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6975.446428571428 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/15",
            "value": 9281.924107144489,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 9242.466517857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/18",
            "value": 10677.101562500013,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10742.1875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/20",
            "value": 11886.723437498858,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/BundleInstallCppFramework/manual_time",
            "value": 216233.95705521558,
            "unit": "ns/iter",
            "extra": "iterations: 3260\ncpu: 234854.29447852762 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/LargeBundleInstallCppFramework/manual_time",
            "value": 210016.974281392,
            "unit": "ns/iter",
            "extra": "iterations: 3305\ncpu: 231656.58093797276 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterFromString",
            "value": 609.8805357144751,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          },
          {
            "name": "ConstructNonTrivialFilterFromString",
            "value": 963.8836321947463,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 962.6111774057243 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Simple",
            "value": 409.8970040225569,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Complex",
            "value": 449.5094999998628,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 449.21875 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Simple",
            "value": 202.5441985472115,
            "unit": "ns/iter",
            "extra": "iterations: 3446154\ncpu: 204.03179892715184 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Complex",
            "value": 324.8445507568022,
            "unit": "ns/iter",
            "extra": "iterations: 2133333\ncpu: 314.9414554596024 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Simple",
            "value": 193.85350837976333,
            "unit": "ns/iter",
            "extra": "iterations: 3733333\ncpu: 196.70760684889348 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Complex",
            "value": 240.02334374725592,
            "unit": "ns/iter",
            "extra": "iterations: 2986667\ncpu: 240.6528749271345 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterIncremental",
            "value": 2533.43714285685,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2511.160714285714 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterNotOperator",
            "value": 1137.789531249922,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1123.046875 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByInterface",
            "value": 1502.3267400319512,
            "unit": "ns/iter",
            "extra": "iterations: 497778\ncpu: 1506.6957559393948 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByClassName",
            "value": 1307.2449967659597,
            "unit": "ns/iter",
            "extra": "iterations: 497778\ncpu: 1286.9692915315663 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterface",
            "value": 1261.8896428567234,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1283.482142857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassName",
            "value": 933.3353422610614,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 920.7585175185189 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassNameAndLDAPFilter",
            "value": 745.4525669641855,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterfaceAndLDAPFilter",
            "value": 696.9376116069878,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 697.5446428571429 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CreateBundleTracker/1",
            "value": 206.6117474727179,
            "unit": "ns/iter",
            "extra": "iterations: 3446154\ncpu: 204.03179892715184 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CreateBundleTracker/8",
            "value": 1691.2687558461594,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1688.0569053190366 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CreateBundleTracker/64",
            "value": 13163.40535713932,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 13113.839285714286 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CreateBundleTracker/512",
            "value": 105336.57812501928,
            "unit": "ns/iter",
            "extra": "iterations: 6400\ncpu: 104980.46875 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CreateBundleTracker/4096",
            "value": 842271.6198125136,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 836680.0535475235 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CreateBundleTracker/10000",
            "value": 2068157.6811591145,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2038043.4782608696 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/OpenBundleTracker/manual_time",
            "value": 3017.1064071379215,
            "unit": "ns/iter",
            "extra": "iterations: 228885\ncpu: 4164.20910064006 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerGetObject/manual_time",
            "value": 160.23050831659612,
            "unit": "ns/iter",
            "extra": "iterations: 4348650\ncpu: 194.02573212376254 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerRemoveMethod/manual_time",
            "value": 321.1271856460343,
            "unit": "ns/iter",
            "extra": "iterations: 2160283\ncpu: 19695.046898947963 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CloseBundleTracker/manual_time",
            "value": 753.3653696416463,
            "unit": "ns/iter",
            "extra": "iterations: 930819\ncpu: 3139.0366977897957 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CloseBundleTrackerWithListeners/1/manual_time",
            "value": 778.9667977152254,
            "unit": "ns/iter",
            "extra": "iterations: 918039\ncpu: 3182.7351561317114 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CloseBundleTrackerWithListeners/128/manual_time",
            "value": 760.3339987935423,
            "unit": "ns/iter",
            "extra": "iterations: 912159\ncpu: 3134.7330892969317 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CloseBundleTrackerWithListeners/16384/manual_time",
            "value": 765.9199688737895,
            "unit": "ns/iter",
            "extra": "iterations: 919917\ncpu: 3244.1785508910043 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CloseBundleTrackerWithListeners/500000/manual_time",
            "value": 774.6840728614103,
            "unit": "ns/iter",
            "extra": "iterations: 905272\ncpu: 3486.5211781652365 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/StartBundle/manual_time",
            "value": 9875.190284304108,
            "unit": "ns/iter",
            "extra": "iterations: 71472\ncpu: 15959.046899485113 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerScalability/0/manual_time",
            "value": 10799.299154197877,
            "unit": "ns/iter",
            "extra": "iterations: 71057\ncpu: 17151.723264421522 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerScalability/1/manual_time",
            "value": 12994.24940898015,
            "unit": "ns/iter",
            "extra": "iterations: 50760\ncpu: 21547.478329393223 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerScalability/4/manual_time",
            "value": 14985.897496343587,
            "unit": "ns/iter",
            "extra": "iterations: 42418\ncpu: 25416.686312414542 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerScalability/16/manual_time",
            "value": 28435.05378136918,
            "unit": "ns/iter",
            "extra": "iterations: 23986\ncpu: 48856.62469774035 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerScalability/64/manual_time",
            "value": 82636.52898380629,
            "unit": "ns/iter",
            "extra": "iterations: 8522\ncpu: 143012.20370804975 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerScalability/256/manual_time",
            "value": 285443.9014373717,
            "unit": "ns/iter",
            "extra": "iterations: 2435\ncpu: 500513.34702258726 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerScalability/1000/manual_time",
            "value": 1121332.5281803547,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 2012882.4476650564 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}