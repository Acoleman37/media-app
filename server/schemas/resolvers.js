const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");


const resolvers = {
    Query: {
        me: async(parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('savedGames')
                .populate('savedMovies')

                return userData;
            }

            throw new AuthenticationError('Not logged in');

        },

    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });


            if (!user) {

                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        // Takes in $movieId
        saveMovie: async (parent, args, context) => {

            if (context.user) {
                console.log(args);
                const updatedMovieList = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { saveMovies: { _id: args.SOMETHING._id } } },
                    { new: true }
                );

                console.log("updated Movie List: " + updatedMovieList);

                return updatedMovieList;
            }

            throw new AuthenticationError("You need to be logged in!");
        },
        // Takes in $movieId
        removeMovie: async (parent, args, context) => {
            if (context.user) {
                console.log(args);
                const updatedMovieList = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { saveMovies: { _id: args.SOMETHING._id } } },
                    { new: true }
                );

                console.log("updated Movie List: " + updatedMovieList);

                return updatedMovieList;
            }
        },
        // Takes in $gameId
        saveGame: async (parents, args, context) => {

            if (context.user) {
                console.log(args);
                const updatedGameList = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { saveGames: { _id: args.SOMETHING._id } } },
                    { new: true }
                );

                console.log("updated Game List: " + updatedGameList);

                return updatedGameList;
            }

            throw new AuthenticationError("You need to be logged in!");
        },
        // Takes in $gameId
        removeGame: async (parents, args, context) => {

            if (context.user) {
                console.log(args);
                const updatedGameList = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { saveGames: { _id: args.SOMETHING._id } } },
                    { new: true }
                );

                console.log("updated Game List: " + updatedGameList);

                return updatedGameList;
            }

            throw new AuthenticationError("You need to be logged in!");
        }
    }
}

module.exports = resolvers;