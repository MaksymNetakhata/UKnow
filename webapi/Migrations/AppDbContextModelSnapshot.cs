﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using UKnow.Data;

#nullable disable

namespace webapi.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.18")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("UKnow.Data.Profile", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("Average")
                        .HasColumnType("integer");

                    b.Property<int>("ScoreIn1")
                        .HasColumnType("integer");

                    b.Property<int>("ScoreIn10")
                        .HasColumnType("integer");

                    b.Property<int>("ScoreIn2")
                        .HasColumnType("integer");

                    b.Property<int>("ScoreIn3")
                        .HasColumnType("integer");

                    b.Property<int>("ScoreIn4")
                        .HasColumnType("integer");

                    b.Property<int>("ScoreIn5")
                        .HasColumnType("integer");

                    b.Property<int>("ScoreIn6")
                        .HasColumnType("integer");

                    b.Property<int>("ScoreIn7")
                        .HasColumnType("integer");

                    b.Property<int>("ScoreIn8")
                        .HasColumnType("integer");

                    b.Property<int>("ScoreIn9")
                        .HasColumnType("integer");

                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("Profile");
                });

            modelBuilder.Entity("UKnow.Data.Test", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("CorrectAnswer")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Option1")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Option2")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Option3")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Question")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Test");
                });

            modelBuilder.Entity("UKnow.Data.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("User");
                });

            modelBuilder.Entity("UKnow.Data.Profile", b =>
                {
                    b.HasOne("UKnow.Data.User", "User")
                        .WithOne("Profile")
                        .HasForeignKey("UKnow.Data.Profile", "UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("UKnow.Data.User", b =>
                {
                    b.Navigation("Profile")
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
