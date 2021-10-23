
<template>
    <div class="my-article" @click="createLoves($event)">
        <back-ground ref="myback"></back-ground>
        <TopBar></TopBar>
        <Sider></Sider>
        <div  class="article-content" >
            <articleItem v-for="item in tableData "
                         :bean='item'
                         v-bind:key='item.index'>
            </articleItem>
        </div>
        <SideCatalog></SideCatalog>

    </div>
</template>

<script>
    import BackGround from '../components/background'
    import ArticleItem from "../components/articleItem";
    import Sider from "../components/Sider";
    import TopBar from "../components/TopBar";
    import SideCatalog from "../components/SideCatalog";
    export default {
        name: "Blogs",
        components: {BackGround,TopBar,Sider, ArticleItem,SideCatalog},
        data() {
            return {
                tableData:[
                    {
                        artId: 1,
                        title:'Docker',
                        typeName:'Docker',
                        content:'一款产品： 开发–上线 两套环境！应用环境，应用配置！\n' +
                            '开发 — 运维。 问题：我在我的电脑上可以允许！版本更新，导致服务不可用！对于运维来说考验十分大？\n' +
                            '环境配置是十分的麻烦，每一个机器都要部署环境(集群Redis、ES、Hadoop…) !费事费力。\n' +
                            '发布一个项目( jar + (Redis MySQL JDK ES) )，项目能不能带上环境安装打包！\n' +
                            '之前在服务器配置一个应用的环境 Redis、MySQL、JDK、ES、Hadoop 配置超麻烦了，不能够跨平台。开发环境Windows，最后发布到Linux！\n' +
                            '传统：开发jar，运维来做！\n' +
                            '现在：开发打包部署上线，一套流程做完！\n' +
                            '安卓流程：java — apk —发布（应用商店）—- 张三使用apk一安装即可用！\n' +
                            'docker流程： java-jar（环境） — 打包项目带上环境（镜像） — ( Docker仓库：商店）——-下载我们发布的镜像 —- 直接运行即可！\n' +
                            'Docker给以上的问题，提出了解决方案！',
                        artCommentCount:'20',
                        postTime:'2021/10/20 13:03'
                    },
                    {
                        artId: 2,
                        title:'工厂模式',
                        typeName:'设计模式',
                        content:'意图：定义一个创建对象的接口，让其子类自己决定实例化哪一个工厂类，工厂模式使其创建过程延迟到子类进行。\n' +
                            '主要解决：主要解决接口选择的问题。\n' +
                            '何时使用：我们明确地计划不同条件下创建不同实例时。\n' +
                            '如何解决：让其子类实现工厂接口，返回的也是一个抽象的产品。\n' +
                            '关键代码：创建过程在其子类执行。\n' +
                            '应用实例： 1、您需要一辆汽车，可以直接从工厂里面提货，而不用去管这辆汽车是怎么做出来的，以及这个汽车里面的具体实现。 2、Hibernate 换数据库只需换方言和驱动就可以。\n' +
                            '优点： 1、一个调用者想创建一个对象，只要知道其名称就可以了。 2、扩展性高，如果想增加一个产品，只要扩展一个工厂类就可以。 3、屏蔽产品的具体实现，调用者只关心产品的接口。\n' +
                            '缺点：每次增加一个产品时，都需要增加一个具体类和对象实现工厂，使得系统中类的个数成倍增加，在一定程度上增加了系统的复杂度，同时也增加了系统具体类的依赖。这并不是什么好事。\n' +
                            '使用场景： 1、日志记录器：记录可能记录到本地硬盘、系统事件、远程服务器等，用户可以选择记录日志到什么地方。 2、数据库访问，当用户不知道最后系统采用哪一类数据库，以及数据库可能有变化时。 3、设计一个连接服务器的框架，需要三个协议，"POP3"、"IMAP"、"HTTP"，可以把这三个作为产品类，共同实现一个接口。\n' +
                            '注意事项：作为一种创建类模式，在任何需要生成复杂对象的地方，都可以使用工厂方法模式。有一点需要注意的地方就是复杂对象适合使用工厂模式，而简单对象，特别是只需要通过 new 就可以完成创建的对象，无需使用工厂模式。如果使用工厂模式，就需要引入一个工厂类，会增加系统的复杂度。',
                        artCommentCount:'20',
                        postTime:'2021/10/20 13:04'
                    },
                    {
                        artId: 3,
                        title:'适配器模式',
                        typeName:'设计模式',
                        content:'适配器模式（Adapter Pattern）是作为两个不兼容的接口之间的桥梁。这种类型的设计模式属于结构型模式，它结合了两个独立接口的功能。\n' +
                            '这种模式涉及到一个单一的类，该类负责加入独立的或不兼容的接口功能。举个真实的例子，读卡器是作为内存卡和笔记本之间的适配器。您将内存卡插入读卡器，再将读卡器插入笔记本，这样就可以通过笔记本来读取内存卡。\n' +
                            '我们通过下面的实例来演示适配器模式的使用。其中，音频播放器设备只能播放 mp3 文件，通过使用一个更高级的音频播放器来播放 vlc 和 mp4 文件。',
                        artCommentCount:'20',
                        postTime:'2021/10/20 13:04'
                    },
                    {
                        artId: 4,
                        title:'建造者模式',
                        typeName:'设计模式',
                        content:'建造者模式（Builder Pattern）使用多个简单的对象一步一步构建成一个复杂的对象。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。\n' +
                            '一个 Builder 类会一步一步构造最终的对象。该 Builder 类是独立于其他对象的。意图：将一个复杂的构建与其表示相分离，使得同样的构建过程可以创建不同的表示。\n' +
                            '主要解决：主要解决在软件系统中，有时候面临着"一个复杂对象"的创建工作，其通常由各个部分的子对象用一定的算法构成；由于需求的变化，这个复杂对象的各个部分经常面临着剧烈的变化，但是将它们组合在一起的算法却相对稳定。\n' +
                            '何时使用：一些基本部件不会变，而其组合经常变化的时候。\n' +
                            '如何解决：将变与不变分离开。\n' +
                            '关键代码：建造者：创建和提供实例，导演：管理建造出来的实例的依赖关系。\n' +
                            '应用实例： 1、去肯德基，汉堡、可乐、薯条、炸鸡翅等是不变的，而其组合是经常变化的，生成出所谓的"套餐"。 2、JAVA 中的 StringBuilder。\n' +
                            '优点： 1、建造者独立，易扩展。 2、便于控制细节风险。\n' +
                            '缺点： 1、产品必须有共同点，范围有限制。 2、如内部变化复杂，会有很多的建造类。\n' +
                            '使用场景： 1、需要生成的对象具有复杂的内部结构。 2、需要生成的对象内部属性本身相互依赖。\n' +
                            '注意事项：与工厂模式的区别是：建造者模式更加关注与零件装配的顺序。',
                        artCommentCount:'20',
                        postTime:'2021/10/20 13:04'
                    },
                    {
                        artId: 5,
                        title:'抽象工厂模式',
                        typeName:'设计模式',
                        content:'抽象工厂模式（Abstract Factory Pattern）是围绕一个超级工厂创建其他工厂。该超级工厂又称为其他工厂的工厂。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。\n' +
                            '在抽象工厂模式中，接口是负责创建一个相关对象的工厂，不需要显式指定它们的类。每个生成的工厂都能按照工厂模式提供对象。',
                        artCommentCount:'20',
                        postTime:'2021/10/20 13:04'
                    },
                    {
                        artId: 6,
                        title:'抽象工厂模式',
                        typeName:'设计模式',
                        content:'抽象工厂模式（Abstract Factory Pattern）是围绕一个超级工厂创建其他工厂。该超级工厂又称为其他工厂的工厂。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。\n' +
                            '在抽象工厂模式中，接口是负责创建一个相关对象的工厂，不需要显式指定它们的类。每个生成的工厂都能按照工厂模式提供对象。',
                        artCommentCount:'20',
                        postTime:'2021/10/20 13:04'
                    },
                    {
                        artId: 7,
                        title: '抽象工厂模式',
                        typeName: '设计模式',
                        content: '抽象工厂模式（Abstract Factory Pattern）是围绕一个超级工厂创建其他工厂。该超级工厂又称为其他工厂的工厂。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。\n' +
                            '在抽象工厂模式中，接口是负责创建一个相关对象的工厂，不需要显式指定它们的类。每个生成的工厂都能按照工厂模式提供对象。',
                        artCommentCount: '20',
                        postTime: '2021/10/20 13:04'
                    }
                ]
            };
        },
        created() {
            this.runInv;
        },
        computed:{
            runInv() {
                this.timer = setInterval(() => {
                    this.gotoPage(this.nextIndex)
                }, 3000)
            }
        },
        methods:{
            createLoves(e){
                this.$refs.myback.createLoves(e);
            },
        }
    };
</script>
<style scoped lang="scss">
    @import '../vueblog-vue/src/assets/common/base';
    .my-article{
        width: 100%;
    }
    .article-content {
        margin-left: 30%;
        margin-right: 30%;
        padding-left: 20px;
        padding-right: 20px;

        .turn-page {
            margin-top: 30px;
            margin-bottom: 30px;
            padding: 10px;
            font-size: 26px;
            font-weight: bold;
            color: $text_blue;
            border: 1px solid $text_yellow;
            text-align: center;
        }

        .turn-page:hover {
            background-color: $text_yellow;
            cursor: pointer;
        }

        .previous-btn {
            float: left;
            margin-left: 20px;
        }

        .next-btn {
            float: right;
            margin-right: 20px;
        }
    }
</style>
