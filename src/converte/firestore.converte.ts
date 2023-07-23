import {
    DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";
import Category from "../types/category.types";
import Users from "../types/users.types";

export const categoryConverter = {
    toFirestore(category: Category): DocumentData {
        return {...category}
    },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Category {
    const data = snapshot.data(options);

    return {
      id: data.id,
      displayName: data.displayName,
      imageUrl: data.imageUrl,
      name: data.name,
      products: data.products
    };
  },
};

export const UserConverter = {
  toFirestore(user: Users): DocumentData {
    return { ...user };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Users {
    const data = snapshot.data(options);

    return {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      provider: data.provider
    };
  },
};
